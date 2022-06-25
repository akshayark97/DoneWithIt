import { View, Text, Image, StyleSheet} from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../../config/colors";

export default function Card({ image, title, subTitle }) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden"
  },
  detailContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  subTitle: {
    color: colors.secondary
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 7
  }
});
