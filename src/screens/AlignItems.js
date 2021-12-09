import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AlignItems(){
    return(
        <View style = {styles.container}>
            <View style = {{height: 50, width: 50, backgroundColor: 'green'}}></View>

            <View style = {{height: 50, width: 50, backgroundColor: 'yellow'}}></View>

            <View style = {{height: 50, width: 50, backgroundColor: 'blue'}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        flex: 1,
        borderColor: 'red',
        alignItems: 'center'     //stretch, flex-start, flex-end, baseline, center work on cross axis
    }
})