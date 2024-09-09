import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/solid";

const Body = () => {
    const SearchIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>`;

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
      <View className="pb-1 mt-1 bg-black">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mx-1 mt-1"
        >
            <View className="w-full h-[50px] bg-white"></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Body;
