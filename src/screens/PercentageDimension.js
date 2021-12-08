import React from "react";
import { View, StyleSheet } from "react-native";

export default function PercentageDimenaion(){
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
        height : '100%',
        width: '100%'
    },

    view1:{
        height: '20%',
        width:'100%',
        backgroundColor: 'red'
    },

    view2:{
        height: '40%',
        width: '50%',
        backgroundColor: 'green'
    },

    view3:{
        height: '30%',
        width: '33%',
        backgroundColor: 'blue'
    }
})