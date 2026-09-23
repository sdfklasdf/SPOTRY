import test from 'node:test';
import assert from 'node:assert/strict';
function minCashPrice(partnerPayout:number,targetMargin:number,pgFee:number){return partnerPayout/((1-targetMargin)*(1-pgFee))}
test('Kang Minje 90m minimum instructor payout is 30,000 KRW',()=>{const payout=20000*1.5;assert.equal(payout,30000)});
test('single-session cash floor for 30k payout at 12% margin is about 35.4k total',()=>{const floor=minCashPrice(30000,.12,.0374);assert.ok(floor>35400&&floor<35500)});
test('two-seat full-capacity floor is about 17.7k per person',()=>{const floor=minCashPrice(30000,.12,.0374)/2;assert.ok(floor>17700&&floor<17750)});
