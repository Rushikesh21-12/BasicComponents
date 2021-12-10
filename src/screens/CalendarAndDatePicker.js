import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";

import CalendarPicker from 'react-native-calendar-picker';
import DatePicker from 'react-native-datepicker'

export default function CalendarAndDatePicker(){
    const [day, setDay] = useState('')
    const [date, setDate] = useState('')

    return(
        <View>
            <Text>Calendar Screen</Text>

            <CalendarPicker
                onDateChange={(date) => setDay(date)}
                todayBackgroundColor="#7300e6"
                selectedDayColor="green"
                selectedDayTextColor="#FFFFFF"
            />

            <Text>Selected Date : { day.toString().slice(4, 15) }</Text>

            <Text>Date Picker</Text>

            <DatePicker
                style={{width: 200}}
                date={date}
                format="DD MMM YYYY"
                placeholder="Select date"
                onDateChange={(date) => setDate(date)}
            />

            <Text>Selected Date : {date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})