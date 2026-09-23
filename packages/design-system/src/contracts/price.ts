import type { ExperiencePrice, PaymentMode } from '../domain/types.js';

export const formatKrw=(value:number):string=>`${Math.round(value).toLocaleString('ko-KR')}원`;

export interface PricePresentation {
  primary: string;
  secondary?: string;
  helper?: string;
}

export function presentPrice(price: ExperiencePrice): PricePresentation {
  const base: PricePresentation={ primary: formatKrw(price.cashPriceKrw) };
  if (!price.membershipCreditEnabled || price.creditCost === undefined) return base;
  return {
    ...base,
    secondary:`멤버십 이용 중이면 ${price.creditCost}C로도 예약 가능`,
    helper:'크레딧은 현금 환율이 아닌 멤버십 체험 이용권이에요.'
  };
}

export function checkoutLabel(mode:PaymentMode, price:ExperiencePrice, cardCashKrw?:number):string {
  if (mode==='cash_card') return `${formatKrw(price.cashPriceKrw)} 결제하고 예약하기`;
  if (mode==='credit') {
    if (price.creditCost===undefined) throw new Error('creditCost required');
    return `${price.creditCost}C 사용하고 예약하기`;
  }
  if (price.creditCost===undefined || cardCashKrw===undefined) throw new Error('creditCost and cardCashKrw required');
  return `${price.creditCost}C + ${formatKrw(cardCashKrw)}로 예약하기`;
}
