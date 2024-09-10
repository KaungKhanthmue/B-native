import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const PopularCard = ({ restaurantData }) => {
  const [nameSlide, setNameSlide] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Profile", {
          restaurant_id: restaurantData.id,
        });
      }}
      onPressIn={() => setNameSlide(true)}
      onPressOut={() => setNameSlide(false)}
    >
      <View className="relative ml-1 w-[170px] h-[150px] bg-black items-center justify-center text-white rounded-md shadow-2xl border-2 border-black">
        <Image className="w-full h-full rounded-xl" source={{ uri: restaurantData.image }} />
        {nameSlide && (
          <View style={{ backgroundColor: 'rgba(55, 55, 55, 0.75)' }} className="absolute w-full h-[100px] bottom-0 rounded-b-xl">
            <Text className="text-xs font-extrabold px-1 text-white">{restaurantData.name}</Text>
            <Text className="text-xs font-light px-1 text-white">Location: {restaurantData.address}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PopularCard;
