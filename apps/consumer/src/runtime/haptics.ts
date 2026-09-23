import * as Haptics from 'expo-haptics';
import type { SpotryHapticsAdapter } from '@spotry/design-system';

export const expoHapticsAdapter: SpotryHapticsAdapter = {
  async trigger(intent) {
    if (intent === 'selection') {
      await Haptics.selectionAsync();
      return;
    }
    await Haptics.notificationAsync(
      intent === 'success'
        ? Haptics.NotificationFeedbackType.Success
        : Haptics.NotificationFeedbackType.Warning,
    );
  },
};
