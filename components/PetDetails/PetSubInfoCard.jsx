import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function PetSubInfoCard({ icon, title, value }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        margin: 5,
        borderRadius: 15,
        gap: 10,
        flex: 1,
      }}
    >
      <Image
        source={icon}
        style={{
          width: 40,
          height: 40,
        }}
      />
      <View style={{
        flex: 1,
      }} >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: "#4A4A4A",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 16,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
