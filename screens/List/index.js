import { View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Nav from "../../Components/Nav"

const List = () => {
  const route = useRoute();
  const { category } = route.params || {};

  return (
    <>
    <Nav useFor={"List"} category={category}/>

    </>
  );
};

export default List;
