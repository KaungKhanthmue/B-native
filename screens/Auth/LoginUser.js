import { View, Text, Image, TextInput } from "react-native";
import React from "react";

const LoginUser = () => {
  return (
    <View>
      <Image
        source={require("../../assets/logincover.jpg")}
        alt=""
        className="w-full h-full"
      />
      <View className="absolute z-10 top-[140px] left-[46px]">
        <View
          className="w-[300px] h-[500px] rounded-md "
          style={{ backgroundColor: "rgba(217, 217, 217, 0.75)" }}
        >
          <Text className="text-3xl font-extrabold text-center text-black mt-3">
            Login
          </Text>
          <View className="mx-4 mt-2">
          <TextInput keyboardType="default" placeholder="Name" className="border border-black rounded-md pl-2"/>
          <TextInput keyboardType="default" placeholder="Email" className="border border-black rounded-md mt-2 pl-2"/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginUser;
