import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export default function SpinnerScreen(){

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setInterval(() => {
          setVisible(!visible)
        }, 3000);
    });

    return(
        <View>
            <Spinner
                visible = {visible}
                textContent={'Loading...'}
            />
            <Text>Spinner Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})