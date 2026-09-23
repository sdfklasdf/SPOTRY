export type BookingLifecycleStatus = 'confirmed' | 'completed' | 'cancelled';

export interface BookingAftercare {
  status: BookingLifecycleStatus;
  startsAtIso: string;
  preparationAvailable: boolean;
  directionsAvailable: boolean;
  calendarExportAvailable: boolean;
  supportAvailable: boolean;
}

export function availableBookingActions(booking: BookingAftercare): readonly string[] {
  if (booking.status !== 'confirmed') return [];
  const actions: string[] = [];
  if (booking.preparationAvailable) actions.push('prep');
  if (booking.directionsAvailable) actions.push('directions');
  if (booking.calendarExportAvailable) actions.push('calendar');
  if (booking.supportAvailable) actions.push('cancel_support');
  return actions;
}
