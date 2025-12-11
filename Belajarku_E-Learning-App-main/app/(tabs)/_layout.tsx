import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "#999",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle:
          route.name === "index" || route.name === "auth/forgot" || route.name === "auth/newPassword" || route.name === "auth/register"
            ? { display: "none" } : { backgroundColor: "#fff" },
        })}>
      {/* ini jangan di hapus dahulu untuk navigasi */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Index',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Dashboard/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="LIbrary/index"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="forum/index"
        options={{
          title: 'Forum',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubbles" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
        }}
      />
      {/* Tab yang tidak perlu ditampilkan */}
      <Tabs.Screen name="explore" options={{ href: null }} />
      <Tabs.Screen name="forum/addChat" options={{ href: null }} />
      <Tabs.Screen name="mainContent/isiMateri" options={{ href: null }} />
      <Tabs.Screen name="mainContent/levelEdu" options={{ href: null }} />
      <Tabs.Screen name="mainContent/materi" options={{ href: null }} />
      <Tabs.Screen name="mainContent/quiz" options={{ href: null }} />
      <Tabs.Screen name="mainContent/subMateri" options={{ href: null }} />
      <Tabs.Screen name="auth/register" options={{ href: null }} />
      <Tabs.Screen name="auth/forgot" options={{ href: null }} />
      <Tabs.Screen name="auth/newPassword" options={{ href: null }} />
      <Tabs.Screen name="template/index" options={{ href: null }} />
      <Tabs.Screen name="LIbrary/bacaPdf" options={{ href: null }} />
      <Tabs.Screen name="setting/index" options={{ href: null }} />
      <Tabs.Screen name="setting/about" options={{ href: null }} />
      <Tabs.Screen name="setting/ubahProfile" options={{ href: null }} />
      <Tabs.Screen name="mainContent/result" options={{ href: null }} />

    </Tabs>
  );
}
