import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function FlexDimension(){
    return(
        <View style = {styles.container}>
            <View style = {styles.view1}></View>
            <View style = {styles.view2}></View>
            <View style = {styles.view3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0.5
    },

    view1:{
        flex: 2,
        backgroundColor: 'red'
    },

    view2:{
        flex: 5,
        backgroundColor: 'green'
    },

    view3:{
        flex: 3,
        backgroundColor: 'blue'
    }
})