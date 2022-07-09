import React, { useState } from "react";
import { Switch, TextInput, View } from "react-native";
import AccountScreen from "./app/components/AccountScreen";

import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import ListingScreen from "./app/components/ListingScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/components/MessagesScreen";
import Screen from "./app/components/Screen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomScreen";

const categories = [
  {
      label: "Furniture",
      value: 1
  },
  {
      label: "Clothing",
      value: 2
  },
  {
      label: "Camera",
      value: 3
  }
]

export default function App() {

  const [category, setCategory] = useState(categories[0])

  return (
      <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={text => setCategory(text)}
          icon="apps" 
          placeholder="Category"
          items={categories}
        />
        <AppTextInput 
          icon="email" 
          placeholder="Email" 
        />
      </Screen>
  );
}
