import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(notes)" options={{ title: 'Notes' }} />
      <Tabs.Screen name="(profile)" options={{ title: 'Profile' }} />
    </Tabs>
  );
}