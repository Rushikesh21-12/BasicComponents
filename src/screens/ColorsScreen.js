import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

export default function ColorScreen(){

    const [colors, setColors] = useState([])

    return(
        <View>
            <Button
                title = 'Add Color'
                onPress = {() => {
                    setColors([...colors, randomRgb()])
                }}
            />

            <FlatList
                keyExtractor = {(item) => item}
                data = {colors}
                renderItem = {({item}) => {
                    return(
                        <View style = {{ height: 100, width: 100, backgroundColor: item}}></View>
                    )
                }}
            />
        </View>
    )
}

const dtyles = StyleSheet.create({

})