import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Nav from "../../Components/Nav";
import { foodDatas } from "../../data.json";
import Restaurant from "./components/Restaurant";

const Index = () => {
  const route = useRoute();
  const { id } = route.params || {};
  const navigation = useNavigation();
  const foodData = foodDatas.find((food) => food.id === id);
  return (
    <View>
      <Nav useFor={"Detail"} foodName={foodData.name} />
      <Restaurant restaurant={foodData.restaurant} />
    <ScrollView showsVerticalScrollIndicator={false} className="px-2 ">
        <View className="w-full h-[300px] p-1 border border-black">
          <Image
            source={{ uri: `${foodData.image}` }}
            className="w-full h-full"
          />
        </View>
        <View className="flex-row  w-full">
          <Text className="w-[30%] font-semibold pt-2">Name</Text>
          <Text className="w-[70%] font-semibold text-xl">
            : {foodData.name}
          </Text>
        </View>
        <View className="flex-row  w-full mt-1">
          <Text className="w-[30%] font-semibold ">Price </Text>
          <Text className="w-[70%] font-semibold text-md">
            : {foodData.price} Ks
          </Text>
        </View>
        <View className="flex-row  w-full mt-1">
          <Text className="w-[30%] font-semibold ">Category </Text>
          <Text className="w-[70%]  text-sm">
            : Dinner
          </Text>
        </View>
        <View className="flex-row  w-full mt-1">
          <Text className="w-[30%] font-semibold ">Description </Text>
          <Text className="w-[70%] font-extralight text-sm">
            : include: Meat: Pepperoni, sausage, ham, bacon, chicken, or beef.
            Vegetables: Mushrooms, onions, bell peppers, olives, tomatoes,
          </Text>
        </View>
        <View className="flex-row gap-4 py-2">
            <TouchableOpacity className="w-[45%] py-1 bg-red-500 rounded-md" onPress={() => navigation.goBack()}><Text className="text-white text-center">Cancle</Text></TouchableOpacity>
            <TouchableOpacity className="w-[47%] py-1 bg-blue-500 rounded-md"><Text className="text-white text-center">Order Now</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
