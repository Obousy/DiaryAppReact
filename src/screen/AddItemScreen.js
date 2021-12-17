import { useContext, useState } from "react"
import React from "react";
import { Button, StyleSheet, Text, View, TextInput, textLabel } from "react-native";
import Item from "../context/Item";
const AddItemScreen = ({ navigation, route }) => {
    const { create } = useContext(Item)
    const [title, setTitle] = useState("");
    const [page, setPage] = useState("");
    const [childcomment, setChildcomment ] = useState("");
    const [teachercomment, setTeachercomment ] = useState("");
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
            <Text style={styles.textLabel}>Pages Read:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter the Page Description'
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
                title="Finish Note"
                onPress={() => {
                    create(title, page, childcomment, teachercomment, () => navigation.pop());
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
});
;
export default AddItemScreen;