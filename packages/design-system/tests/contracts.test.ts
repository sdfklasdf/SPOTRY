import test from 'node:test';
import assert from 'node:assert/strict';
import { presentAvailability } from '../src/contracts/availability.js';
import { checkoutLabel, presentPrice } from '../src/contracts/price.js';
import { deriveRecordPattern } from '../src/contracts/recordPattern.js';
import { validateRecommendation } from '../src/contracts/recommendation.js';

test('few seats exposes actual remaining seats',()=>{assert.equal(presentAvailability({status:'few_seats',remainingSeats:2}).label,'2자리 남음')});
test('few seats without count fails instead of inventing scarcity',()=>{assert.throws(()=>presentAvailability({status:'few_seats'}))});
test('KRW stays primary and credit is membership entitlement',()=>{const p=presentPrice({cashPriceKrw:35000,creditCost:7,membershipCreditEnabled:true});assert.equal(p.primary,'35,000원');assert.match(p.secondary??'',/멤버십/);assert.doesNotMatch(p.helper??'',/1C\s*=/)});
test('cash checkout exposes exact amount',()=>{assert.equal(checkoutLabel('cash_card',{cashPriceKrw:35000,membershipCreditEnabled:false}),'35,000원 결제하고 예약하기')});
test('one record never claims stable pattern',()=>{const p=deriveRecordPattern([{sportId:'a',sportName:'수영',fun:5,perceivedIntensity:3,wantAgain:5}]);assert.equal(p.stage,'first_record');assert.match(p.title,/첫 기록/)});
test('3 records unlock pattern-ready state',()=>{const p=deriveRecordPattern([{sportId:'a',sportName:'수영',fun:5,perceivedIntensity:3,wantAgain:5,soloComfort:'comfortable',travelMinutes:10},{sportId:'b',sportName:'클라이밍',fun:5,perceivedIntensity:3.5,wantAgain:5,soloComfort:'comfortable',travelMinutes:20},{sportId:'c',sportName:'복싱',fun:4,perceivedIntensity:3,wantAgain:4,soloComfort:'comfortable',travelMinutes:25}]);assert.equal(p.stage,'pattern_ready');assert.equal(p.title,'내 운동 패턴')});
test('recommendation requires 2 personal + 1 practical evidence',()=>{assert.doesNotThrow(()=>validateRecommendation({sportName:'복싱',sessionId:'s',title:'초보 복싱',availability:{status:'available'},evidence:[{kind:'personal',text:'재미 높음'},{kind:'personal',text:'중간 강도 선호'},{kind:'practical',text:'이번 주말 가능'}]}));assert.throws(()=>validateRecommendation({sportName:'복싱',sessionId:'s',title:'초보 복싱',availability:{status:'available'},evidence:[{kind:'personal',text:'재미 높음'},{kind:'practical',text:'이번 주말 가능'}]}))});
test('sold out session cannot be Next Try CTA target',()=>{assert.throws(()=>validateRecommendation({sportName:'복싱',sessionId:'s',title:'초보 복싱',availability:{status:'sold_out'},evidence:[{kind:'personal',text:'a'},{kind:'personal',text:'b'},{kind:'practical',text:'c'}]}))});

import { getPaymentOptions } from '../src/contracts/checkout.js';
import { validateReflection } from '../src/contracts/reflection.js';
test('alternate payment keeps cash card as default first option',()=>{const o=getPaymentOptions({cashPriceKrw:35000,creditCost:7,membershipCreditEnabled:true},10000);assert.equal(o[0]?.mode,'cash_card');assert.equal(o[1]?.mode,'credit');assert.equal(o[2]?.mode,'credit_plus_card')});
test('reflection requires only three core metrics in valid range',()=>{assert.doesNotThrow(()=>validateReflection({fun:4,perceivedIntensity:3,wantAgain:5}));assert.throws(()=>validateReflection({fun:0,perceivedIntensity:3,wantAgain:5}))});
