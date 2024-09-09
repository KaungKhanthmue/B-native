import { View, Text, Image,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {  MapPinIcon } from "react-native-heroicons/solid";
import HeartBorderIcon from "./HeartBorderIcon";

const Card = ({ foodData }) => {
  const [heartfill,setHeartfill] =useState(false);

  return (
    <View className="mx-1 w-[180px] h-[191px] mb-2 bg-black text-white rounded-b-xl rounded-t-sm shadow-2x p-1">
      <TouchableOpacity className="w-full h-[120px] border border-white">
        <Image className="w-full h-[118px] rounded-xl" source={{uri: `${foodData.image}`}} />
      </TouchableOpacity>
      <View className="w-full h-[60px] mt-1 bg-white rounded-b-xl">
          <View className="w-full h-[70%] flex-row justify-between px-1 pt-0.5">
            <Text className="text-xs font-semibold text-black w-[70%] ">{foodData.name}</Text>
            <Text className="text-xs text-black">{foodData.price} ks</Text>
          </View>
          <View className="w-full h-[35%] bg-black border border-white rounded-b-xl pr-2 pl-1 flex-row justify-between pt-0.5">
          <Text className="text-white text-xs items-center font-light ">{foodData.restaurant_name}</Text>
          <TouchableOpacity className="absolute z-10 top-[5%] right-[5px] border-l">
            <MapPinIcon color={"white"} size={15} />
          </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity onPress={()=>setHeartfill(prev => !prev)} className=" absolute z-10 top-[3px] right-[3px] bg-white rounded-full p-0.5">
            <HeartBorderIcon clickFill={heartfill}   color={'black'} size={20}/>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
