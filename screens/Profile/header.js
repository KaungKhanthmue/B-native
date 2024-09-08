import { View, Text, Image, Button } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View className="w-full items-center">
      {/* Cover Image Section */}
      <View className="w-full h-48 mt-9 items-center justify-center">
        <Image
          className="w-full h-full rounded-md"
          source={{
            uri: "https://imgs.search.brave.com/-4Moq4406v343JJRE5XaDWQrbmfylJSBw1SfKBzi1_E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NTExODc1ODA0NTkt/NDM0OTAyNzljMGZh/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGQy/VmljMmwwWlNVeU1H/TnZkbVZ5ZkdWdWZE/QjhmREI4Zkh3dw.jpeg",
          }}
        />
      </View>

      {/* User Info Section */}
      <View className="w-[96%] mt-12 items-center">
        <Text className="text-2xl font-bold">Kaung Khant Hmue</Text>
        <Text>kaungkhanthmue58@gmail.com</Text>
      </View>

      {/* Button Section */}
      <View className="w-full h-12 flex-row justify-center py-2 gap-4">
        <Button title="Add Post New" color="blue" />
        <Button title="Edit Profile" color="#b3b3b3" />
      </View>

      {/* Profile Image Section */}
      <View className="w-36 h-36 absolute z-50 left-4 top-24 bg-gray-500 rounded-full items-center justify-center">
        <Image
          className="w-36 h-36 rounded-full"
          source={{
            uri: "https://imgs.search.brave.com/O6uM4tB0cYztvgnUgQmYN6c0ZN69eVgXzARrLtta2Zw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/MS8wNi8yMy8wNC9u/YXR1cmUtMTk1OTIy/OV82NDAuanBn",
          }}
        />
      </View>
    </View>
  );
}
