import { useContext, useState } from "react"
import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import Item from "../context/Item";
const EditItemScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const { state, update } = useContext(Item)
    const currentItem = state.find((e) => e.id === id);
    const [title, setTitle] = useState(currentItem.title);
    const [page, setPage] = useState(currentItem.page);
    const [childcomment, setChildcomment] = useState(currentItem.childcomment);
    const [teachercomment, setTeachercomment] = useState(currentItem.teachercomment);
    return (
        <View>
            <Text style={styles.textLabel}>Enter name:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Type this'
                value={title}
                onChangeText={(text) => {
                    setTitle(text)
                }}
            />
            <View style={styles.bordername}></View>
            <Text style={styles.textLabel}>Pages Read:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Type this'
                value={page}
                onChangeText={(text) => {
                    setPage(text)
                }}
            />
            <View style={styles.bordername}></View>
            <Text style={styles.textLabel}>Child Comments:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter Comments on your Reading Experience'
                value={childcomment}
                onChangeText={(text) => {
                    setChildcomment(text)
                }}
            />
            <View style={styles.borderland}></View>
            <Text style={styles.textLabel}>Teacher Comments:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='*This Section is for your Teacher'
                value={teachercomment}
                onChangeText={(text) => {
                    setTeachercomment(text)
                }}
            />
            <View style={styles.borderland}></View>
            <View style={styles.buttoncolor}>
                <Button
                    title="Submit item"
                    color='purple'
                    onPress={() => {
                        update(currentItem.id, title, page, childcomment, teachercomment, currentItem.date, () => navigation.pop());
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    textInput: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'navy'
    },
    textLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'navy'
    },
    bordername: {
        padding: 15,
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'navy'
    },
    borderland: {
        padding: 35,
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'navy'
    },
    buttoncolor: {
        borderBottomWidth: 5,
        borderColor: 'lightblue',
        borderTopWidth: 5,
        borderRightWidth: 5,
        borderLeftWidth: 5,
        padding: 30,
        backgroundColor: 'lightblue'
    }
});
export default EditItemScreen;