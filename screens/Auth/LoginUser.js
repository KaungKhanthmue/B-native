import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import AuthLayout from "./Layout";
import { useNavigation } from "@react-navigation/native";

const LoginUser = () => {
  const navigation = useNavigation();
  
  return (
    <AuthLayout>
      <View className="absolute z-10 top-[220px] left-[46px]">
        <View
          className="w-[300px] rounded-xl"
          style={{ backgroundColor: "rgba(217, 217, 217, 0.75)" }}
        >
          <Text className="text-3xl font-extrabold text-center text-black mt-10">
            Login
          </Text>
          <Text className="text-sm font-semibold text-center text-black mt-2">
            Welcome to B Shop
          </Text>

          <View className="mx-4 mt-2 space-y-4">
            <TextInput
              keyboardType="default"
              placeholder="Email"
              className="border border-black rounded-md pl-2"
            />
            <View>
              <TextInput
                keyboardType="default"
                placeholder="Password"
                className="border border-black rounded-md pl-2"
              />
              <View className="flex-row justify-end">
                <Text className="text-black text-sm mt-1">Forgot password?</Text>
              </View>
            </View>

            <View className="flex-row justify-center">
              <TouchableOpacity
                className="border border-black w-[50%] py-1 flex-row justify-center rounded-md"
                onPress={() => {
                  // Handle login logic here or navigate to another screen
                }}
              >
                <Text>Login</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center mt-2">
              <View className="border-b border-black flex-1"></View>
              <Text className="text-sm mx-2">OR</Text>
              <View className="border-b border-black flex-1"></View>
            </View>

            <View className="flex-row justify-center mb-14">
              <Text className="text-xs text-black">
                Would you like to Register?{" "}
                <Text
                  className="font-semibold"
                  onPress={() => {
                    navigation.navigate("RegisterUser");
                  }}
                >
                  Create Account
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

export default LoginUser;
