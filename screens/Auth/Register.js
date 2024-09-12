import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AuthLayout from "./Layout.js";

const Register = () => {
    const navigation = useNavigation();
  return (
    <>
    <AuthLayout>
      <View className="absolute z-10 top-[180px] left-[46px]">
        <View
          className="w-[300px] rounded-xl "
          style={{ backgroundColor: "rgba(217, 217, 217, 0.75)" }}
        >
          <Text className="text-3xl font-extrabold text-center text-black mt-10">
            Register
          </Text>
          <Text className="text-sm font-semibold text-center text-black mt-2">
            Welcome to B Shop
          </Text>

          <View className="mx-4 mt-2 space-y-4">
            <TextInput
              keyboardType="default"
              placeholder="Name"
              className="border border-black rounded-md pl-2"
            />
            <TextInput
              keyboardType="default"
              placeholder="Email"
              className="border border-black rounded-md pl-2"
            />
            <TextInput
              keyboardType="default"
              placeholder="Phone"
              className="border border-black rounded-md pl-2"
            />
            <TextInput
              keyboardType="default"
              placeholder="Password"
              className="border border-black rounded-md pl-2"
            />

            <View className="flex-row justify-center">
              <TouchableOpacity className="border border-black w-[50%] py-1 flex-row justify-center rounded-md">
                <Text>Register</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center mt-2">
              <View className="border-b border-black flex-1"></View>
              <Text className="text-sm mx-2">OR</Text>
              <View className="border-b border-black flex-1"></View>
            </View>

            <View className="flex-row justify-center mb-14">
              <Text className="text-xs text-black">
                Would you like to Login?
                <Text
                  className="font-semibold"
                  onPress={() => {
                    navigation.navigate("LoginUser");
                  }}
                >
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      </AuthLayout>
    </>
  );
};

export default Register;
