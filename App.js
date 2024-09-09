import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home/HomeScreen";
import List from "./screens/List";
import Profile from "./screens/Profile/header";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
          }}
        />
        <Stack.Screen
        name="List"
        component={List}
        options={{}}/>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
