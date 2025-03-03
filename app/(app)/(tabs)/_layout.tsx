import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import CustomTabBar from "@/components/CustomTabBar";

import { useSession } from "@/ctx";

export default function TabLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
      </View>
      <CustomTabBar />
    </View>
  );
}
