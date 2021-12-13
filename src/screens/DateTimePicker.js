import React, {useState} from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimePickerScreen(){

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [textDate, setTextdate] = useState('')
    const [textTime, setTextTime] = useState('')

    const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(Platform.OS === "ios")

        setTextTime(currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds())
        setTextdate(currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear())
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return(
        <View>
            <Button title="Show date picker" onPress={() => showMode('date')}/>

            <Button title="Show time picker" onPress={() => showMode('time')}/>

            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
            
            <Text>Date is : {textDate}</Text>
            <Text>Date is : {textTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})