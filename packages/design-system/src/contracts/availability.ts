import type { Availability } from '../domain/types.js';

export interface AvailabilityPresentation { label: string; tone: 'positive'|'warning'|'muted'; }

export function presentAvailability(value: Availability): AvailabilityPresentation {
  switch (value.status) {
    case 'available': return { label:'예약 가능', tone:'positive' };
    case 'few_seats': {
      const n=value.remainingSeats;
      if (n === undefined || n < 1) throw new Error('few_seats requires remainingSeats >= 1');
      return { label:`${n}자리 남음`, tone:'warning' };
    }
    case 'sold_out': return { label:'마감', tone:'muted' };
    case 'booking_closed': return { label:'예약 종료', tone:'muted' };
  }
}
