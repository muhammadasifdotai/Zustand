import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { storage } from "../zustand/store/mmkv";
import { useMMKVString } from "react-native-mmkv";
import { SVG } from "../assets";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../routes/types";

export default function Modal(): JSX.Element {
    // const [name, setName] = useState(storage.getString('user.displayname'));
    const [name, setName] = useMMKVString('user.displayname', storage);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const updateName = () => {
        storage.set('user.displayname', 'Muhammad Asif')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.svg} onPress={() => navigation.navigate('TabOneScreen')}>
                <SVG.BackArrow/>
            </TouchableOpacity>
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
    },
    svg: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
})