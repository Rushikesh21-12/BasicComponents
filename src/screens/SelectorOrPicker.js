import React, {useState} from "react";
import { View, Text, StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';

export default function SelectorOrPicker(){

    const [selectedLanguage, setSelectedLanguage] = useState();

    return(
        <View style = {styles.container}>
            <View style = {styles.pickerView}>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                    style = {styles.picker}
                >
                    <Picker.Item label = 'JAVA' value = 'java'/>
                    <Picker.Item label = 'Javaa Script' value = 'js'/>
                    <Picker.Item label = 'Python' value = 'py'/>
                    <Picker.Item label = 'C++ Language' value = 'c'/>
                    <Picker.Item label = 'Kotlin' value = 'kt'/>
                </Picker>
            </View>

            <Text>selected language is : {selectedLanguage}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 40,
        alignItems: "center", 
    },

    picker: {
        width: 250,
    },

    pickerView: {
        borderWidth: 2,
        borderColor: 'black'
    }
})