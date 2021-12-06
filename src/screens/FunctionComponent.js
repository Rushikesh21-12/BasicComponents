import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FunctionComponent(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>This is function component</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        alignItems: "center"
    },

    textStyle:{
        fontSize: 30
    }
})