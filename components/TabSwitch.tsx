// TabSwitch.tsx
import { ChnirtStyleSheet } from "@/utils/ChnirtStyleSheet";
import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";

type Tab = "makeFriends" | "searchPartners";

const TabSwitch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("makeFriends");

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TouchableOpacity
          style={
            activeTab === "makeFriends" ? styles.buttonActive : styles.button
          }
          onPress={() => setActiveTab("makeFriends")}
        >
          <Text
            style={
              activeTab === "makeFriends"
                ? styles.buttonActiveText
                : styles.buttonText
            }
          >
            Make Friends
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeTab === "searchPartners" ? styles.buttonActive : styles.button
          }
          onPress={() => setActiveTab("searchPartners")}
        >
          <Text
            style={
              activeTab === "searchPartners"
                ? styles.buttonActiveText
                : styles.buttonText
            }
          >
            Search Partners
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ChnirtStyleSheet.create({
  container: {
    marginTop: 24, // equivalent to mt-6
    backgroundColor: "#F8E7F6",
    borderRadius: 16, // rounded-2xl
    height: 44, // h-11
    justifyContent: "center",
    paddingHorizontal: 4, // px-1
  },
  inner: {
    flexDirection: "row",
  },
  buttonActive: {
    backgroundColor: "#fff",
    height: 36, // h-9
    flex: 1,
    justifyContent: "center",
    borderRadius: 16,
    alignItems: "center",
  },
  buttonActiveText: {
    color: "#4B164C",
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#4B164C",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default TabSwitch;
