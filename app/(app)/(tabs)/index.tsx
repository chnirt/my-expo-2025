import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

import { bottomTabHeight } from "@/components/CustomTabBar";
import { buttons, posts, stories } from "@/mocks";
import { useSession } from "@/ctx";
import Story from "@/components/Story";
import PostAction from "@/components/PostAction";
import { ChnirtStyleSheet } from "@/utils/ChnirtStyleSheet";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { signOut } = useSession();

  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      name: string;
      isOwner: boolean;
      avatarSource: ImageSourcePropType;
    };
  }) => {
    return <Story {...item} />;
  };

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: bottomTabHeight + (insets.bottom || 24) + 20,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Friendzy</Text>
          <TouchableOpacity style={styles.bellButton} onPress={signOut}>
            <View>
              <Feather name="bell" size={24} color="#4B164C" />
              <View style={styles.notificationDot} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Stories */}
        <View style={styles.storiesContainer}>
          <FlatList
            data={stories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            ItemSeparatorComponent={() => (
              <View style={styles.storySeparator} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Tab Switch */}
        <View style={styles.tabSwitchContainer}>
          <View style={styles.tabSwitchInner}>
            <TouchableOpacity style={styles.tabSwitchButtonActive}>
              <Text style={styles.tabSwitchButtonActiveText}>Make Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabSwitchButton}>
              <Text style={styles.tabSwitchButtonText}>Search Partners</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Posts */}
        <View style={styles.postsContainer}>
          {posts.map((post, pi) => (
            <View key={`post-${pi}`} style={styles.postWrapper}>
              <Image
                source={post.imageSource}
                style={styles.postImage}
                resizeMode="cover"
              />
              <View style={styles.postOverlay}>
                <View style={styles.postLeft}>
                  <View style={styles.postInterestContainer}>
                    <View style={styles.postInterestWrapper}>
                      <BlurView
                        style={styles.postInterestBlur}
                        tint="extraLight"
                      >
                        <Text style={styles.postInterestText}>
                          {post.interest}
                        </Text>
                      </BlurView>
                    </View>
                  </View>
                  <View style={styles.postDetails}>
                    <View>
                      <Text style={styles.postContent}>{post.content}</Text>
                    </View>
                    <View style={styles.postUserContainer}>
                      <Image
                        source={require("@/assets/images/avatar6.png")}
                        style={styles.postUserAvatar}
                      />
                      <View style={styles.postUserInfo}>
                        <Text style={styles.postUserName}>{post.fullName}</Text>
                        <Text style={styles.postUserLocation}>
                          {post.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.postActionsContainer}>
                  <View style={styles.postActionsWrapper}>
                    <BlurView style={styles.postActionsBlur} tint="extraLight">
                      {buttons.map((button, bi) => (
                        <PostAction
                          key={`button-${bi}`}
                          iconName={button.iconName}
                        />
                      ))}
                    </BlurView>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = ChnirtStyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FDF7FD",
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4B164C",
  },
  bellButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#4B164C20",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationDot: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "#DD88CF",
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "white",
  },
  storiesContainer: {
    marginTop: 16,
  },
  storySeparator: {
    width: 18,
  },
  tabSwitchContainer: {
    marginTop: 24,
    backgroundColor: "#F8E7F6",
    borderRadius: 16,
    height: 44,
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  tabSwitchInner: {
    flexDirection: "row",
  },
  tabSwitchButtonActive: {
    backgroundColor: "#fff",
    height: 36,
    flex: 1,
    justifyContent: "center",
    borderRadius: 16,
    alignItems: "center",
  },
  tabSwitchButtonActiveText: {
    color: "#4B164C",
    fontSize: 14,
    fontWeight: "600",
  },
  tabSwitchButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabSwitchButtonText: {
    color: "#4B164C",
    fontSize: 14,
    fontWeight: "600",
  },
  postsContainer: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 16, // if gap is not supported, consider using marginBottom in each postWrapper
  },
  postWrapper: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 16,
  },
  postImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  postOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  postLeft: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  postInterestContainer: {
    alignItems: "flex-start",
  },
  postInterestWrapper: {
    borderWidth: 1,
    borderColor: "#FFFFFF70",
    borderRadius: 999,
    overflow: "hidden",
  },
  postInterestBlur: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  postInterestText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  postDetails: {
    gap: 16,
  },
  postContent: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  postUserContainer: {
    flexDirection: "row",
    gap: 12,
  },
  postUserAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postUserInfo: {
    gap: 4,
  },
  postUserName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  postUserLocation: {
    color: "#ffffff70",
    fontSize: 11,
    fontWeight: "500",
  },
  postActionsContainer: {
    justifyContent: "center",
  },
  postActionsWrapper: {
    overflow: "hidden",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  postActionsBlur: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
});
