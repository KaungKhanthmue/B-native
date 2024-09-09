import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Category = ({ category }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mx-1 p-1 border rounded-md bg-white"
      onPress={() => {
        navigation.navigate("List", {
          category: category.name,
        });
      }}
    >
      <View
        className={`bg-black flex-row justify-center text-white rounded-xl shadow-2xl border-2 border-black`}
      >
        <Image
          className="w-[60px] h-[40px] rounded-xl"
          source={{ uri: `${category.image}` }}
        />
      </View>
      <Text className="text-black font-semibold text-xs p-1 text-center">
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;
