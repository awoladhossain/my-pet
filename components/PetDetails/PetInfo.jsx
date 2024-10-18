import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function PetInfo({ pet }) {
  return (
    <View style={{
      backgroundColor: "white",
      borderRadius: 20,
      marginBottom: 20,
    }}>
      <Image
        source={{ uri: pet.imageUrl }}
        style={{
          width: "100%",
          height: 300,
          objectFit: "cover",
        }}
      />
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "outfit-bold",
            }}
          >
            {pet?.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              fontFamily: "outfit-medium",
            }}
          >
            {pet?.address}
          </Text>
        </View>
        <Entypo name="heart-outlined" size={24} color="black" />
      </View>
    </View>
  );
}
