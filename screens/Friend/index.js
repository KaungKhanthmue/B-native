import { View, Text, Image } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

export default function Index() {
  return (
    <View>
      <View className="flex flex-row items-center p-2 gap-2 shadow-lg">
        <View className="bg-gray-300 flex-row items-center px-4 py-2 rounded-full shadow-md">
          <Text className="font-bold text-sm">Suggestions</Text>
        </View>
        <View className="bg-gray-300 flex-row items-center px-4 py-2 rounded-full shadow-md">
          <Text className="font-bold text-sm">Your Friends</Text>
        </View>
        <View className="bg-gray-300 flex-row items-center px-4 py-2 rounded-full shadow-md">
          <Text className="font-bold text-sm">Close Friends</Text>
        </View>
      </View>

      <View className="w-full p-2">
        <Text className="text-lg font-bold">Friend Request</Text>

        <View className="flex-row items-center mt-2 p-1 bg-white shadow-lg">
          <View className="w-1/4">
            <Image
              className="w-20 h-20 rounded-full"
              source={{ uri: 'https://imgs.search.brave.com/56OGSkLUSV-x1XT1crD63dQJPNxI6cODhIfe5jJzDpI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAyLzlh/LzczLzAyOWE3M2Y4/ZTVlMTJkNGE4YzA3/ZjEyZmZiY2YzNzYx/LmpwZw' }}
            />
          </View>
          <View className="w-3/4">
            <View className="flex-row justify-between">
              <Text className="font-bold text-lg">Aung Aung</Text>
              <Text>4d</Text>
            </View>
            <View className="flex-row gap-2 py-2">
              <View className="w-36 h-10 bg-blue-500 rounded-lg">
                <Text className="text-white font-bold text-center pt-2">Confirm</Text>
              </View>
              <View className="w-24 h-10 bg-gray-500 rounded-lg">
                <Text className="text-white font-bold text-center pt-2">Delete</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Second Friend Request */}
        <View className="flex-row items-center mt-2 p-1 bg-white shadow-lg">
          <View className="w-1/4">
            <Image
              className="w-20 h-20 rounded-full"
              source={{ uri: 'https://imgs.search.brave.com/56OGSkLUSV-x1XT1crD63dQJPNxI6cODhIfe5jJzDpI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAyLzlh/LzczLzAyOWE3M2Y4/ZTVlMTJkNGE4YzA3/ZjEyZmZiY2YzNzYx/LmpwZw' }}
            />
          </View>
          <View className="w-3/4">
            <View className="flex-row justify-between">
              <Text className="font-bold text-lg">Kyaw Kyaw</Text>
              <Text>4d</Text>
            </View>
            <View className="flex-row gap-2 py-2">
              <View className="w-36 h-10 bg-blue-500 rounded-lg">
                <Text className="text-white font-bold text-center pt-2">Confirm</Text>
              </View>
              <View className="w-24 h-10 bg-gray-500 rounded-lg">
                <Text className="text-white font-bold text-center pt-2">Delete</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
