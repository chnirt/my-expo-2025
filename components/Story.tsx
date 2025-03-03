import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { ChnirtStyleSheet } from "@/utils/ChnirtStyleSheet";

type StoryProps = {
  avatarSource: ImageSourcePropType;
  name: string;
  isOwner: boolean;
};

const Story: React.FC<StoryProps> = ({ avatarSource, name, isOwner }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={avatarSource}
          style={[styles.avatarImage, !isOwner && styles.avatarBorder]}
        />
        {!isOwner && <View style={styles.absoluteBorder} />}
        {isOwner && (
          <View style={styles.ownerBadge}>
            <Feather name="plus" size={8} color="#fff" />
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

const styles = ChnirtStyleSheet.create({
  container: {
    // "gap" isn't natively supported in React Native,
    // but if your auto-scale implementation supports it, use it;
    // otherwise, you can simulate spacing by adding marginTop to the text.
    gap: 8,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatarBorder: {
    borderWidth: 4,
    borderColor: "#FDF7FD",
  },
  absoluteBorder: {
    position: "absolute",
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "#DD88CF",
    borderRadius: 30,
  },
  ownerBadge: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#DD88CF",
    borderWidth: 2,
    borderColor: "#FDF7FD",
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    textAlign: "center",
  },
});

export default Story;
