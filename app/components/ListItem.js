import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../../config/colors";

export default function ListItem({title, subTitle, image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Mosh Hemadani</AppText>
        <AppText style={styles.subTitle}>5 listings</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    detailContainer: {

    },
    image: {
       borderRadius: 35,
       height: 70,
       marginRight: 10,
       width: 70,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: '700',
    }
});
