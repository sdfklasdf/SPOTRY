export interface SessionEconomicsInput {
  partnerPayoutKrw: number;
  pgFeeRate: number;
  targetContributionRate: number;
  capacity: number;
  venueCostKrw?: number;
  equipmentCostKrw?: number;
  promoCostKrw?: number;
  refundCsReserveKrw?: number;
  payoutFeeKrw?: number;
}

export interface SessionEconomicsFloor {
  requiredGrossRevenueKrw: number;
  fullCapacityPricePerPersonKrw: number;
}

function assertRate(name: string, value: number): void {
  if (!Number.isFinite(value) || value < 0 || value >= 1) throw new Error(`${name} must be in [0, 1).`);
}

export function sessionCashFloor(input: SessionEconomicsInput): SessionEconomicsFloor {
  if (!Number.isFinite(input.partnerPayoutKrw) || input.partnerPayoutKrw < 0) throw new Error('partnerPayoutKrw must be non-negative.');
  if (!Number.isInteger(input.capacity) || input.capacity < 1) throw new Error('capacity must be a positive integer.');
  assertRate('pgFeeRate', input.pgFeeRate);
  assertRate('targetContributionRate', input.targetContributionRate);

  const directCosts = input.partnerPayoutKrw
    + (input.venueCostKrw ?? 0)
    + (input.equipmentCostKrw ?? 0)
    + (input.promoCostKrw ?? 0)
    + (input.refundCsReserveKrw ?? 0)
    + (input.payoutFeeKrw ?? 0);

  const revenueAfterPgRequired = directCosts / (1 - input.targetContributionRate);
  const requiredGrossRevenueKrw = revenueAfterPgRequired / (1 - input.pgFeeRate);
  return {
    requiredGrossRevenueKrw,
    fullCapacityPricePerPersonKrw: requiredGrossRevenueKrw / input.capacity,
  };
}

export function contributionFromCashBooking(input: {
  grossRevenueKrw: number;
  partnerPayoutKrw: number;
  pgFeeRate: number;
  otherVariableCostKrw?: number;
}): { contributionKrw: number; contributionRate: number } {
  if (input.grossRevenueKrw <= 0) throw new Error('grossRevenueKrw must be positive.');
  assertRate('pgFeeRate', input.pgFeeRate);
  const pgFeeKrw = input.grossRevenueKrw * input.pgFeeRate;
  const contributionKrw = input.grossRevenueKrw - pgFeeKrw - input.partnerPayoutKrw - (input.otherVariableCostKrw ?? 0);
  return { contributionKrw, contributionRate: contributionKrw / input.grossRevenueKrw };
}
