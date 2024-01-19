//import liraries
import React, { Component } from "react";
import defaultStyles from "../config/reportstyles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import color from "../config/color";
import tw from "twrnc";

// create a component
const ReportsCard = ({ image, name, navigation, route, status }) => {
  return (
    <TouchableOpacity
      onPress={
        status ? () => navigation.navigate(route) : () => console.log("h")
      }
    >
      {/* <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          position: "relative",
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <View style={defaultStyles.card}>
          <Image style={defaultStyles.image} source={image} />
          <View style={defaultStyles.cardBottom}></View>
          <Text style={defaultStyles.text}>{name}</Text>
        </View>
      </View> */}
      <View
        style={tw`border-gray-500 border bg-gray-600 w-[150px] gap-4 h-[150px] rounded-md flex items-center justify-center`}
      >
        <Image style={defaultStyles.image} source={image} />
        <Text style={tw`font-bold text-white`}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReportsCard;
