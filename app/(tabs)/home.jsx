import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import PetListCategory from "../../components/Home/PetListCategory";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";

export default function Home() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
      }}
    >
      {/* header */}
      <Header />
      {/* slider */}
      <Slider />
      {/* category */}
      <PetListCategory />

      {/* add new pet */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          padding: 10,
          backgroundColor: Colors.LIGHT_PRIMARY,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: Colors.PRIMARY,
          borderStyle: "dashed",
          gap: 10,
        }}
      >
        <MaterialIcons name="pets" size={20} color={Colors.PRIMARY} />
        <Text
          style={{
            fontWeight: "outfit-medium",
            color: "black",
            fontSize: 18,
          }}
        >
          Add New Pet{" "}
        </Text>
      </View>
    </View>
  );
}
