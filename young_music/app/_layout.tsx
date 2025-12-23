import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="music" options={{ title: 'Music' }} />
      <Tabs.Screen name="movie" options={{ title: 'Movies' }} />
      <Tabs.Screen name="search" options={{ title: 'Search' }} />
      <Tabs.Screen name="downloads" options={{ title: 'Downloads' }} />
    </Tabs>
  );
}
