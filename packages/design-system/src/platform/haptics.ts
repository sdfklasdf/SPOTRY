import type { HapticIntent } from '../contracts/interaction.js';

export interface SpotryHapticsAdapter {
  trigger(intent: Exclude<HapticIntent, 'none'>): Promise<void>;
}

export async function triggerIfNeeded(adapter: SpotryHapticsAdapter | null, intent: HapticIntent): Promise<void> {
  if (intent === 'none' || adapter === null) return;
  await adapter.trigger(intent);
}
