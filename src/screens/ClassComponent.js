import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ClassComponent extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.textStyle}>This is class component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },

    textStyle:{
        fontSize: 30
    }
})

export default ClassComponent;