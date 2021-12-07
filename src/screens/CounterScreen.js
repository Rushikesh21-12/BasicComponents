import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function CounterScreen(){

const [counter, setCounter] = useState(0)

    return(
        <View style = {styles.container}>
            <Button
                title = 'Increase'
                onPress = {() => {setCounter(counter + 1)}}
            />

            <Button
                title = 'Decrease'
                onPress = {() => setCounter(counter - 1)}
            />

            <Text style = {styles.text}>Counter Value : {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-around",
        maxHeight: 150
    },

    text:{
        fontSize: 20,
        alignSelf: "center",
        marginTop: 20
    },

})