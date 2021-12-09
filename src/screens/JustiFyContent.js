import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function JustifyContent(){
    return(
        <View style = {styles.container}>
            <View style = {{height: 50, width: 50, backgroundColor: 'green', right: 25}}></View>

            <View style = {{height: 50, width: 50, backgroundColor: 'yellow', alignSelf: 'flex-end'}}></View>

            <View style = {{height: 50, width: 50, backgroundColor: 'blue', left:50}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'red',
        flex: 1,
        justifyContent: 'space-around',    //flex-start, flex-end, center, space-around, space-between work on mainn axis
    }
})