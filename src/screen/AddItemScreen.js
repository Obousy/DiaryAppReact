import { useContext, useState } from "react"
import React from "react";
import { Button, StyleSheet, Text, View, TextInput, textLabel } from "react-native";
import Item from "../context/Item";
const AddItemScreen = ({ navigation, route }) => {
    const { create } = useContext(Item)
    const [title, setTitle] = useState("");
    const [page, setPage] = useState("");
    const [childcomment, setChildcomment] = useState("");
    const [teachercomment, setTeachercomment] = useState("");
    return (
        <View>
            <Text style={styles.textLabel}>Book Name:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter the Book Name'
                value={title}
                onChangeText={(text) => {
                    setTitle(text)
                }}
            />
            <View style={styles.itemContainer}></View>
            <Text style={styles.textLabel}>Pages Read:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter the Page Description'
                value={page}
                onChangeText={(text) => {
                    setPage(text)
                }}
            />
            <View style={styles.itemContainer}></View>
            <Text style={styles.textLabel}>Child Comments:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter Comments on your Reading Experience'
                value={childcomment}
                onChangeText={(text) => {
                    setChildcomment(text)
                }}
            />
            <View style={styles.viewContainer}></View>
            <Text style={styles.textLabel}>Teacher Comments:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='*This Section is for your Teacher'
                value={teachercomment}
                onChangeText={(text) => {
                    setTeachercomment(text)
                }}
            />
            <View style={styles.listContainer}></View>
            <View style={styles.buttonContainer}>
                <Button style={styles.listButton}
                    title="Add Note"
                    fontSize={30}
                    color="purple"
                    style={styles.buttonStyle}
                    onPress={() => {
                        create(title, page, childcomment, teachercomment, () => navigation.pop());
                    }}
                />
            </View>
            <View style={styles.button2char}>
            <Button
                title="Picture Your Progress"
                color="purple"
                onPress={() => navigation.navigate('Comp')}
            ></Button>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    buttonContainer: {
        borderBottomWidth: 5,
        borderColor: 'lightblue',
        borderTopWidth: 5,
        borderRightWidth: 5,
        borderLeftWidth: 5,
        padding: 30,
        backgroundColor: 'lightblue'
    },
    button2char: {
        borderColor: 'navy',
        borderTopWidth: 2,
        padding: 85,
        backgroundColor: 'gold'
    },
    buttonStyle: {
        color: 'blue',
    },
    listButton: {
        borderBottomWidth: 2,
        backgroundColor: 'black',
        fontWeight: 'bold',
        color: 'red'
    },
    textLabel: {
        color: 'navy',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemContainer: {
        padding: 15,
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'navy'
    },
    listContainer: {
        padding: 35,
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'navy'
    },
    viewContainer: {
        padding: 30,
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'navy'
    }
});
;
export default AddItemScreen;