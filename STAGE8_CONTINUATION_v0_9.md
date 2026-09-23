# SPOTRY Stage 8 Continuation v0.9

## Scope
Native runtime 없이 완료 가능한 탐색/상세/edge-state/긴 한글·Dynamic Type 내구성 작업.

## Changes
- Explore에 Action-first 스포츠 히어로 이미지와 consumer-first hierarchy 적용.
- 필터를 horizontal scroll로 바꿔 긴 한글/큰 글자에서 칩 압축·줄바꿈 문제를 줄임.
- Explore empty-state와 데이터 진실성 문구 추가.
- ExperienceRow를 font scaling/line-height/flex-wrap 친화적으로 보강.
- Experience Detail 신규 production-like screen 추가: 사진, availability, beginner copy, 일정/장소/정원/장비, KRW-primary price, beginner explanation, separated trust info, reservation truth copy.
- 실제 공급자 증빙 사진과 editorial prototype image를 혼동하지 않는 기존 규칙 유지.

## QA
- Design system strict typecheck PASS.
- Policy lint PASS: 59 TypeScript files.
- Asset/config validation PASS.
- Build PASS.
- Unit/integration 25/25 PASS.
- Full consumer typecheck: NOT VERIFIED because Expo/React Native dependencies are not installed in this execution environment. Failure is dependency/runtime absence, not a claimed app pass.

## Remaining Stage 8 gates
- Real Expo dependency install/runtime.
- iPhone small/large + Android device screenshots.
- safe area/keyboard/haptics/deep-link/back/predictive-back runtime QA.
- Dynamic Type device QA and long provider/facility-name visual QA.
- launcher/splash native QA.
- final canonical SVG curve cleanup.
- final Stage 8 audit.
