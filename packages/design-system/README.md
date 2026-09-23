# SPOTRY Stage 8 Design System

Current target: Expo SDK 57 / React Native 0.86 / React 19.2.3.

This package implements the current Roadmap v20 + Design Lock v6 + Consumer v3 + Record & Next Try Rule v1. Stage 7 backend/security boundaries are untouched.

## Stage 8 status
- 8A tokens: baseline complete
- 8B consumer components: expanded production baseline
- 8C native asset pipeline: app icon/adaptive/splash baseline generated; designer-grade vector cleanup still pending
- 8D interaction/data-state contracts: navigation, haptic intent, reduced motion, location truth, booking aftercare implemented as testable contracts; real Expo runtime wiring pending
- 8E code QA: strict TypeScript, policy lint, build, unit/integration tests; real device/simulator visual QA pending

## Key product guarantees in code
- Bottom Navigation: 홈 / 탐색 / 예약 / 기록 / MY
- Real availability states; `few_seats` requires an actual count
- KRW-first, Credit-secondary; fixed Credit/KRW exchange language blocked by lint
- Record 0/1/2/3+ evidence thresholds
- Next Try requires 2 personal reasons + 1 practical reason
- Sold-out/closed sessions cannot become a Next Try CTA
- Reflection has 3 required metrics; difficulty/solo comfort optional
- Location distance is displayed only from a precise location context
- Legacy `spotry://compare` redirects to `spotry://record/compare`
- Offline record-save state never pretends success

## Repository note
Repository integration is prepared in the SPOTRY repo. Native dependency install and device QA remain required before Stage 8 can close.

## Runtime integration
`integration-templates/expo/` contains the Expo SDK 57 app-config/haptics wiring template. Those files are intentionally excluded from TypeScript verification until the real Expo dependencies are installed.
