import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10} style={styles.backgroundImageContainer} source={require('../assets/background.jpg')}>
            <View style={styles.backgroundImageContent}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <AppText style={styles.tagline}>Sell what you don't need</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" color="primary" />
                <AppButton title="register" color="secondary" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end' // primary axis
    },
    backgroundImageContent: {
        alignItems: 'center', //secondary axis
        position: 'absolute',
        top: 70
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    loginButton: {
        backgroundColor: 'tomato',
        height: 70,
        width: '100%',
    },
    logo: {
        height: 100,
        width: 100,
    },
    registerButton: {
        backgroundColor: 'green',
        height: 70,
        width: '100%',
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 20
    }
})

export default WelcomeScreen;