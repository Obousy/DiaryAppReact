import React, { useContext, useEffect, useReducer } from 'react';
import { View, StyleSheet, Text, TextComponent, FlatList, Pressable } from 'react-native'
import NavigationButton from './NavigationButton';
import { MaterialIcons } from '@expo/vector-icons'
import { actionTypes } from '../help/ActionTypes';
import Item from '../context/Item';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
const navTheme = DefaultTheme;
navTheme.colors.background = 'lightgrey';
const data = [];
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.create:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 999999),
                    title: action.payload.title,
                    page: action.payload.page,
                    date: new Date()
                }
            ]
        case actionTypes.update:
            return state.map((e) => {
                if (e.id == action.payload.id) {
                    return action.payload;
                } else {
                    return e;
                }
            });
        case actionTypes.delete:
            return state.filter((e) => e.id !== action.payload.id)
        default:
            return state;
    }
}
const ListViewScreen = ({ navigation }) => {
    const { state, remove } = useContext(Item);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => {
                    navigation.navigate('Add')
                }}>
                    <MaterialIcons name="add" size={24} color="black" />
                </Pressable>
            )
        })
    }, [state])
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(e) => e.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => {
                            navigation.navigate('View', {
                                id: item.id,
                                title: item.title,
                                page: item.page,
                                childcomment: item.childcomment,
                                teachercomment: item.teachercomment,
                                date: item.date.toUTCString()
                            });
                        }}>
                            <View style={styles.itemContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.dateText}>
                                        {item.date.toLocaleDateString()}
                                    </Text>
                                    <Text style={styles.timeText}>
                                        {item.date.toLocaleTimeString()}
                                    </Text>
                                </View>
                                <Text style={styles.titleText}>{item.title}</Text>
                                <Pressable onPress={() => {
                                    remove(item.id);
                                }}>
                                    <MaterialIcons name="delete" size={35} color="navy" />
                                </Pressable>
                            </View>
                        </Pressable>
                        /*  <Text>{e.item.title}</Text> */
                    )
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'navy'
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'navy'
    },
    timeText: {
        color: 'navy',
    },
    titleText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 1,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        color: 'navy'
    }
});
export default ListViewScreen;