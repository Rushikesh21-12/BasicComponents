import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
    return(
        <View style={styles.container}>
            <Text>Webview start</Text>
            <WebView
                source={{uri: 'https://github.com/Rushikesh21-12'}}
            />

            <WebView
                source = {{ html: '<h1>This is h1</h1> <br> <h3>This is h3</h3>'}}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        borderColor: 'red',
        flex: 1,
    },

})