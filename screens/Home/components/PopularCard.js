import { View, Text } from 'react-native'
import React from 'react'

const PopularCard = ({popularx}) => {
    return (
      <View className={`ml-1 w-[110px] h-[100px] bg-black items-center justify-center text-white rounded-xl shadow-2xl `}>
        <Text className="text-white">Food</Text>
      </View>
    );
}

export default PopularCard