import { ImageSourcePropType } from "react-native";

export const stories = [
  {
    id: "0",
    name: "My Story",
    isOwner: true,
    avatarSource: require("@/assets/images/avatar1.png"),
  },
  {
    id: "1",
    name: "Selena",
    isOwner: false,
    avatarSource: require("@/assets/images/avatar2.png"),
  },
  {
    id: "2",
    name: "Clara",
    isOwner: false,
    avatarSource: require("@/assets/images/avatar3.png"),
  },
  {
    id: "3",
    name: "Fabian",
    isOwner: false,
    avatarSource: require("@/assets/images/avatar4.png"),
  },
  {
    id: "4",
    name: "George",
    isOwner: false,
    avatarSource: require("@/assets/images/avatar5.png"),
  },
];

export const posts = [
  {
    id: "0",
    interest: "🏝️ Travel",
    imageSource: require("@/assets/images/bg1.png"),
    content: "If you could live anywhere in the world, where would you pick?",
    fullName: "Miranda Kehlani",
    location: "STUTTGART",
  },
  {
    id: "1",
    interest: "⚽️ Football",
    imageSource: require("@/assets/images/bg2.png"),
    content: "If you could live anywhere in the world, where would you pick?",
    fullName: "Miranda Kehlani",
    location: "STUTTGART",
  },
];

export interface Button {
  id: string;
  iconName: string;
}

export const buttons: Button[] = [
  {
    id: "0",
    iconName: "heart",
  },
  {
    id: "1",
    iconName: "message-circle",
  },
  {
    id: "2",
    iconName: "more-horizontal",
  },
];

export interface Person {
  id: string;
  distance: string;
  firstName: string;
  age: number;
  location: string;
  avatarSource: ImageSourcePropType;
}

export const people: Person[] = [
  {
    id: "0",
    distance: "16 km away",
    firstName: "Halima",
    age: 19,
    location: "BERLIN",
    avatarSource: require("@/assets/images/person1.png"),
  },
  {
    id: "1",
    distance: "4,8 km away",
    firstName: "Vanessa",
    age: 18,
    location: "MUNICH",
    avatarSource: require("@/assets/images/person2.png"),
  },
  {
    id: "2",
    distance: "2,2 km away",
    firstName: "James",
    location: "HANOVER",
    age: 20,
    avatarSource: require("@/assets/images/person3.png"),
  },
  {
    id: "3",
    distance: "16 km away",
    firstName: "Kate",
    age: 21,
    location: "KOLN",
    avatarSource: require("@/assets/images/person4.png"),
  },
];

export interface Interest {
  id: string;
  name: string;
}

export const interests: Interest[] = [
  {
    id: "1",
    name: "⚽️ Football",
  },
  {
    id: "2",
    name: "🍃  Nature",
  },
  {
    id: "3",
    name: "🗣 Language",
  },
  {
    id: "4",
    name: "⚡ ️Interest",
  },
  {
    id: "5",
    name: "📸 Photography",
  },
  {
    id: "6",
    name: "🎵 Music",
  },
  {
    id: "7",
    name: "✍🏻 Writing",
  },
];

export interface SocialStat {
  id: string;
  label: string;
  value: number;
  iconName: string;
}

export const socialStats: SocialStat[] = [
  { id: "0", label: "Likes", value: 32, iconName: "heart" },
  { id: "1", label: "Connect", value: 15, iconName: "message-circle" },
];

export interface Match {
  id: string;
  distance: string;
  firstName: string;
  age: number;
  location: string;
  isOnline: boolean;
  matchPercentage: number;
  avatarSource: ImageSourcePropType;
}

export const yourMatches: Match[] = [
  {
    id: "1",
    distance: "1,3 km away",
    firstName: "James",
    age: 20,
    location: "HANOVER",
    isOnline: true,
    avatarSource: require("@/assets/images/match1.png"),
    matchPercentage: 100,
  },
  {
    id: "2",
    distance: "2 km away",
    firstName: "Eddie",
    age: 23,
    location: "DORTMUND",
    isOnline: true,
    avatarSource: require("@/assets/images/match2.png"),
    matchPercentage: 94,
  },
  {
    id: "3",
    distance: "2,5 km away",
    firstName: "Brandon",
    age: 20,
    location: "HANOVER",
    isOnline: false,
    avatarSource: require("@/assets/images/match3.png"),
    matchPercentage: 89,
  },
  {
    id: "4",
    distance: "2,5 km away",
    firstName: "Alfredo",
    age: 20,
    location: "HANOVER",
    isOnline: true,
    avatarSource: require("@/assets/images/match4.png"),
    matchPercentage: 80,
  },
  {
    id: "5",
    distance: "1,3 km away",
    firstName: "James",
    age: 20,
    location: "HANOVER",
    isOnline: true,
    avatarSource: require("@/assets/images/match1.png"),
    matchPercentage: 88,
  },
  {
    id: "6",
    distance: "1,3 km away",
    firstName: "James",
    age: 20,
    location: "HANOVER",
    isOnline: true,
    avatarSource: require("@/assets/images/match1.png"),
    matchPercentage: 92,
  },
];
