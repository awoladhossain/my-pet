import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function PetListItem({ pet }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/pet-details",
          params: pet,
        })
      }
      style={{
        padding: 10,
        marginRight: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        marginTop: 20,
      }}
    >
      <Image
        source={{ uri: pet?.imageUrl }}
        style={{
          width: 150,
          height: 135,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 15,
          marginTop: 10,
        }}
      >
        {pet?.name}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.GRAY,
            fontFamily: "outfit",
            fontSize: 12,
          }}
        >
          {pet?.breed}
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit",
            fontSize: 12,
            backgroundColor: Colors.LIGHT_PRIMARY,
            paddingHorizontal: 8,
            borderRadius: 10,
            paddingVertical: 2,
          }}
        >
          {pet?.age} yrs
        </Text>
      </View>
    </TouchableOpacity>
  );
}
