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
import FixedDimension from "./src/screens/FixedDimension";
import PercentageDimenaion from "./src/screens/PercentageDimension";
import FlexDimension from "./src/screens/FlexDimension";
import AlignItems from "./src/screens/AlignItems";
import JustifyContent from "./src/screens/JustiFyContent";
import CustomFonts from "./src/screens/CustomFonts";
import SelectorOrPicker from "./src/screens/SelectorOrPicker";
import WebViewScreen from "./src/screens/WebView";
import Dialogs from "./src/screens/Dialogs";
import CalendarAndDatePicker from "./src/screens/CalendarAndDatePicker";
import SwitchScreen from "./src/screens/Switch";
import DateTimePickerScreen from "./src/screens/DateTimePicker";
import SpinnerScreen from "./src/screens/SpinnerScreen";
import ImagePickerScreen from "./src/screens/ImagePicker";
import TouchablesScreen from "./src/screens/TouchablesScreen";
import KeyboardHandling from "./src/screens/KeyboardHandling";

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
        <SuqareScreen/>        // Set Color app
        <FixedDimension/>      // height and wifht fixed dimension
        <PercentageDimenaion/> // height and width with percentage dimension
        <FlexDimension/>       // height and width with flex dimension
        <AlignItems/>
        <JustifyContent/>
        <CustomFonts/>
        <SelectorOrPicker/>
        <WebViewScreen/>
        <Dialogs/>
        <SwitchScreen/>
        <CalendarAndDatePicker/>
        <DateTimePickerScreen/>
        <SpinnerScreen/>
        <ImagePickerScreen/>
        <TouchablesScreen/>
      */}
   
      <KeyboardHandling/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})