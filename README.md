# SPOTRY

SPOTRY is a beginner-first sports discovery product.

**Discover → Try → Record → Understand → Next Try / Commit**

Current project state:
- Stage 0–7.6 complete
- Stage 7 backend/security final closed
- Stage 8 Production Design System Implementation in progress

Current consumer navigation: **홈 / 탐색 / 예약 / 기록 / MY**.

## Stage 8 runtime target

- Expo SDK 57
- React Native 0.86.x
- React 19.2.3
- Expo Router
- TypeScript strict

The dependency baseline follows the current Expo SDK 57 default template and SDK 57 package documentation. After cloning, run `npm install`, then `npx expo install --fix` before the first native build so Expo can normalize compatible package versions.

## Repository layout

- `apps/consumer` — Expo Router consumer app shell for Stage 8 native integration
- `packages/design-system` — locked SPOTRY tokens, components, product contracts, tests, native assets
- `.github/workflows/ci.yml` — Stage 8 contract/type/build verification

## Product locks implemented

- KRW-first, Credit-secondary
- no fixed `1 Credit = X원` consumer exchange rate
- actual availability states and remaining-seat truth
- Record 0/1/2/3+ evidence thresholds
- explainable Next Try recommendations
- Compare inside Record, no platform winner
- offline saves never pretend server success
- school/enrollment is separate from professional qualification

## Security boundary

Stage 7 is closed and must not be weakened. The client is never authoritative for reservation financial/status mutations, Credit ledger mutation, payment/refund state, attendance settlement, payout state, verification approval, or role elevation.

## Bootstrap

```bash
npm install
npx expo install --fix
npm run verify
npm run start
```

Native device QA remains a Stage 8 close gate.
