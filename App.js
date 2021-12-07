import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FunctionComponent from "./src/screens/FunctionComponent";
import ClassComponent from "./src/screens/ClassComponent";
import ListScreen from "./src/screens/ListScreen";
import TextinputAndScrollView from "./src/screens/TextInputAndScrollView";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorsScreen";
import SuqareScreen from "./src/screens/SquareScreen";

export default function App(){
  return(
    <View style = {styles.container}>

      {/*
        <FunctionComponent/>  //This is a function component
        <ClassComponent/>     //This is a class component
        <ListScreen/>         //FlatList and SectionList
        <TextinputAndScrollView/>     // Text Input and ScrollView
        <ImageScreen/>         // Image View and reusable component with props
        <CounterScreen/>       // Counter Application
        <ColorScreen/>         // adding a new color app
      */}

      <SuqareScreen/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})