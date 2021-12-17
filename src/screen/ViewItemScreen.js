import React, { useState } from 'react';
import { View, StyleSheet, Text, TextComponent, Pressable, FlatList, Button } from 'react-native'
const ViewItemScreen = ({ navigation, route }) => {
    const { id, title, page, date} = route.params;
    return (
        <View>
            <Text> ID: {id} </Text>
            <Text> TITLE: {title} </Text>
            <Text> PAGE: {page} </Text>
            <Text> DATE: {new Date(date).toLocaleDateString()} </Text> 
            <Button
                title="Edit Item" onPress={(() => {
                    navigation.navigate('Edit', { id, id })
                })}
            />
        </View>
    );
};
const styles = StyleSheet.create({
});
export default ViewItemScreen;