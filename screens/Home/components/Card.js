import { View, Text } from 'react-native';
import React from 'react';

const Card = ({ popularx, cls }) => {
  const width = cls?.width || "w-[200px]";
  const height = cls?.height || "h-[180px]";

  return (
    <View className={`ml-1 ${width} ${height} ${cls?.mb} bg-black items-center justify-center text-white rounded-xl shadow-2xl `}>
      <Text className="text-white">Food</Text>
    </View>
  );
};

export default Card;
