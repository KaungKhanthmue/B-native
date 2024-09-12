import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginUser from "./screens/Auth/LoginUser";
import Register from "./screens/Auth/Register";
import List from "./screens/List";
import Profile from "./screens/Profile/index";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
        <Stack.Screen name="LoginUser" component={LoginUser} options={{}} />
        <Stack.Screen name="RegisterUser" component={Register} options={{}} />
        <Stack.Screen name="List" component={List} options={{}} />
        <Stack.Screen name="Profile" component={Profile} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
