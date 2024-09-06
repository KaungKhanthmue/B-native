import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  Bars4Icon,
  ArrowRightIcon,
} from "react-native-heroicons/solid";
import { SvgXml } from "react-native-svg";
import { categories, popularxs } from "../../data.json";
import Category from "./components/Category.js";
import PopularCard from "./components/PopularCard.js";

const HomeScreen = () => {
  const [name, setName] = useState("kaung khant hmue");
  const [sidbar, setSideBar] = useState(false);

  const SearchIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>`;

  return (
    <>
      <SafeAreaView>
        <View className="bg-white">
          <View className="flex-row px-2 py-1 gap-2">
            <TouchableOpacity>
              <View className="bg-black w-[50px] h-[50px] rounded-full"></View>
            </TouchableOpacity>
            <View className="flex-row justify-between py-1 w-[84%]">
              <View>
                <Text className="text-black font-bold">Welcome {name}</Text>
                <Text className="text-gray-900 italic">From B</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => setSideBar(true)}>
                  <View className="bg-white p-2 rounded-full mr-2">
                    <Bars4Icon size={24} color={"black"} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Search Section */}
          <View className="mx-4 py-1">
            <Text className="text-xl font-semibold">Order Your</Text>
            <Text className="font-extralight text-lg">Favorite Food</Text>
            <View className="absolute z-10 top-[72%] left-[5px]">
              <SvgXml xml={SearchIcon} color={"gray"} width={26} height={26} />
            </View>
            <TextInput
              keyboardType="default"
              placeholder="search"
              className="px-2 py-1 placeholder:px-10 rounded-md bg-gray-300"
            />
            <TouchableOpacity className="absolute z-10 top-[72%] right-[5px] border-l">
              <AdjustmentsHorizontalIcon color={"black"} size={26} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {/* Category and Popular X Sections */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-2">
          <Text className="text-lg text-[#f19c13] px-4">Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mx-1 mt-2"
          >
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </ScrollView>
        </View>

        <View className="mt-2">
          <View className="flex-row justify-between w-full px-2">
            <Text className="text-lg text-[#f19c13] mt-1 ml-2">Popular X</Text>
            <View className="p-2 bg-gray-300 rounded-full">
              <ArrowRightIcon size={20} color={"black"} />
            </View>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-2"
          >
            {popularxs.map((popularx, index) => (
              <PopularCard key={index} popularx={popularx} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Sidebar */}
      {sidbar && (
        <TouchableWithoutFeedback
          onPress={() => setSideBar(false)}
          className="absolute w-full h-full"
        >
          <View className="absolute w-full h-full bg-transparent z-10" />
        </TouchableWithoutFeedback>
      )}
      {sidbar && (
        <View className="absolute z-20 w-[60%] right-0 h-full bg-black bg-opacity-50 rounded-l-xl">
          <View className="flex-col w-full h-[4%] bg-gray-100"></View>
        </View>
      )}
    </>
  );
};

export default HomeScreen;
