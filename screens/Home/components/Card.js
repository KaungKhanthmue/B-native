import { View, Text } from 'react-native';
import React from 'react';

const Card = ({ popularx }) => {
  return (
    <View className={`mx-1 w-[180px] h-[200px] mb-2 bg-black items-center justify-center text-white rounded-xl shadow-2xl `}>
      <Text className="text-white">Food</Text>
    </View>
  );
};

export default Card;
