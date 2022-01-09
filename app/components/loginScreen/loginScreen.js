import Styles from './styles'

import { useState, useEffect } from 'react';
import { Image, StatusBar, Text, View, Button, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton
  } from '@react-native-google-signin/google-signin';

export default () => {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '71825131047-g77sla1hs6hl3fo3m533kf2ppes9la4v.apps.googleusercontent.com',
            offlineAccess: true,
            forceCodeForRefreshToken: true
        })
        
    }, [input])

    const singIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserInfo({userInfo})
        } catch (error) {
            if (error) return console.log(error)
        }
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.titleContainer}>
                <View style={Styles.imageContainer}>
                    <Image source={require('../../assets/icon.png')} style={Styles.image}/>
                </View>
                <Text style={Styles.title}>Notelane</Text>
            </View>
            <GoogleSigninButton size={GoogleSigninButton.Size.Wide} color={GoogleSigninButton.Color.Dark}/>
            <TouchableOpacity style={Styles.loginButton}>
                <Text style={{color: '#E54B4B'}}>
                    Log In with Google
                </Text>
            </TouchableOpacity>
        </View>
    )
}