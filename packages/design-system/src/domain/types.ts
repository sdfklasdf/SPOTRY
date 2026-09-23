export type AvailabilityStatus = 'available' | 'few_seats' | 'sold_out' | 'booking_closed';
export type PaymentMode = 'cash_card' | 'credit' | 'credit_plus_card';
export type ProviderType = 'individual_instructor' | 'facility';
export type RecordStage = 'empty' | 'first_record' | 'two_records' | 'pattern_ready';

export interface Availability {
  status: AvailabilityStatus;
  remainingSeats?: number;
}

export interface ExperiencePrice {
  cashPriceKrw: number;
  creditCost?: number;
  membershipCreditEnabled: boolean;
}

export interface ExperienceSummary {
  id: string;
  sportName: string;
  title: string;
  beginnerCopy: string;
  sessionLabel: string;
  venueLabel: string;
  travelLabel?: string;
  durationMin: number;
  capacity: number;
  soloFriendly: boolean;
  equipmentLabel?: string;
  price: ExperiencePrice;
  availability: Availability;
}

export interface ReflectionInput {
  fun: number;
  perceivedIntensity: number;
  wantAgain: number;
  difficulty?: number;
  soloComfort?: 'uncomfortable' | 'neutral' | 'comfortable';
}

export interface SportRecord {
  sportId: string;
  sportName: string;
  fun: number;
  perceivedIntensity: number;
  wantAgain: number;
  difficulty?: number;
  soloComfort?: 'uncomfortable' | 'neutral' | 'comfortable';
  travelMinutes?: number;
}

export interface PatternInsight {
  stage: RecordStage;
  title: string;
  statements: readonly string[];
}

export interface RecommendationEvidence {
  kind: 'personal' | 'practical';
  text: string;
}

export interface NextTryRecommendation {
  sportName: string;
  sessionId: string;
  title: string;
  evidence: readonly RecommendationEvidence[];
  availability: Availability;
}
