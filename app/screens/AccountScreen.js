import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroudColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroudColor: colors.secondary
        }
    },
]
export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh"
          subTitle="Mosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList 
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            renderItem={({ item }) => 
                <ListItem 
                    title={item.title}
                    ImageComponent={
                        <Icon 
                            name={item.icon.name}
                            size={40}
                            backgroundColor={item.icon.backgroudColor}
                        />
                    }
                />
            }
            ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem 
        title="Log Out"
        ImageComponent={
            <Icon 
                name="logout"
                backgroundColor="#ffe66d"
                size={40}
            />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30
    },
    screen: {
        backgroundColor: colors.light
    }
})