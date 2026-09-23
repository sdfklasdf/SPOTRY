export type HapticIntent = 'none' | 'selection' | 'success' | 'warning';
export type MotionPreference = 'full' | 'reduced';

export interface InteractionFeedback {
  haptic: HapticIntent;
  durationMs: number;
}

export function feedbackForAction(
  action: 'select' | 'primary_success' | 'warning' | 'navigation',
  motion: MotionPreference,
): InteractionFeedback {
  const durationMs = motion === 'reduced' ? 0 : action === 'navigation' ? 180 : 120;
  switch (action) {
    case 'select': return { haptic: 'selection', durationMs };
    case 'primary_success': return { haptic: 'success', durationMs };
    case 'warning': return { haptic: 'warning', durationMs };
    case 'navigation': return { haptic: 'none', durationMs };
  }
}
