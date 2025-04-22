import { View, Text, Image,TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import {  MapPinIcon } from "react-native-heroicons/solid";
import HeartBorderIcon from "./HeartBorderIcon";
import { useNavigation } from "@react-navigation/native";

const Card = ({ foodData }) => {
  const [heartfill,setHeartfill] =useState(false);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback 
    onPress={() => {
      navigation.navigate("Detail", {
        id: foodData.id,
      });
    }}
    >
      <View className="mx-1 w-[180px] h-[175px] mb-2 bg-black text-white rounded-b-xl rounded-t-sm shadow-2x p-1">
      <View className="w-full h-[120px] border border-x-white">
        <Image className="w-full h-[118px] rounded-xl" source={{uri: `${foodData.image}`}} />
      </View>
      <View className="w-full h-[40px] mt-1 bg-white rounded-b-md ">
          <View className="w-full h-[50%] flex-row justify-between px-1 pt-0.5">
            <Text className="text-[10px] font-semibold  text-black w-[70%] ">{foodData.name}</Text>
            <Text className="text-xs text-black">{foodData.price} ks</Text>
          </View>
          <View className="w-full h-[50%] bg-black border border-white  pr-2 pl-1 flex-row justify-between pt-0.5">
          <Text className="text-white text-xs items-center font-light ">{foodData.restaurant.name}</Text>
          <TouchableOpacity className="absolute z-10 top-[5%] right-[5px] border-l">
            <MapPinIcon color={"white"} size={15} />
          </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity onPress={()=>setHeartfill(prev => !prev)} className=" absolute z-10 top-[3px] right-[3px] bg-white rounded-md p-0.5">
            <HeartBorderIcon clickFill={heartfill}   color={'black'} size={20}/>
      </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
