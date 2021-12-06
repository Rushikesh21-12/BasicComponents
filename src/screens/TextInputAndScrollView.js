import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

export default function TextinputAndScrollView(){

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    
    return(
        <ScrollView>
            <Text style = {styles.text}>Enter your name below : </Text>
            <TextInput
                style = {styles.textinput}
                onChangeText = {name => setName(name)}
                defaultValue = {name}
                placeholder = "Enter your name here"
            />

            <Text style = {styles.text}>Enter your age below : </Text>
            <TextInput
                style = {styles.textinput}
                onChangeText = {age => setAge(age)}
                placeholder = "Enter your age here"
            />

            <Text style = {{marginHorizontal: 20}}>Your name is '{name}' and age is {age}</Text>

            
            <Text style = {styles.svText}>.</Text>
            <Text style = {styles.svText}>.</Text>
            <Text style = {styles.svText}>.</Text>
            <Text style = {styles.svText}>..</Text>
            <Text style = {styles.svText}>...</Text>
            <Text style = {styles.svText}>....</Text>
            <Text style = {styles.svText}>.....</Text>
            <Text style = {styles.svText}>......</Text>
            <Text style = {styles.svText}>.......</Text>
            <Text style = {styles.svText}>........</Text>
            <Text style = {styles.svText}>.........</Text>
            <Text style = {styles.svText}>..........</Text>
            <Text style = {styles.svText}>...........</Text>
            <Text style = {styles.svText}>............</Text>
            <Text style = {styles.svText}>.............</Text>
            <Text style = {styles.svText}>..............</Text>
            <Text style = {styles.svText}>...............</Text>
            <Text style = {styles.svText}>................</Text>
            <Text style = {styles.svText}>.................</Text>
                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text:{
        marginHorizontal: 20,
        fontSize: 18
    },

    textinput:{
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 20,
        marginBottom: 15
    },

    svText:{
        fontSize: 30,
        marginVertical: 10
    }

})