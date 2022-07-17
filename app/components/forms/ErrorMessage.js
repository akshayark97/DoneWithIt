import { View, StyleSheet } from 'react-native'
import React from 'react'

import AppText from '../AppText'

export default function ErrorMessage({ error, visibility }) {
  
  if(!visibility || !error) return null

  return (
      <AppText style={styles.error}>{error}</AppText>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})