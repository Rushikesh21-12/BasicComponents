import React, {useState} from "react";
import { View, Text, StyleSheet, Pressable, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback } from "react-native";

const randomHexColor = () => {
        return "#000000".replace(/0/g, function() {
          return (~~(Math.random() * 16)).toString(16);
        });
};
export default function TouchablesScreen(){

    const [rippleColor, setRippleColor] = useState(randomHexColor());

    return(
        <View style = {styles.container}>
            <TouchableHighlight 
                style = {styles.touchable}
                activeOpacity = {0.6}
                underlayColor =  "blue"    
                onPress = { () => alert('Touchable HighLight Pressed!!')}
            >
                <Text>TouchableHighlight</Text>
            </TouchableHighlight>

            <TouchableOpacity
                style = {styles.touchable}
                onPress = { () => alert('Touchable Opacity Pressed!!')}
            >
                <Text>TouchableOpacity</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback 
                onPress = { () => alert('Touchable Without Feedback Pressed!!')}
                onLongPress = { () => alert('Long pressed')}
            >
                <View style = {styles.touchable}>
                    <Text>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>


            <TouchableNativeFeedback
                onPress = { () => {setRippleColor(randomHexColor())}}
                background = {TouchableNativeFeedback.Ripple(rippleColor)}
            >
                <View style = {styles.touchable}>
                    <Text style = {styles.text}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>

            <Pressable
                style = {styles.touchable}
                onPressIn = { () => console.warn('On press in')}
                onLongPress = {() => console.warn('long press')}
                onPressOut = {() => console.warn('on press out')}
            >
                <Text>I am Pressable</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: "space-around",
        marginHorizontal: 20
    },

    touchable: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
})