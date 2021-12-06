import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FunctionComponent from "./src/screens/FunctionComponent";
import ClassComponent from "./src/screens/ClassComponent";
import ListScreen from "./src/screens/ListScreen";
import TextinputAndScrollView from "./src/screens/TextInputAndScrollView";

export default function App(){
  return(
    <View style = {styles.container}>

      {/*
        <FunctionComponent/>  //This is a function component
        <ClassComponent/>     //This is a class component
        <ListScreen/>         //FlatList and SectionList
      */}

      <TextinputAndScrollView/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
  }
})