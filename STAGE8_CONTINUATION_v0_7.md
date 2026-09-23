# SPOTRY Stage 8 Continuation v0.7

Date: 2026-09-22

## Source of truth rechecked
- Final Product Roadmap v21
- Final Design Lock v6
- Backend & Security Architecture v3
- Stage 8 Implementation Report v3

## Current status
Stage 8 remains IN PROGRESS.

## This continuation
- Re-ran the full design-system verification from the v0.6 source package.
- TypeScript strict PASS.
- Policy lint PASS (59 TypeScript files).
- Asset/config validation PASS.
- Build PASS.
- Unit/integration 25/25 PASS.
- Retried root npm install for the real Expo workspace; the execution environment timed out again at 40 seconds.

## Screenshot truth
`SPOTRY_Stage8_v0_6_coded_preview.png` is a Chromium screenshot of a coded static representation of the implemented Home hierarchy. It is not an Expo/iOS runtime screenshot. The earlier AI-generated multi-screen concept is not implementation evidence.

## Stage 8 close gates still open
1. GitHub write connection/push when user reconnects.
2. Real Expo dependency install.
3. Remove validation-only shims and typecheck against installed Expo packages.
4. Real Expo runtime launch.
5. Safe area / keyboard / haptics / deep-link / back runtime verification.
6. Small/large iPhone + Android + Dynamic Type visual QA.
7. Launcher/splash release-build QA.
8. Final canonical SVG hand cleanup.
9. User review/approval of real runtime captures.
10. Final Stage 8 audit.

## Photography decision — user approved
User selected Option 1: action-first sports editorial.
Added `STAGE8_PHOTOGRAPHY_DIRECTION_v1.md` and tightened Home hero accessibility/internal provenance copy. This direction applies to Home, Explore and Experience Detail, while Provider Trust remains documentary-only in production.
