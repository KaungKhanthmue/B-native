import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TrashIcon } from "react-native-heroicons/solid";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="bg-white">
        <View className=" flex-row px-2 py-1 gap-2">
            <TouchableOpacity>
            <View className="bg-black w-[50px] h-[50px] rounded-full"></View>
            </TouchableOpacity>
            <View className=" flex-row justify-between py-1 w-[84%]">
                <View>
                <Text className="text-black font-bold">Welcome Kaung Khant Hmue</Text>
                <Text className="text-gray-900  italic">From BShop</Text>
                </View>
                <View>
                <View className="bg-gray-400 p-2 rounded-full mr-2"><TrashIcon size={24} color={'black'}/></View>
                </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen