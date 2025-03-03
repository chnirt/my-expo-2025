import { bottomTabHeight } from "@/components/CustomTabBar";
import { Match, socialStats, yourMatches } from "@/mocks";
import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SocialStatsList = () => {
  return (
    <View className="gap-5 flex-row">
      {socialStats.map((stat, si) => (
        <View key={`stat-${si}`} className="gap-2">
          <View className="relative">
            <Image
              className={clsx(
                "w-16 h-16",
                "border-4 border-[#FDF7FD] rounded-full"
              )}
              source={require("@/assets/images/avatar1.png")}
            />
            <BlurView
              className="absolute w-16 h-16"
              intensity={20}
              tint="extraLight"
            />
            <View className="absolute w-16 h-16 rounded-full border-2 border-[#DD88CF] justify-center items-center">
              <Feather name={stat.iconName as any} size={28} color={"#fff"} />
            </View>
          </View>
          <View className="flex-row">
            <Text className="color-[#22172A] text-sm">
              {stat.label}{" "}
              <Text className="color-[#DD88CF] text-sm font-bold">
                {stat.value}
              </Text>
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default function MatchScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const goBack = () => router.back();

  let groupedMatches: Match[][] = [];
  const numColumns = 2;
  for (let i = 0; i < yourMatches.length; i += numColumns) {
    groupedMatches.push(yourMatches.slice(i, i + numColumns));
  }

  return (
    <SafeAreaView
      edges={["top", "right", "left"]}
      className="flex-1 bg-[#FDF7FD]"
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: bottomTabHeight + (insets.bottom || 24) + 20,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View className="flex-row mt-2 px-4 justify-between items-center">
          <TouchableOpacity
            className="w-12 h-12 rounded-full border border-[#4B164C20] justify-center items-center"
            onPress={goBack}
          >
            <View>
              <Feather name="chevron-left" size={24} color={"#4B164C"} />
            </View>
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#4B164C]">Matches</Text>
          <TouchableOpacity className="w-12 h-12 rounded-full border border-[#4B164C20] justify-center items-center">
            <View>
              <Feather name="sliders" size={24} color={"#4B164C"} />
            </View>
          </TouchableOpacity>
        </View>

        <View className="mt-6 px-4">
          <SocialStatsList />
        </View>

        <View className="mt-6 gap-6 px-4">
          <Text className="text-xl font-bold color-[#4B164C]">
            Your Matches <Text className="color-[#DD88CF]">47</Text>
          </Text>

          <View className="gap-4">
            {groupedMatches.map((group, gi) => {
              return (
                <View key={`group-${gi}`} className="flex-row gap-4">
                  {group.map((match, mi) => {
                    const handlePress = () => {
                      router.push({
                        pathname: "/(profile)/[userId]",
                        params: {
                          userId: match.id,
                        },
                      });
                    };
                    return (
                      <TouchableOpacity
                        key={`match-${mi}`}
                        className="flex-1"
                        onPress={handlePress}
                      >
                        <Image
                          className="w-full h-[232px] border-4 border-[#DD88CF] rounded-3xl"
                          source={match.avatarSource}
                          resizeMode="cover"
                        />
                        <View className="absolute w-full h-[232px] px-2 pb-3 justify-between">
                          <View className="items-center">
                            <View className="h-[24px] w-[98px] justify-center items-center rounded-b-2xl bg-[#DD88CF]">
                              <Text className="text-white text-[11px] font-semibold">
                                {match.matchPercentage}% Match
                              </Text>
                            </View>
                          </View>

                          <View className="gap-2 items-center">
                            <View className="rounded-full overflow-hidden border-[#FFFFFF70] border">
                              <BlurView className="h-[22px] px-2 justify-center items-center">
                                <Text className="color-white text-[11px] font-medium">
                                  {match.distance}
                                </Text>
                              </BlurView>
                            </View>

                            <View className="flex-row items-center gap-1">
                              <Text className="text-white text-sm font-bold">{`${match.firstName}, ${match.age}`}</Text>
                              {match.isOnline ? (
                                <View className="w-[6px] h-[6px] rounded-full bg-[#13E398]" />
                              ) : null}
                            </View>

                            <Text className="text-white text-[11px] font-medium">
                              {match.location}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
