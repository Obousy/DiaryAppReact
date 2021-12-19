import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainpage from './src/screen/Mainpage';
import Secondary from './src/screen/Secondary';
import Third from './src/screen/Third';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListViewScreen from './src/screen/ListViewScreen';
import ViewItemScreen from './src/screen/ViewItemScreen';
import AddItemScreen from './src/screen/AddItemScreen';
import { ItemProvider } from './src/context/Item';
import EditItemScreen from './src/screen/EditItemScreen';
import Photo from './src/screen/Photo';
import Comp from './src/screen/Comp';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Comp"
            component={Comp}
            options={{ title: "Take Photo" }}
          />
          <Stack.Screen
            name="Photo"
            component={Photo}
            options={{ title: "Take" }}
          />
          <Stack.Screen
            name="Add"
            component={AddItemScreen}
            options={{ title: "Add Notes" }}
          />
          <Stack.Screen
            name="List"
            component={ListViewScreen}
            options={{ title: "All Notes" }}
          />
          <Stack.Screen
            name="View"
            component={ViewItemScreen}
            options={{ title: "Current Notes" }}
          />
          <Stack.Screen
            name="Main"
            component={Mainpage}
            options={{ title: "Diary App" }}
          />
          <Stack.Screen
            name="Edit"
            component={EditItemScreen}
            options={{ title: "Edit Notes" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#add8e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });