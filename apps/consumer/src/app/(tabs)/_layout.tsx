import { Text } from 'react-native';
import { Tabs } from 'expo-router';

const icon = (glyph: string) => ({ color }: { color: string }) => <Text style={{ color, fontSize: 18 }}>{glyph}</Text>;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0B111B',
        tabBarInactiveTintColor: '#939AA4',
        tabBarStyle: { borderTopColor: '#E8EBEE', backgroundColor: '#FFFFFF', height: 82, paddingTop: 8, paddingBottom: 12 },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: '홈', tabBarIcon: icon('⌂') }} />
      <Tabs.Screen name="explore" options={{ title: '탐색', tabBarIcon: icon('⌕') }} />
      <Tabs.Screen name="schedule" options={{ title: '예약', tabBarIcon: icon('▣') }} />
      <Tabs.Screen name="record" options={{ title: '기록', tabBarIcon: icon('▥') }} />
      <Tabs.Screen name="my" options={{ title: 'MY', tabBarIcon: icon('●') }} />
    </Tabs>
  );
}
