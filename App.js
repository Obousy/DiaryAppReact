import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
const Stack = createNativeStackNavigator();
/*
function Mainpage() {
  return
  <View style={{flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
    <Text>Main Screen</Text>
  </View>
}
const Tab = createBottomTabNavigator(); 
*/
export default function App() {
  return (
    <ItemProvider>
      <NavigationContainer>
        {/*
      <Text style = 'center'></Text>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Mainpage} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="home" color={color} size={size}/>
          ), 
        }}
        />
        <Tab.Screen name="Notes" component={Secondary} 
        options={{        
          tabBarIcon: ({color, size}) => (
            <Icons name="note" color={color} size={size}/>
          ), 
        }}
        />
        <Tab.Screen name="Comments" component={Third} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Icons name="graph" color={color} size={size}/>    
          ), 
        }} 
        />    
        </Tab.Navigator>
        </NavigationContainer>      
    }*/
        }
        <Stack.Navigator initialRouteName="Main">
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
          <Stack.Screen
            name="Secondary"
            component={Secondary}
            options={{ title: "Reviews and Comments" }}
          />
          {/*
        <Stack.Screen
        name ="Third"
        component={Third}
        options={{ title: "Third Screen"}}
        /> */}
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