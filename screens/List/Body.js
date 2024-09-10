import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { AdjustmentsHorizontalIcon, ArrowsUpDownIcon } from "react-native-heroicons/solid";
import {foodDatas} from "../../data.json";
import Card from "../Home/components/Card";

const Body = ({category}) => {
    const SearchIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>`;

  const filteredFoodData = foodDatas.filter(foodData => {
    const categoryData = foodData.category ? foodData.category.toLowerCase() :'';

    return categoryData.includes(category.toLowerCase());
  });

  return (
    <View>
      <View className="bg-white">
        <View className="mx-4 py-1">
          <View className="absolute z-10 top-[30%] left-[5px]">
            <SvgXml xml={SearchIcon} color={"gray"} width={26} height={26} />
          </View>
          <TextInput
            keyboardType="default"
            placeholder="search"
            className="px-2 py-1 placeholder:px-10 rounded-md bg-gray-300"
          />
          <TouchableOpacity className="absolute z-10 top-[30%] right-[5px] border-l">
            <AdjustmentsHorizontalIcon color={"black"} size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="py-1 mt-1 bg-white">
          <View className="flex-row justify-between w-full px-2">
            <Text className="text-lg text-black mt-1 ml-2">Foods</Text>
            <View className="p-2 rounded-xl">
              <ArrowsUpDownIcon size={20} color={"black"} />
            </View>
          </View>
          <View className="flex-row flex-wrap justify-center mt-2">
            {filteredFoodData.map((foodData, index) => (
              <Card key={index} foodData={foodData} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Body;
