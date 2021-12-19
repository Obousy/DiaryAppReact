import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Camera } from 'expo-camera';
const Comp = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const getPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted")
    };
    useEffect(() => {
        getPermission();
    }, []);
    if (hasPermission === null) {
        return <Text>
            Loading..
        </Text>
    }
    if (hasPermission === false) {
        return <Text> Access Denied</Text>
    }
    let camera;
    const getPicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            navigation.navigate('Photo', { uri: photo.uri })
        }
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.subContainer}
                ref={(ref) => { camera = ref; }}>
                <Pressable style={styles.buttonStyle}
                    onPress={() => { getPicture(); }}>
                    <Text style={styles.textStyle}> What Are you Reading!</Text>
                </Pressable>
            </Camera>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        textAlign: 'center',
        alignItems: "center"
    },
    buttonStyle: {
        flex: 0.3,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 40,
        marginBottom: 15,
        color: 'darkred',
        textAlign: 'center'
    }
});
export default Comp;