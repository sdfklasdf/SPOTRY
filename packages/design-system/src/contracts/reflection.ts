import type { ReflectionInput } from '../domain/types.js';
const within=(v:number)=>v>=1&&v<=5;
export function validateReflection(input: ReflectionInput): void {
  if(!within(input.fun)||!within(input.perceivedIntensity)||!within(input.wantAgain)) throw new Error('required reflection metrics must be 1..5');
  if(input.difficulty!==undefined&&!within(input.difficulty)) throw new Error('difficulty must be 1..5');
}
