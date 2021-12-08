import React, {useReducer, useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CHANGE_IN_COUNT = 1

const reducer = (state, action) =>{
    switch(action.type){
        case 'change_count':
            return {count: state.count + action.payload}

        default:
            return state
            
    }
}

export default function CounterScreen(){

    //const [counter, setCounter] = useState(0)

    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const {count} = state

    return(
        <View style = {styles.container}>
            <Button
                title = 'Increase'
                //onPress = {() => {setCounter(counter + 1)}}
                onPress = {() => dispatch({ type: 'change_count', payload: CHANGE_IN_COUNT})}
            />

            <Button
                title = 'Decrease'
                //onPress = {() => {setCounter(counter - 1)}}
                onPress = {() => dispatch({ type: 'change_count', payload: -1 * CHANGE_IN_COUNT})}
            />

            <Text style = {styles.text}>Counter Value : {count}</Text>
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