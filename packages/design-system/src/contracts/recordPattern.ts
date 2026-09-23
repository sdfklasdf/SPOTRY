import type { PatternInsight, SportRecord } from '../domain/types.js';

function average(values: readonly number[]):number { return values.reduce((a,b)=>a+b,0)/values.length; }

export function deriveRecordPattern(records: readonly SportRecord[]): PatternInsight {
  if (records.length===0) return {stage:'empty', title:'아직 기록이 없어요.', statements:['첫 체험 후부터 내가 좋아하는 운동 조건을 찾아볼게요.']};
  const highWant=records.filter(r=>r.wantAgain>=4);
  const statements:string[]=[];
  if (records.length===1) {
    const r=records[0]!;
    statements.push(`첫 기록에서 재미 ${r.fun.toFixed(1)}, 다시 하고 싶음 ${r.wantAgain.toFixed(1)}을 남겼어요.`);
    return {stage:'first_record',title:'첫 기록에서 이런 점이 좋았어요.',statements};
  }
  const avgIntensity=average(records.map(r=>r.perceivedIntensity));
  if (avgIntensity>=2.5 && avgIntensity<=4.0) statements.push('지금까지는 중간 정도 강도의 운동에서 기록이 모이고 있어요.');
  const comfortable=records.filter(r=>r.soloComfort==='comfortable');
  if (comfortable.length>=2) statements.push('혼자 참여해도 편했다고 남긴 체험이 반복됐어요.');
  const shortTravel=highWant.filter(r=>r.travelMinutes!==undefined && r.travelMinutes<=30);
  if (shortTravel.length>=2) statements.push('30분 이내 이동한 체험에서 다시 하고 싶은 정도가 높았어요.');
  if (statements.length===0) statements.push('아직 취향이 한쪽으로 모이지 않았어요. 다른 종류를 하나 더 해보면 더 선명해져요.');
  return {stage:records.length===2?'two_records':'pattern_ready',title:records.length===2?'지금까지는':'내 운동 패턴',statements};
}
