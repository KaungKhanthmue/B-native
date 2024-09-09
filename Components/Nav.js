import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, Bars4Icon, ShoppingCartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const Nav = ({ useFor, category }) => {
  const [sidebar, setSidebar] = useState(false);
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: sidebar ? 0 : -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [sidebar]);

  return (
    <>
      <View className="pt-[34px] bg-[#edf84cf3]">
        <View className="flex-row justify-between gap-2 mt-0.5 pb-2">
          <View className="flex-row w-[50%]">
            {useFor === 'Home' ? (
              <>
                <TouchableOpacity onPress={() => setSidebar(true)}>
                  <View className="p-2 rounded-md mr-2">
                    <Bars4Icon size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <View className="flex-row justify-between w-[84%]">
                  <View>
                    <Text className="text-black font-bold">Welcome</Text>
                    <Text className="text-gray-900 italic">From Bagan Foods</Text>
                  </View>
                </View>
              </>
            ) : (
              <>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View className="p-1  rounded-md mx-2 border border-black">
                    <ArrowLeftIcon size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <View className="flex-row justify-between w-[84%]">
                  <View>
                    <Text className="text-black font-bold py-2">
                      Best {category} For You
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
          <View className="w-[50%] flex-row justify-end pr-5">
            <TouchableOpacity>
              <View className="px-2 py-3 rounded-md">
                <ShoppingCartIcon size={18} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="w-[40px] h-[40px] bg-gray-300 rounded-l-xl p-1">
                <Image
                  source={{
                    uri: 'https://img.freepik.com/premium-vector/print_349618-27844.jpg?w=826',
                  }}
                  className="w-[30px] h-[30px] rounded-l-xl"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {sidebar && (
        <TouchableOpacity onPress={() => setSidebar(false)} style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'transparent', zIndex: 10 }} />
      )}

      <Animated.View
        style={{ transform: [{ translateX: slideAnim }] }}
        className="absolute z-20 w-[60%] left-0 h-full mt-9 bg-gray-300 bg-opacity-50 border border-black"
      >
        <View className="flex-row pt-1 justify-center">
          <View className="w-[97%] p-4 bg-black rounded-sm">
            <Text className="text-white font-bold">Bagan Shops</Text>
          </View>
        </View>
        <View className="flex-row pt-1 justify-center">
          <View className="w-[95%] px-1 flex-row justify-center">
            <View className="flex-col pt-2 justify-center">
              <TouchableOpacity className="w-full p-1 bg-white shadow-2xl rounded-l-xl flex-row">
                <View className="w-[50px] h-[50px] bg-black rounded-l-xl" />
                <Text className="w-[73%] h-fit ml-2 text-black text-base flex-row flex-wrap font-semibold py-3">
                  Foods
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-full p-1 bg-white mt-2 shadow-xl rounded-l-xl flex-row">
                <View className="w-[50px] h-[50px] bg-black rounded-l-xl" />
                <Text className="w-[73%] h-fit ml-2 text-black text-base flex-row flex-wrap font-semibold py-3">
                  Clothes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};

export default Nav;
