import { bottomTabHeight } from "@/components/CustomTabBar";
import Feather from "@expo/vector-icons/Feather";
import clsx from "clsx";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import moment from "moment";
import { useRouter } from "expo-router";

export default function MessageScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <SafeAreaView
      edges={["top", "right", "left"]}
      className="flex-1 bg-[#4B164C]"
    >
      <ScrollView
        // contentContainerStyle={{
        //   paddingBottom: bottomTabHeight + (insets.bottom || 24) + 20,
        // }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View className="flex-row mt-2 px-6 justify-between items-center">
          <TouchableOpacity
            className="w-12 h-12 rounded-full border border-[#ffffff20] justify-center items-center"
            onPress={goBack}
          >
            <View>
              <Feather name="chevron-left" size={24} color={"#ffffff"} />
            </View>
          </TouchableOpacity>
          <View>
            <Text className="text-2xl font-bold text-white">Message</Text>
          </View>
          <View className="w-12 h-12"></View>
        </View>

        <View className="mt-6">
          <FlatList
            contentContainerClassName="px-6"
            data={[
              {
                id: "1",
                avatarSource: require("@/assets/images/person1.png"),
                isNew: true,
              },
              { id: "2", avatarSource: require("@/assets/images/person2.png") },
              {
                id: "3",
                avatarSource: require("@/assets/images/person3.png"),
              },
              {
                id: "4",
                avatarSource: require("@/assets/images/person4.png"),
              },
            ]}
            renderItem={({ item }) => {
              return (
                <View className="h-[92px] w-[80px] rounded-2xl overflow-hidden">
                  <Image
                    source={item.avatarSource}
                    className={"w-full h-full"}
                    resizeMode="cover"
                  />
                  {item.isNew ? (
                    <View className="absolute w-full h-full justify-center items-center gap-1">
                      <Feather name="heart" size={32} color={"#fff"} />
                      <Text className="color-white text-base font-bold">
                        32
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
            horizontal
            ItemSeparatorComponent={() => <View className="w-5" />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          className="mt-4 rounded-t-[32px] bg-white p-6"
          style={{
            paddingBottom: bottomTabHeight + (insets.bottom || 24) + 20,
          }}
        >
          {[
            {
              id: "1",
              userName: "Alice",
              avatar: require("@/assets/images/avatar1.png"),
              lastMessage: "Hey, how are you?",
              lastMessageTime: "2023-08-22T10:30:00Z",
              unreadCount: 2,
            },
            {
              id: "2",
              userName: "Clara Hazel",
              avatar: require("@/assets/images/avatar2.png"),
              lastMessage: "I know right 😉",
              lastMessageTime: "2023-08-22T09:15:00Z",
              unreadCount: 0,
            },
            {
              id: "3",
              userName: "Brandon Aminoff",
              avatar: require("@/assets/images/avatar3.png"),
              lastMessage: "I’ve already registered, can’t wai...",
              lastMessageTime: "2023-08-21T18:45:00Z",
              unreadCount: 1,
            },
            {
              id: "4",
              userName: "Diana",
              avatar: require("@/assets/images/avatar4.png"),
              lastMessage: "Thank you!",
              lastMessageTime: "2023-08-21T16:20:00Z",
              unreadCount: 0,
            },
            {
              id: "5",
              userName: "Eve",
              avatar: require("@/assets/images/avatar5.png"),
              lastMessage: "See you soon.",
              lastMessageTime: "2023-08-20T14:00:00Z",
              unreadCount: 3,
            },
          ].map((chat, ci) => {
            const isFirst = ci === 0;
            return (
              <View
                key={`chat-${ci}`}
                className={clsx(!isFirst && "border-t border-t-[#22172A20]")}
              >
                {!isFirst ? <View className="h-5" /> : null}
                <View className="flex-row gap-4 h-[84px]">
                  <Image
                    className="w-14 h-14 rounded-full"
                    source={chat.avatar}
                  />
                  <View className="flex-1 flex-row gap-4 h-[47px]">
                    <View className="flex-1 justify-between">
                      <Text className="color-[#22172A] text-lg font-semibold">
                        Alfredo Calzoni
                      </Text>
                      <Text
                        numberOfLines={1}
                        className="color-[#22172A] text-sm font-normal"
                      >
                        {chat.lastMessage}
                      </Text>
                    </View>
                    <View className="justify-between">
                      <View className="items-end">
                        <View className="w-3 h-3 rounded-full bg-[#DD88CF]" />
                      </View>
                      <Text className="color-[#9EA3AE] text-sm font-medium">
                        {moment(chat.lastMessageTime).fromNow()}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
