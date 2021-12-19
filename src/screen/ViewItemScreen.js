import React, { useState } from 'react';
import { View, StyleSheet, Text, TextComponent, Pressable, FlatList, Button } from 'react-native'
const ViewItemScreen = ({ navigation, route }) => {
    const { id, title, page, date, childcomment, teachercomment } = route.params;
    return (
        <View style={styles.namelabel}>
            <Text style={styles.textLabel}> ID: {id} </Text>
            <View style={styles.yeslabel}></View>
            <Text style={styles.textLabel}> DATE: {new Date(date).toLocaleDateString()} </Text>
            <View style={styles.yeslabel}></View>
            <Text style={styles.textLabel}> TITLE: {title} </Text>
            <View style={styles.yeslabel}></View>
            <Text style={styles.textLabel}> PAGE: {page} </Text>
            <View style={styles.yeslabel}></View>
            <Text style={styles.textLabel}> CHILDCOMMENT: {childcomment} </Text>
            <View style={styles.namelabel}></View>
            <Text style={styles.textLabel}> TEACHERCOMMENT: {teachercomment} </Text>
            <View style={styles.namelabel}></View>
            <View style={styles.label}>
                <View style={styles.listContainer}></View>
                <View style={styles.buttonContainer}></View>
                <Button style={styles.itemthere}
                    title="Edit Item"
                    color='purple'
                    onPress={(() => {
                        navigation.navigate('Edit', { id, id })
                    })}
                />
            </View>
            <View style={styles.label}></View>
        </View>
    );
};
const styles = StyleSheet.create({
    itemthere: {
        color: 'green'
    },

    label: {
        borderBottomWidth: 5,
        borderColor: 'lightblue',
        borderTopWidth: 5,
        borderRightWidth: 5,
        borderLeftWidth: 5,
        padding: 2,
        backgroundColor: 'lightblue'
    },
    textLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'navy'
    },
    yeslabel: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: 'navy'
    },

    itemthere: {
        color: 'blue',
    },
    namelabel: {
        padding: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'navy',
        flex: 1,
        flexDirection: 'column',
    },
    buttonContainer: {
        borderBottomWidth: 5,
        borderColor: 'lightblue',
        borderTopWidth: 5,
        borderRightWidth: 5,
        borderLeftWidth: 5,
        padding: 10,
        backgroundColor: 'lightblue'
    },
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