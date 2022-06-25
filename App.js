import React from 'react'
import { View } from 'react-native';

import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText/AppText';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from "./app/screens/WelcomScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ListingDetailsScreen />
    <ViewImageScreen />
  )
}