import { View, Text, Image } from 'react-native'
import React from 'react'

const Restaurant = ({restaurant}) => {
  return (
    <>
        <View className="py-1">
            <View className="bg-black w-full  flex-row">
                <View className="w-[42%]">
                    <View className="w-[150px] h-[150px] p-1 border border-gray-300 ml-1 my-1">
                    <Image source={{uri: restaurant.image}} className="w-full h-full " />
                    </View>
                </View>
                <View className="w-[58%]">
                    <Text className="text-white font-semibold text-xl flex-row flex-wrap">{restaurant.name}</Text>
                    <Text className="text-white text-xs font-extralight">Loacation : {restaurant.address}</Text>
                    <Text className="text-white text-xs font-extralight">Phone No : {restaurant.phone_no}</Text>
                </View>

            </View>
        </View>
    </>
  )
}

export default Restaurant