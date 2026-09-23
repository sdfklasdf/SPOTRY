import type { ExperiencePrice, PaymentMode } from '../domain/types.js';

export interface PaymentOptionPresentation { mode: PaymentMode; title: string; detail: string; primaryCashKrw: number; }

export function getPaymentOptions(price: ExperiencePrice, partialCreditCashKrw?: number): readonly PaymentOptionPresentation[] {
  const options: PaymentOptionPresentation[]=[{mode:'cash_card',title:'카드로 결제',detail:`지금 결제되는 금액 ${Math.round(price.cashPriceKrw).toLocaleString('ko-KR')}원`,primaryCashKrw:price.cashPriceKrw}];
  if(price.membershipCreditEnabled && price.creditCost!==undefined){
    options.push({mode:'credit',title:`멤버십 크레딧 ${price.creditCost}C 사용`,detail:'현금 환율이 아닌 멤버십 체험 이용권',primaryCashKrw:0});
    if(partialCreditCashKrw!==undefined) options.push({mode:'credit_plus_card',title:'크레딧 + 카드',detail:`카드 결제 ${Math.round(partialCreditCashKrw).toLocaleString('ko-KR')}원`,primaryCashKrw:partialCreditCashKrw});
  }
  return options;
}
