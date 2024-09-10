import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { restaurantDatas, foodDatas } from "../../data.json";
import { ArrowLeftIcon, ArrowsUpDownIcon } from "react-native-heroicons/solid";
import Card from "../Home/components/Card";

const Index = () => {
  const route = useRoute();
  const { restaurant_id } = route.params || {};
  const navigation = useNavigation();
  const restaurantData = restaurantDatas.find(
    (data) => data.id === restaurant_id
  );
  const foodDatasOfRes = foodDatas.filter(
    (foodData) => foodData.restaurant_id === restaurant_id
  );

  return (
    <View className="flex-1  bg-black">
      <TouchableOpacity className="absolute w-[35px] h-[35px] ml-1 rounded-md top-[30px] left-0 z-10 border border-white p-1" onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="white" />
      </TouchableOpacity>
      <View className="w-full h-[170px] bg-white border-b border-b-white">
        <Image
          source={{ uri: restaurantData.image }}
          alt=""
          className="w-full h-full"
        />
      </View>

      <View className="absolute w-[150px] h-[150px] rounded-full bg-black top-[80px] left-[30%] z-10 border border-white p-1">
        <Image
          source={{ uri: restaurantData.image }}
          alt=""
          className="w-full h-full rounded-full"
        />
      </View>

      <View className="w-full pb-2 bg-black mt-16">
        <Text className="text-lg font-semibold text-center text-white ">
          {restaurantData.name}
        </Text>
        <Text className="text-sm font-extralight text-center text-white">
          You should choice this restaurant because it has good service and
          fresh foods
        </Text>
        <View className="flex-row justify-center">
          <View className="w-[95%] mx-2 mt-1 border border-gray-300 rounded-sm">
            <View className="flex-row mx-2 p-1">
              <Text className="w-[40%] text-white">Location:</Text>
              <Text className="w-[60%] text-xs text-white">
                {restaurantData.address}
              </Text>
            </View>
            <View className="flex-row mx-2 p-1">
              <Text className="w-[40%] text-white">Phone No:</Text>
              <Text className="w-[60%] text-xs text-white">
                {restaurantData.phone_no}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="bg-white w-full h-[40px] flex-row items-center justify-center space-x-2">
        <Text className="bg-black ml-2 w-[50px] py-2 rounded-md text-xs text-white text-center">
          Menu
        </Text>
        <Text className="bg-black ml-2 w-[100px] py-2 rounded-md text-xs text-white text-center">
          Today Specials
        </Text>
        <Text className="bg-black ml-2 w-[150px] py-2 rounded-md text-xs text-white text-center">
          Restaurant Image
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-1 border-t-2 border-t-black bg-white">
          <View className="flex-row justify-between w-full px-2">
            <Text className="text-lg text-black mt-1 ml-2">Foods</Text>
            <View className="p-2 rounded-xl">
              <ArrowsUpDownIcon size={20} color={"black"} />
            </View>
          </View>
          <View className="flex-row flex-wrap justify-center mt-2">
            {foodDatasOfRes.map((foodData, index) => (
              <Card key={index} foodData={foodData} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
