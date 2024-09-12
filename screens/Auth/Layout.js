import { View, Text, Image } from 'react-native'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <View className="flex-1">
      <Image
        source={require("../../assets/logincover.jpg")}
        alt="Login Cover"
        className="w-full h-full"
      />
      {children}
    </View>
  );
};

export default Layout