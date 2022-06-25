import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../../config/colors";
import ListItem from "./ListItem";

export default function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
            <ListItem 
                title="Mosh Hemadani"
                subTitle="5 Listings"
                image={require("../assets/mosh.jpg")}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 40
    }
});
