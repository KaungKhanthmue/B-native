// Category.js
import { View, Text } from 'react-native';
import React from 'react';

const Category = ({ category }) => {
  return (
    <View className="mx-1 p-2 bg-white border rounded-full ">
      <Text className="text-black font-semibold">{category.name}</Text>
    </View>
  );
};

export default Category;  
