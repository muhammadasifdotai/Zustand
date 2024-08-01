import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { storage } from "../zustand/store/mmkv";
import { useMMKVString } from "react-native-mmkv";

export default function Modal(): JSX.Element {
    // const [name, setName] = useState(storage.getString('user.displayname'));
    const [name, setName] = useMMKVString('user.displayname', storage);

    const updateName = () => {
        storage.set('user.displayname', 'Muhammad Asif')
    }

    return (
        <View style={styles.container}>
            <Text>Welcome to the App: {name}</Text>
            <Button onPress={updateName} title="Updat"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})