export function isBuilding() {
  return process.env.NEXT_PHASE === 'phase-production-build';
}
