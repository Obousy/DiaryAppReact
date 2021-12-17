import React, { useState } from 'react';
import { View, StyleSheet, Text, TextComponent, Pressable, FlatList, Button } from 'react-native'
const ViewItemScreen = ({ navigation, route }) => {
    const { id, title, page, date, childcomment, teachercomment} = route.params;
    return (
        <View>
            <Text> ID: {id} </Text>
            <Text> TITLE: {title} </Text>
            <Text> PAGE: {page} </Text>
            <Text> CHILDCOMMENT: {childcomment} </Text>
            <Text> TEACHERCOMMENT: {teachercomment} </Text>
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
export default ViewItemScreen;