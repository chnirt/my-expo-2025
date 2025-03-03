import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChnirtStyleSheet } from "@/utils/ChnirtStyleSheet";
import { useSession } from "@/ctx";

export default function OnBoardingScreen() {
  const { signIn } = useSession();

  const goToApp = () => {
    signIn();
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/circle-avatars.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Let’s meeting new people around you</Text>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={goToApp} style={styles.phoneButton}>
              <Image
                source={require("@/assets/images/call-icon.png")}
                style={styles.phoneIcon}
              />
              <Text style={styles.phoneButtonText}>Login with Phone</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
              <Image
                source={require("@/assets/images/google-icon.png")}
                style={styles.googleIcon}
              />
              <Text style={styles.googleButtonText}>Login with Google</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            Don’t have an account?{" "}
            <Text style={styles.signUpText}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = ChnirtStyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 311,
    height: 306,
  },
  contentContainer: {
    paddingHorizontal: 40,
    paddingBottom: 12,
    gap: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#22172A",
  },
  buttonWrapper: {
    gap: 16,
  },
  phoneButton: {
    backgroundColor: "#4B164C",
    padding: 16,
    borderRadius: 32,
    justifyContent: "center",
    position: "relative",
  },
  phoneIcon: {
    position: "absolute",
    left: 8,
    width: 40,
    height: 40,
  },
  phoneButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: "#FCF3FB",
    padding: 16,
    borderRadius: 32,
    justifyContent: "center",
    position: "relative",
  },
  googleIcon: {
    position: "absolute",
    left: 8,
    width: 40,
    height: 40,
  },
  googleButtonText: {
    color: "#4A174B",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
  footerText: {
    color: "#22172A70",
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
  },
  signUpText: {
    color: "#DD88CF",
    fontWeight: "bold",
  },
});
