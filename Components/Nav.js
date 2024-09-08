import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars4Icon, ShoppingBagIcon, ShoppingCartIcon } from "react-native-heroicons/solid";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const [name] = useState("Kaung Khant Hmue");
const slideAnim = useRef(new Animated.Value(-300)).current; 

  useEffect(() => {
    if (sidebar) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [sidebar]);

  return (
    <>
      <SafeAreaView>
        <View className="flex-row justify-between  gap-2 bg-black mt-1 pb-2">
          <View className="flex-row w-[50%] ">
            <TouchableOpacity onPress={() => setSidebar(true)}>
              <View className=" p-2 rounded-md mr-2">
                <Bars4Icon size={24} color={"white"} />
              </View>
            </TouchableOpacity>
            <View className="flex-row justify-between w-[84%]">
            <View>
              <Text className="text-white font-bold">Welcome </Text>
              <Text className="text-gray-100 italic">From Bagan Foods</Text>
            </View>
          </View>
          </View>
            <View className="w-[50%] flex-row justify-end pr-7 ">
              <TouchableOpacity >
                <View className="px-2 py-3 rounded-md">
                  <ShoppingCartIcon size={18} color={"white"} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="">
                <View className="w-[40px] h-[40px] bg-gray-300 rounded-lg">
                </View>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>

      {sidebar && (
        <TouchableWithoutFeedback onPress={() => setSidebar(false)}>
          <View className="absolute w-full h-full bg-transparent z-10" />
        </TouchableWithoutFeedback>
      )}

      <Animated.View
        style={{ transform: [{ translateX: slideAnim }] }}
        className="absolute z-20 w-[60%] left-0 h-full mt-10 bg-white bg-opacity-50 rounded-r-xl"
      >
        <View className="p-4">
          <Text className="text-white font-bold">Sidebar Content</Text>
        </View>
      </Animated.View>
    </>
  );
};

export default Nav;
