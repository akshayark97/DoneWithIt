import React from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../../config/styles'
export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
        {icon && (
            <MaterialCommunityIcons
                style={styles.icon} 
                size={20}
                color={defaultStyles.colors.medium}
                name={icon}  
            />
        )}
        <TextInput 
         style={styles.textInput}
         {...otherProps}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        marginVertical: 10,
        padding: 15,
        width: '100%'
    },
    icon: {
        marginRight: 10,
        marginTop: 4
    },
    textInput: defaultStyles.text 
})