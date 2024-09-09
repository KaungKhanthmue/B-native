import { View, Text, Image } from 'react-native'
import React from 'react'

const PopularCard = ({foodData}) => {
    return (
      <View className={`ml-1 w-[110px] h-[100px] bg-black items-center justify-center text-white rounded-xl shadow-2xl border-2 border-black  `}>
        <Image className="w-full h-full rounded-xl" source={{uri: `${foodData.image}`}} />
      </View>
    );
}

export default PopularCard