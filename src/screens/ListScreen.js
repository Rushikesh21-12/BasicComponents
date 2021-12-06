import React from "react";
import { View, Text, StyleSheet, FlatList, SectionList } from "react-native";

export default function ListScreen(){

    const listData = [
        {name : "Rushi1", age: 21},
        {name : "Rushi2", age: 22},
        {name : "Rushi3", age: 23},
        {name : "Rushi4", age: 24},
        {name : "Rushi5", age: 25},
        {name : "Rushi6", age: 26},
        {name : "Rushi7", age: 27},
        {name : "Rushi8", age: 28},
        {name : "Rushi9", age: 29},
    ]

    const nameWithD = ['Devin', 'Dan', 'Dominic', 'Devin']
    const nameWithJ = ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']

    return(
        <View>
            {/*<FlatList
                keyExtractor = {(item) => item.name}
                horizontal
                data = {listData}
                renderItem = {({ item }) => {
                    return(
                        <Text style = {styles.listItem}>Name : {item.name}, Age : {item.age}</Text>
                    )
                }}
            />*/}


            <SectionList
                sections={[
                    {title: 'D', data: nameWithD},
                    {title: 'J', data: nameWithJ},
                ]}
                
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          
            />

        </View>
    )
}

const styles = StyleSheet.create({
    listItem:{
        marginVertical: 50,
        fontSize: 18
    },

    sectionHeader: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'grey',
      },
      
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})