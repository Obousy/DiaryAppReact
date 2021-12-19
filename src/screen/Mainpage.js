import React from "react";
import { StyleSheet, Button, View, Text, Image } from "react-native";
import NavigationButton from "./NavigationButton";
import { Foundation } from '@expo/vector-icons';
const Mainpage = ({ navigation }) => {
      return (
            <View style={{ backgroundColor: 'green', font: 'Arial' }}>
                  <Text style={{ fontSize: 55, fontFamily: 'Cochin', color: 'black' }}>Welcome to your Digital Diary!</Text>
                  <View style={{ width: "100%", height: "60%", backgroundColor: "yellow" }}>
                        <Image source={require('../../assets/cartoon.png')} style={{ width: 300, height: 300 }} />
                        <View style={{ fontFamily: 'Cochin', backgroundColor: 'red', height: "22%" }}>
                              <Button style={{ font: 'Arial', Color: 'Green' }}
                                    name="clipboard-notes" font-size={24} color="orange" font="arial" title="Add Notes"
                                    onPress={() => navigation.navigate('Add')}
                              />
                        </View>
                        <View style={{ textAlign: 'center', width: "100%", height: "22%", backgroundColor: "cyan" }}>
                              <Button style={{ font: 'Arial', Color: 'Green', textAlign: 'center' }}
                                    name="clipboard-notes" font-size={24} color="orange" font="arial" textAlign='center'
                                    title="View Notes"
                                    onPress={() => navigation.navigate('List')}
                              />
                        </View>
                        <Text style={{ textAlign: 'center', fontFamily: 'Cochin', fontSize: 40, width: "100%", height: "100%", backgroundColor: "green" }}> Click to where you want!</Text>
                  </View>
            </View>
      );
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
      },
});
export default Mainpage;