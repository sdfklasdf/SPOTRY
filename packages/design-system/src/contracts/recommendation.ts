import type { NextTryRecommendation, RecommendationEvidence } from '../domain/types.js';

export function validateRecommendation(rec: NextTryRecommendation): void {
  const personal=rec.evidence.filter(x=>x.kind==='personal').length;
  const practical=rec.evidence.filter(x=>x.kind==='practical').length;
  if (personal<2) throw new Error('Next Try requires at least 2 personal evidence items');
  if (practical<1) throw new Error('Next Try requires at least 1 practical evidence item');
  if (rec.availability.status==='sold_out' || rec.availability.status==='booking_closed') {
    throw new Error('Unbookable sessions cannot be recommendation CTA targets');
  }
}

export function recommendationSummary(evidence: readonly RecommendationEvidence[]):string {
  return evidence.map(x=>x.text).join(' · ');
}
