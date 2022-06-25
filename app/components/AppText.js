import { Platform, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import React, { Component } from "react";

export default function AppText({children, style}) {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
})