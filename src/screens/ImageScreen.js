import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

export default function ImageScreen(){
    return(
        <View>
            <ImageDetail 
                imageSource = {require('../../assets/First.png')} 
                name = "FirstImage"
                imageScore = {20}
            />
            <ImageDetail 
                imageSource = {require('../../assets/Second.png')} 
                name = "SecondImage"
                imageScore = {21}
            />
            <ImageDetail 
                imageSource = {require('../../assets/Third.png')} 
                name = "ThirdImage"
                imageScore = {99}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})