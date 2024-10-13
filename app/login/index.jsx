import { View, Text, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import Colors from "./../../constants/Colors";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(tabs)/home", { scheme: "myapp" }),
        });

      if (createdSessionId) {
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 550,
        }}
        source={require("./../../assets/images/cat.jpg")}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
          // justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Ready to make new friends?
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 18,
            textAlign: "center",
            marginTop: 20,
            color: Colors.GRAY,
          }}
        >
          Sign up or login to start chatting with people around the world!
        </Text>

        <Pressable
          onPress={onPress}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 14,
            borderRadius: 5,
            marginTop: 40,
            width: "100%",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 16,
              color: "white",
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
