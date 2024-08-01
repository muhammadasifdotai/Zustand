import React from "react";
import {StyleSheet,View } from "react-native";
import AppNavigation from "./src/routes/AppNavigation";


export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <AppNavigation/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})