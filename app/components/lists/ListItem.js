import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 15,
  },
  detailContainer: {
    justifyContent: 'center',
    marginLeft: 10
  },
  image: {
    borderRadius: 35,
    height: 70,
    marginRight: 10,
    width: 70,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "700",
  },
});
