import React from "react";
import { View, StyleSheet} from 'react-native'

export default function FixedDimension(){
    return(
        <View>
            <View style = {styles.view1}></View>
            <View style = {styles.view2}></View>
            <View style = {styles.view3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1:{
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },

    view2:{
        height: 100,
        width: 100,
        backgroundColor: 'green'
    },

    view3:{
        height: 150,
        width: 150,
        backgroundColor: 'blue'
    }
})