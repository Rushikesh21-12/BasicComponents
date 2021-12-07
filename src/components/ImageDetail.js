import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ImageDetail(props){
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source = {props.imageSource} />
            <View style = {styles.container2}>
                <Text style = {styles.text}>Name : {props.name}</Text>
                <Text style = {styles.text}>Score : {props.imageScore}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginBottom: 20
    },

    container2:{
        marginLeft: 20,
    },

    image:{
        height: 150,
        width: 150
    },

    text:{
        fontSize: 17,
        fontWeight: "bold"
    }

})