import test from 'node:test';
import assert from 'node:assert/strict';
import { availableBookingActions } from '../src/contracts/booking.js';
import { feedbackForAction } from '../src/contracts/interaction.js';
import { imagePolicy } from '../src/contracts/image.js';
import { normalizeLegacyDeepLink, routeToDeepLink, tabForRoute } from '../src/contracts/navigation.js';
import { presentArea, presentDistance } from '../src/contracts/location.js';
import { sessionCashFloor, contributionFromCashBooking } from '../src/contracts/economics.js';
import { spotryCssVariables } from '../src/web/cssVariables.js';
import { triggerIfNeeded } from '../src/platform/haptics.js';

test('legacy compare deep link redirects into Record compare', () => {
  assert.equal(normalizeLegacyDeepLink('spotry://compare'), 'spotry://record/compare');
  assert.equal(routeToDeepLink({ name: 'record_compare' }), 'spotry://record/compare');
  assert.equal(tabForRoute({ name: 'record_compare' }), 'record');
});

test('distance is only shown from precise location context', () => {
  assert.equal(presentDistance({ mode: 'selected_area', areaLabel: '서울 마포구' }), null);
  assert.equal(presentDistance({ mode: 'precise', areaLabel: '서울 마포구', distanceKm: 2.24 }), '2.2km');
  assert.equal(presentArea({ mode: 'permission_required' }), '지역을 선택해주세요');
});

test('reduced motion removes animation duration but preserves semantic haptic', () => {
  const feedback = feedbackForAction('select', 'reduced');
  assert.equal(feedback.durationMs, 0);
  assert.equal(feedback.haptic, 'selection');
});

test('real provider contexts never substitute editorial imagery as documentary proof', () => {
  const result = imagePolicy({ context: 'real_provider', hasRealSource: false });
  assert.equal(result.canRenderEditorialFallback, false);
  assert.equal(result.documentaryLabelRequired, true);
});

test('confirmed booking exposes only available aftercare actions', () => {
  const actions = availableBookingActions({
    status: 'confirmed',
    startsAtIso: '2026-09-26T19:00:00+09:00',
    preparationAvailable: true,
    directionsAvailable: true,
    calendarExportAvailable: true,
    supportAvailable: true,
  });
  assert.equal(actions.length, 4);
});

test('completed booking has no pre-session aftercare actions', () => {
  const actions = availableBookingActions({
    status: 'completed',
    startsAtIso: '2026-09-26T19:00:00+09:00',
    preparationAvailable: true,
    directionsAvailable: true,
    calendarExportAvailable: true,
    supportAvailable: true,
  });
  assert.equal(actions.length, 0);
});

test('web token adapter emits locked Action Green and Pretendard variables', () => {
  const variables = spotryCssVariables();
  assert.equal(variables['--spotry-action-500'], '#5AF03A');
  assert.equal(variables['--spotry-font-sans'], 'Pretendard');
});

test('haptic adapter is not called for none intent', async () => {
  let calls = 0;
  await triggerIfNeeded({ async trigger() { calls += 1; } }, 'none');
  assert.equal(calls, 0);
});

test('Kang Minje one-person 90m session floor remains about 35.4k before venue costs', () => {
  const floor = sessionCashFloor({ partnerPayoutKrw: 30000, pgFeeRate: 0.0374, targetContributionRate: 0.12, capacity: 1 });
  assert.ok(floor.requiredGrossRevenueKrw > 35400 && floor.requiredGrossRevenueKrw < 35500);
  assert.ok(floor.fullCapacityPricePerPersonKrw > 35400 && floor.fullCapacityPricePerPersonKrw < 35500);
});

test('Kang Minje two-seat session lowers the mathematical floor per person', () => {
  const floor = sessionCashFloor({ partnerPayoutKrw: 30000, pgFeeRate: 0.0374, targetContributionRate: 0.12, capacity: 2 });
  assert.ok(floor.fullCapacityPricePerPersonKrw > 17700 && floor.fullCapacityPricePerPersonKrw < 17750);
});

test('venue cost flows directly into the cash floor instead of being ignored', () => {
  const withoutVenue = sessionCashFloor({ partnerPayoutKrw: 30000, pgFeeRate: 0.0374, targetContributionRate: 0.12, capacity: 1 });
  const withVenue = sessionCashFloor({ partnerPayoutKrw: 30000, pgFeeRate: 0.0374, targetContributionRate: 0.12, capacity: 1, venueCostKrw: 10000 });
  assert.ok(withVenue.requiredGrossRevenueKrw > withoutVenue.requiredGrossRevenueKrw);
});

test('35k one-person cash booking is below 12 percent target before venue cost', () => {
  const result = contributionFromCashBooking({ grossRevenueKrw: 35000, partnerPayoutKrw: 30000, pgFeeRate: 0.0374 });
  assert.ok(result.contributionRate < 0.12);
});
