import { useContext, useState } from "react"
import React from "react";
import { Button, StyleSheet, Text, View, TextInput, textLabel } from "react-native";
import Item from "../context/Item";
const AddItemScreen = ({ navigation, route }) => {
    const { create } = useContext(Item)
    const [title, setTitle] = useState("");
    const [page, setPage] = useState("");
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
            <Button
                title="Finish Note"
                onPress={() => {
                    create(title, page, () => navigation.pop());
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
});
;
export default AddItemScreen;