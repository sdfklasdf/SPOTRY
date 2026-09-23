export type LocationPresentation =
  | { mode: 'precise'; areaLabel: string; distanceKm?: number }
  | { mode: 'selected_area'; areaLabel: string }
  | { mode: 'permission_required'; areaLabel?: string };

export function presentDistance(location: LocationPresentation): string | null {
  if (location.mode !== 'precise' || location.distanceKm === undefined) return null;
  if (!Number.isFinite(location.distanceKm) || location.distanceKm < 0) throw new Error('Distance must be a non-negative finite number.');
  return location.distanceKm < 10 ? `${location.distanceKm.toFixed(1)}km` : `${Math.round(location.distanceKm)}km`;
}

export function presentArea(location: LocationPresentation): string {
  if (location.mode === 'permission_required') return location.areaLabel ?? '지역을 선택해주세요';
  return location.areaLabel;
}
