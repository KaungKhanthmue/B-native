import { View, Text } from "react-native";
import React from "react";

export default function Body() {
  return (
    <View className="w-full items-center">
      <View className="w-full h-32 mt-2 bg-gray-200 pl-4 rounded-lg">
        <Text className="text-lg font-bold">Details</Text>
        <View className="flex-row gap-10 pt-2">
          <Text className="text-base font-bold">Email :</Text>
          <Text>kaungkhanthmue58@gmail.com</Text>
        </View>
        <View className="flex-row gap-8 pt-2">
          <Text className="text-base font-bold">Phone :</Text>
          <Text>09774268358</Text>
        </View>
        <View className="flex-row gap-4 pt-2 mb-2">
          <Text className="text-base font-bold">Address :</Text>
          <Text>Bagan</Text>
        </View>
      </View>

      <View className="w-full h-12 flex-row py-2 gap-1 items-center">
        <View className="w-16 h-10 rounded-lg bg-blue-100 ml-2">
          <Text className="text-center py-2">Post</Text>
        </View>
        <View className="w-16 h-10 rounded-lg bg-blue-100">
          <Text className="text-center py-2">Photo</Text>
        </View>
      </View>

      <View className="w-full mt-1 bg-gray-200 px-4 rounded-lg">
        <Text className="text-lg font-bold mt-2">Friends</Text>
        <View className="w-full h-64 flex-row flex-wrap gap-2 p-2 bg-gray-300 rounded-lg mt-2">
          <View className="w-27 h-28 rounded-lg bg-white"></View>
          <View className="w-27 h-28 rounded-lg bg-white"></View>
          <View className="w-27 h-28 rounded-lg bg-white"></View>
          <View className="w-27 h-28 rounded-lg bg-white"></View>
          <View className="w-27 h-28 rounded-lg bg-white"></View>
          <View className="w-27 h-28 rounded-lg bg-white"></View>
        </View>
      </View>
    </View>
  );
}
