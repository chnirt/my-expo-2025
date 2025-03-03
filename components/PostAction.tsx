import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { BlurView } from "expo-blur";
import { TouchableOpacity, View } from "react-native";

import { ChnirtStyleSheet } from "@/utils/ChnirtStyleSheet";

type PostActionProps = {
  iconName: string;
};

const PostAction: React.FC<PostActionProps> = ({ iconName }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <BlurView style={styles.blur} tint="extraLight">
          <Feather name={iconName as any} size={16} color="#fff" />
        </BlurView>
      </TouchableOpacity>
    </View>
  );
};

const styles = ChnirtStyleSheet.create({
  container: {
    borderRadius: 999, // makes the container fully rounded (similar to rounded-full)
    overflow: "hidden",
  },
  blur: {
    width: 40, // equivalent to w-10 in Tailwind (if 1 unit equals 4px)
    aspectRatio: 1, // ensures a square shape (aspect-square)
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostAction;
