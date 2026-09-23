// Copy into the real Expo SDK 57 app after installing:
// npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar expo-haptics
import * as Haptics from 'expo-haptics';
import type { SpotryHapticsAdapter } from '../../src/platform/haptics.js';

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
