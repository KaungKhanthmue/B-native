import { View, Text} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Nav from "../../Components/Nav"
import Body from "./Body";

const List = () => {
  const route = useRoute();
  const { category } = route.params || {};

  return (
    <>
    <Nav useFor={"List"} category={category}/>
    <Body />
    </>
  );
};

export default List;
