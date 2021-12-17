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
            <Text style={styles.textLabel}>Pages Read:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Type this'
                value={page}
                onChangeText={(text) => {
                    setPage(text)
                }}
            />
           <Text style={styles.textLabel}>Child Comments:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter Comments on your Reading Experience'
                value={childcomment}
                onChangeText={(text) => {
                    setChildcomment(text)
                }}
            />
             <Text style={styles.textLabel}>Teacher Comments:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='*This Section is for your Teacher'
                value={teachercomment}
                onChangeText={(text) => {
                    setTeachercomment(text)
                }}
            />
            <Button
                title="Submit item"
                onPress={() => {
                    update(currentItem.id, title, page, childcomment, teachercomment,  currentItem.date, () => navigation.pop());
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 16,
        paddingLeft: 15,
        flex: 1,
        alignSelf: 'flex-start'
    }
});
export default EditItemScreen;