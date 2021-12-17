import React from "react";
import { Button, View, Text } from "react-native";
import NavigationButton from "./NavigationButton";
const Third = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#add8e6' }}>
      <Text></Text>
      <Button
        title="Button"
        onPress={() => navigation.navigate('Mainpage')}
      />
      <Button
        title="Button"
        onPress={() => navigation.navigate('Secondary')}
      />
      <View style={{ width: "100%", height: "100%", backgroundColor: "#add8e6" }}></View>
    </View>
  );
}
export default Third;