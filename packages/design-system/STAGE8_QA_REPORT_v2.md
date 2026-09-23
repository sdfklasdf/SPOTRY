# SPOTRY Stage 8 QA Report v2

Date: 2026-09-22
Package: `@spotry/design-system@0.2.0-stage8`
Status: Stage 8 IN PROGRESS — 8A complete, 8B component baseline complete, 8C/8D materially advanced, 8E code-level QA complete / native visual QA pending.

## Current implementation

### 8A — Tokens
- Direction B color tokens including Action Green.
- Pretendard type tokens.
- spacing, radius, border, layout, image ratios, z-index.
- motion durations + reduced-motion zero-duration token.
- semantic haptic intent map.
- 44px minimum interaction target baseline.

### 8B — Consumer component baseline
35 TSX component source files now cover the locked component set, including:
- Primary / Secondary / Text buttons.
- AppBar.
- Bottom Navigation: 홈 / 탐색 / 예약 / 기록 / MY.
- QuickFilterChip.
- ProductLoopStrip.
- SportPersonalityCard.
- ExperienceRow.
- SessionRow.
- BookingSummary.
- DecisionSummaryGrid.
- AvailabilityBadge / remaining seat truth.
- PriceBlock with KRW-first presentation.
- AlternatePaymentMethods.
- StickyBookingCTA.
- CoachTrustBlock.
- VerificationBadge.
- ReviewProof.
- EquipmentTag.
- IntensityMeter.
- CancellationTimeline.
- BookingPrepActions.
- ReflectionFields.
- RecordPatternCard.
- RecordSportRow.
- TasteTag.
- RecommendationReason.
- NextTryCard.
- CompareMetricRow.
- CommitOffer.
- MysteryConstraintChip.
- ImageWithFallback.
- Loading / Empty / Error / Sold-out / Recovery / Offline-save states.

### 8C — Native asset pipeline
Generated and validated:
- `ios-icon-1024.png` — 1024×1024 RGB, no transparency.
- `android-adaptive-foreground.png` — 1024×1024 RGBA.
- `android-adaptive-monochrome.png` — 1024×1024 RGBA.
- `splash-icon.png` — 1024×1024 RGBA.
- `app-icon-size-qa.jpg` — 32/48/64/96/128/192px visual QA sheet.
- `canonical-symbol-production-v2.svg` — improved silhouette trace candidate.
- `vector-v2-qa.jpg` + `VECTOR_QA.md`.

Vector v2 alpha-mask silhouette IoU against the canonical raster at 176×250: ~97.51%.
This is an improved trace candidate, not yet the final hand-tuned designer master. No intentional silhouette redesign was made.

Expo app-config template added for:
- app icon.
- Android adaptive foreground.
- Android 13+ monochrome icon.
- splash icon.
- `spotry` deep-link scheme.

### 8D — Interaction / state contracts
Implemented and tested:
- Deep-link contract.
- Legacy `spotry://compare` → `spotry://record/compare` redirect.
- Tab ownership for deep routes.
- location truth: distance only when precise location context exists.
- reduced-motion semantic feedback contract.
- haptic adapter boundary.
- confirmed-booking aftercare actions.
- image documentary-truth policy.
- offline-save state that never pretends server success.
- Next.js/CSS token adapter.

Expo runtime integration templates added for:
- `expo-haptics` semantic adapter.
- app config / icon / splash / scheme wiring.

Official docs verified during this pass:
- Expo `expo-haptics` current recommended SDK 57 package.
- Expo Router current SDK 57 package and routing guidance.
- `react-native-safe-area-context` as the Expo-recommended safe-area integration.
- Expo app icon/adaptive icon/monochrome icon/splash configuration.
- React Native 0.86 Android edge-to-edge / BackHandler behavior.

### 8E — Automated QA
`npm run verify` result: PASS.

- TypeScript strict: PASS.
- exactOptionalPropertyTypes: PASS.
- noUncheckedIndexedAccess: PASS.
- custom product-policy lint: PASS — 59 TypeScript files checked.
- asset/config validation: PASS.
- build: PASS.
- unit/integration tests: **25 / 25 PASS**.

Important test coverage now includes:
- few-seat count cannot be invented.
- KRW stays primary.
- fixed Credit/KRW conversion absent.
- cash-card remains first checkout method.
- Record 1/2/3+ semantics.
- Next Try requires 2 personal + 1 practical evidence.
- sold-out session cannot be Next Try CTA.
- reflection only requires the 3 locked metrics.
- legacy Compare deep-link redirect.
- precise-location-only distance.
- reduced motion.
- real provider images cannot silently fall back to editorial imagery.
- booking aftercare actions.
- shared web token output.
- semantic haptic boundary.
- Kang Minje 1-person and 2-person economics floor.
- venue cost increases economics floor instead of being ignored.

## Kang Minje supplier update reflected in tests

Locked facts for Pilot economics:
- 90 minutes.
- capacity 2.
- instructor runs session even with 1 participant.
- instructor minimum payout: 20,000 KRW/hour → 30,000 KRW/session.
- external paid lesson possible.
- regular-program conversion possible.
- venue price/cost still varies by location.

Using PG planning rate 3.74% and target session contribution 12%, before venue/equipment/CS/refund/payout-fee costs:
- 1 participant revenue floor ≈ 35.4k KRW/person.
- 2 fully paid participants mathematical floor ≈ 17.7k KRW/person.

Therefore the Pilot cannot use the 17.7k full-capacity floor as a safe production price because one-person sessions are allowed. Venue cost and other variable costs must be added to the one-person floor before final pricing.

## Failure log / fixes

1. First v0.2 TypeScript pass failed on `exactOptionalPropertyTypes` because wrapper components forwarded `onPress={undefined}`.
   - Fixed with conditional prop spreads.
   - Re-run TypeScript PASS.

2. First advanced test pass imported the package root, causing Node tests to load compiled React Native components without a real `react` package installed in this isolated validation package.
   - Fixed by importing pure contract modules directly in Node tests.
   - Re-run 25/25 PASS.

3. Earlier Stage 8 Expo initialization attempt timed out during dependency installation.
   - No runtime installation success is claimed.
   - Integration templates are prepared for the real Expo repository.

4. GitHub connector currently exposes zero accessible repositories.
   - No repository/branch/commit/PR has been invented.
   - Source is archived in Drive until a real SPOTRY repository is connected or created.

## Native QA still required before Stage 8 can close

Not yet completed:
- actual Expo SDK 57 dependency install in the production repo.
- removal of local React Native type shim.
- actual `expo-haptics` runtime call verification.
- SafeAreaProvider / KeyboardAvoidingView integration in the real shell.
- Android predictive-back navigation verification.
- small iPhone / large iPhone / Android device or simulator screenshots.
- Dynamic Type / long Korean / long provider and facility names.
- preview/production-build splash verification.
- app icon review on iOS/Android launchers and Android themed icon.
- final manual curve/control-point cleanup of canonical SVG.

## Result

Stage 8 is substantially advanced but not closed. The remaining blocking work is primarily native-runtime integration and visual/device QA rather than unresolved product structure.
