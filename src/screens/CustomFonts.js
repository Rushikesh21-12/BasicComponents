import React from "react";
import { View, Text, StyleSheet} from 'react-native';

export default function CustomFonts() {
    return(
        <View>
            <Text style = {styles.customFontOne}>Custom font style 1</Text>
            <Text style = {styles.customFontTwo}>Custom font style 2</Text>
            <Text style = {styles.customFontThree}>Custom font style 3</Text>
            <Text style = {styles.customFontFour}>Custom font style 4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    customFontOne: {
        fontSize: 25,
        margin: 10,
        fontFamily: 'Poppins-Regular'
    },

    customFontTwo: {
        fontSize: 25,
        margin: 10,
        fontFamily: 'Poppins-Medium'
    },

    customFontThree: {
        fontSize: 25,
        margin: 10,
        fontFamily: 'Poppins-Bold'
    },

    customFontFour: {
        fontSize: 25,
        margin: 10,
        fontFamily: 'Poppins-Light'
    }
})