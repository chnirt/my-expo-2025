import { bottomTabHeight } from "@/components/CustomTabBar";
import { Interest, interests, people, Person } from "@/mocks";
import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import { BlurView } from "expo-blur";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const LIMIT = 6;

const Interests = ({ interests }: { interests: Interest[] }) => {
  const [viewAll, setViewAll] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>(["1"]);

  const displayedInterests = viewAll ? interests : interests.slice(0, LIMIT);

  const toggleInterest = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <View className="gap-4">
      <View className="flex-row justify-between">
        <Text className="text-xl font-bold">Interest</Text>
        {interests.length > LIMIT && (
          <TouchableOpacity onPress={() => setViewAll(!viewAll)}>
            <Text className="color-[#DD88CF] text-base font-medium">
              {viewAll ? "View Less" : "View All"}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="flex-row gap-3 flex-wrap">
        {displayedInterests.map((interest, ii) => {
          const selected = selectedIds.includes(interest.id);
          return (
            <TouchableOpacity
              key={`interest-${ii}`}
              className={clsx(
                "h-10 rounded-[32px] border border-[#4B164C20] justify-center items-center px-3",
                selected && "bg-[#DD88CF]"
              )}
              onPress={() => toggleInterest(interest.id)}
            >
              <Text>{interest.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default function DiscoverScreen() {
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: { item: Person }) => {
    return (
      <TouchableOpacity>
        <Image
          className="rounded-lg w-[105px] h-[160px]"
          source={item.avatarSource}
        />
        <View className="absolute w-[105px] h-[160px] p-2 pb-3 justify-between">
          <View className="h-[22px] w-[41px] border border-[#DD88CF] justify-center items-center rounded-lg bg-[#4B164C]">
            <Text className="text-white text-[11px] font-semibold">NEW</Text>
          </View>

          <View className="gap-2 items-center">
            <View className="rounded-full overflow-hidden border-[#FFFFFF70] border">
              <BlurView className="h-[22px] px-2 justify-center items-center">
                <Text className="color-white text-[11px] font-medium">
                  {item.distance}
                </Text>
              </BlurView>
            </View>

            <Text className="text-white text-sm font-bold">{`${item.firstName}, ${item.age}`}</Text>

            <Text className="text-white text-[11px] font-medium">
              {item.location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
        <View className="mt-3 px-4 flex-row justify-between items-center">
          <View className="gap-1">
            <View className="gap-1 flex-row items-center">
              <Feather name="map-pin" color={"#DD88CF"} size={12} />
              <Text className="text-xs font-medium">Germany</Text>
              <Feather name="chevron-down" color={"#DD88CF"} size={12} />
            </View>
            <Text className="text-2xl font-bold">Discover</Text>
          </View>

          <View className="flex-row gap-4">
            <TouchableOpacity className="w-12 h-12 rounded-full border border-[#4B164C20] justify-center items-center">
              <View>
                <Feather name="search" size={24} color={"#4B164C"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="w-12 h-12 rounded-full border border-[#4B164C20] justify-center items-center">
              <View>
                <Feather name="sliders" size={24} color={"#4B164C"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-6">
          <FlatList
            contentContainerClassName="px-4"
            data={people}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            ItemSeparatorComponent={() => <View className="w-[18px]" />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View className="mt-6 px-4">
          <Interests interests={interests} />
        </View>

        <View className="mt-6 px-4 gap-4">
          <View className="gap-2">
            <Text className="text-xl font-bold">Around me</Text>
            <Text className="color-[#6C727F] text-sm">
              People with <Text className="color-[#DD88CF]">“Music”</Text>{" "}
              interest around you
            </Text>
          </View>

          <View>
            <Image
              className="w-full aspect-auto"
              source={require("@/assets/images/map.png")}
              resizeMode="cover"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
