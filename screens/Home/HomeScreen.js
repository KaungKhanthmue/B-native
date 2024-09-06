import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  TrashIcon,
} from "react-native-heroicons/solid";
import { SvgXml } from "react-native-svg";
import { categories } from "../../data.json";
import Category from "./components/Category.js";

const HomeScreen = () => {
  const [name, setName] = useState("kaung khant hmue");
  const SearchIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
`;

  return (
    <>
      <SafeAreaView>
        <View className="bg-white">
          <View className=" flex-row px-2 py-1 gap-2">
            <TouchableOpacity>
              <View className="bg-black w-[50px] h-[50px] rounded-full"></View>
            </TouchableOpacity>
            <View className=" flex-row justify-between py-1 w-[84%]">
              <View>
                <Text className="text-black font-bold">Welcome {name}</Text>
                <Text className="text-gray-900  italic">From B</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <View className="bg-gray-400 p-2 rounded-full mr-2">
                    <TrashIcon size={24} color={"black"} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="mx-4 py-1">
            <Text className="text-xl font-semibold">Order Your</Text>
            <Text className="font-extralight text-lg">Favorite Food </Text>
            <View className="absolute z-10 top-[72%] left-[5px]">
              <SvgXml xml={SearchIcon} color={"gray"} width={26} height={26} />
            </View>
            <TextInput
              keyboardType="default"
              placeholder="search"
              className=" px-2 py-1 placeholder:px-10 rounded-md bg-gray-300 "
            />
            <TouchableOpacity className="absolute z-10 top-[72%] right-[5px] border-l">
              <AdjustmentsHorizontalIcon color={"black"} size={26} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-2  ">
          <View className="mx-4">
            <Text className="text-lg text-[#f19c13]">Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mx-1 mt-2">
              {categories.map((category, index) => (
                <Category key={index} category={category} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
