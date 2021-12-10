import React, {useState} from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import Dialog from "react-native-dialog";

const AlertDialog = () => {
    Alert.alert(
      "Are you sure?",
      "You can not undo this action",
      [
        {
          text: "Ask me later",
          onPress: () => console.warn("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.warn("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.warn("OK Pressed") }
      ],

      {
        cancelable: true,
      }
    );
}

export default function Dialogs(){

    const [visible, setVisible] = useState(false)

    const showDialog = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    return(
        <View>
            <Text>Dialogs Screen</Text>

            <Button title="Show Alert Dialog" onPress={AlertDialog} />

            <Button title="Show dialog 1" onPress={showDialog} />

            <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
                <Dialog.Title>Account Delete</Dialog.Title>

                <Dialog.Description>
                    Are you sure you want to delete this account?
                </Dialog.Description>

                <Dialog.Button 
                    label = 'Cancel' 
                    onPress={() => setVisible(false)}
                />

                <Dialog.Button 
                    label = 'Delete' 
                    onPress={() => {
                        console.warn('Deleted')
                        setVisible(false)
                    }}
                    color='red'
                    bold = {true}
                />
            </Dialog.Container>
        </View>
    )
}    

const styles = StyleSheet.create({

})