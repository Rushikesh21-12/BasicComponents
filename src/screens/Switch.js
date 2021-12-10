import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

export default function SwitchScreen(){

    const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

    const toggleSwitch = (value) => setIsSwitchEnabled(value);

    return (
        <View style={styles.container}>
            <Switch
                onValueChange={toggleSwitch}
                trackColor={{true: 'green'}}
                value={isSwitchEnabled}
            />

            <Text>{isSwitchEnabled ? "Active" : "Inactive"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
