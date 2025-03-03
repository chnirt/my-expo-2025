import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useRouter, useSegments, usePathname, Href } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export const bottomTabHeight = 64;

interface TabRoute {
  key: string;
  label: string;
  icon: string;
  path?: Href;
}

const tabRoutes: TabRoute[] = [
  { key: "home", label: "Home", icon: "home", path: "/(tabs)" },
  {
    key: "discover",
    label: "Explore",
    icon: "compass",
    path: "/(tabs)/discover",
  },
  {
    key: "plus",
    label: "Plus",
    icon: "plus",
  },
  { key: "matches", label: "Match", icon: "users", path: "/(tabs)/matches" },
  {
    key: "message",
    label: "Message",
    icon: "message-circle",
    path: "/(tabs)/message",
  },
];

const CustomTabBar: React.FC = () => {
  const router = useRouter();
  const segments: string[] = useSegments();
  const pathname: string = usePathname();
  const insets = useSafeAreaInsets();
  const bottomInset = insets.bottom || 24;

  const isTabActive = (tab: TabRoute): boolean => {
    if (!tab.path) return false;
    if (tab.key === "home" && (segments.length === 0 || pathname === "/")) {
      return true;
    }
    return segments.includes(tab.key);
  };

  const handlePress = (tab: TabRoute) => {
    if (!tab.path) {
      console.log("Open create action/modal");
      return;
    }
    router.push(tab.path);
  };

  return (
    <View
      style={[
        styles.tabBar,
        { marginBottom: bottomInset, height: bottomTabHeight },
      ]}
    >
      {tabRoutes.map((tab) => {
        const active = isTabActive(tab);
        return (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tabButton, active && styles.activeTabButton]}
            onPress={() => handlePress(tab)}
          >
            <Feather
              name={tab.icon as any}
              size={24}
              color={active ? "#fff" : "#888"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 24,
    right: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    backgroundColor: "#fff",
    borderRadius: 40,
    borderTopWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: "#4B164C",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  tabButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabButton: {
    backgroundColor: "#DD88CF",
  },
});

export default CustomTabBar;
