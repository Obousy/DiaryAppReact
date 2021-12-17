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
            <Button
                title="Submit item"
                onPress={() => {
                    update(currentItem.id, title, page, currentItem.date, () => navigation.pop());
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
});
export default EditItemScreen;