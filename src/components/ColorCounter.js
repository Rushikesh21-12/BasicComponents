import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ColorCounter(props){
    return(
        <View>
            <Text>{props.colorName}</Text>
            <Button
                title = {`Increase ${props.colorName}`}
                onPress = {() => props.onIncrease()}
            />
            <Button
                title = {`Decrease ${props.colorName}`}
                onPress = {() => props.onDecrease()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})