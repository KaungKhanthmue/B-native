import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";

const Card = ({ foodData }) => {

  return (
    <TouchableOpacity className="mx-1 w-[180px] h-[191px] mb-2 bg-black text-white rounded-b-xl rounded-t-sm shadow-2x p-1">
      <View className="w-full h-[120px] border border-white">
        <Image className="w-full h-[118px] rounded-xl" source={{uri: `${foodData.image}`}} />
      </View>
      <View className="w-full h-[60px] mt-1 bg-white rounded-b-xl">
          <View className="w-full h-[70%] flex-row justify-between px-1 pt-0.5">
            <Text className="text-xs font-semibold text-black w-[70%] ">{foodData.name}</Text>
            <Text className="text-xs text-black">{foodData.price}ks</Text>
          </View>
          <View className="w-full h-[35%] bg-black border border-white rounded-b-xl px-2 flex-row justify-between pt-0.5">
            <Text className="text-white text-xs items-center font-light ">Deli fee</Text>
            <Text className="text-white text-xs items-center font-light ">{foodData.deli_fee} ks</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
