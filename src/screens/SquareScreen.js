import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const CHANGE_IN_COLOR = 10

export default function SuqareScreen(){

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return(
        <View>
            <ColorCounter 
                colorName = 'Red'
                onIncrease = {() => setRed(red + CHANGE_IN_COLOR)}
                onDecrease = {() => setRed(red - CHANGE_IN_COLOR)}
            />
            <ColorCounter 
                colorName = 'Green'
                onIncrease = {() => setGreen(green + CHANGE_IN_COLOR)}
                onDecrease = {() => setGreen(green - CHANGE_IN_COLOR)}
            />
            <ColorCounter 
                colorName = 'Blue'
                onIncrease = {() => setBlue(blue + CHANGE_IN_COLOR)}
                onDecrease = {() => setBlue(blue - CHANGE_IN_COLOR)}
            />

            <View style = {{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
        </View>
    )
}

const styles = StyleSheet.create({

})