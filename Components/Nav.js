import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Animated,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars4Icon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";

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
        <View className="flex-row justify-between  gap-2 bg-black mt-0.5 pb-2">
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
          <View className="w-[50%] flex-row justify-end pr-5 ">
            <TouchableOpacity>
              <View className="px-2 py-3 rounded-md">
                <ShoppingCartIcon size={18} color={"white"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="">
              <View className="w-[40px] h-[40px] bg-gray-300 rounded-l-xl p-1">
                <Image
                  source={{
                    uri: "https://img.freepik.com/premium-vector/print_349618-27844.jpg?w=826",
                  }}
                  className="w-[30px] h-[30px] rounded-l-xl"
                />
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
        className="absolute z-20 w-[60%] left-0 h-full mt-9 bg-gray-300 bg-opacity-50  border border-black"
      >
        <View className="flex-row pt-1 justify-center">
          <View className="w-[97%] p-4 bg-black rounded-sm">
            <Text className="text-white font-bold">Bagan Shops</Text>
          </View>
        </View>
        <View className="flex-row pt-1 justify-center">
          <View className="w-[95%]  px-1 flex-row justify-center">
            <View className="flex-col pt-2 justify-center">
              <View className="w-full p-1 bg-white shadow-2xl rounded-xl flex-row">
                <View className="w-[50px] h-[50px]  bg-black rounded-l-xl"></View>
                <Text className="w-[73%] h-fit ml-2 text-black text-base flex-row flex-wrap font-semibold py-3">
                  Foods
                </Text>
              </View>
              <View className="w-full p-1 bg-white mt-2 shadow-xl   rounded-xl flex-row ">
                <View className="w-[50px] h-[50px]  bg-black rounded-l-xl"></View>
                <Text className="w-[73%] h-fit ml-2  text-black text-base flex-row flex-wrap font-semibold py-3">
                  Clothes
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};

export default Nav;
