// components/Nav.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars4Icon } from "react-native-heroicons/solid";

const Nav = ({ sidbar, setSideBar }) => {
  return (
    <>
      <SafeAreaView className="bg-white">
        <View className="flex-row px-2 py-1 gap-2 bg-white mt-2">
          <TouchableOpacity>
            <View className="bg-black w-[50px] h-[50px] rounded-full" />
          </TouchableOpacity>
          <View className="flex-row justify-between py-1 flex-1">
            <View>
              <Text className="text-black font-bold">Welcome User</Text>
              <Text className="text-gray-900 italic">From B</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => setSideBar(true)}>
                <View className="bg-white p-2 rounded-full">
                  <Bars4Icon size={24} color={"black"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
      {sidbar && (
        <TouchableWithoutFeedback
          onPress={() => setSideBar(false)}
          className="absolute w-full h-full"
        >
          <View className="absolute w-full h-full bg-black bg-opacity-30 z-10" />
        </TouchableWithoutFeedback>
      )}
      {sidbar && (
        <View className="absolute z-20 w-[60%] right-0 h-full bg-black bg-opacity-70 rounded-l-xl mt-2">
          <View className="flex-1 justify-center items-center">
            <Text className="text-white text-lg">Sidebar Content</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default Nav;
