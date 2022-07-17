import React, { useState } from "react";
import { Switch, TextInput, View } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";

import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ListItem from "./app/components/lists/ListItem";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomScreen";

export default function App() {
  return <ListingEditScreen />
}
