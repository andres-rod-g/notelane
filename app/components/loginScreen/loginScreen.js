import { Image, StatusBar, Text, View, Button, TouchableOpacityComponent, TouchableOpacity } from 'react-native';

import Styles from './styles'

export default () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.titleContainer}>
                <View style={Styles.imageContainer}>
                    <Image source={require('../../assets/icon.png')} style={Styles.image}/>
                </View>
                <Text style={Styles.title}>Notelane</Text>
            </View>
            <TouchableOpacity style={Styles.loginButton}>
                <Text style={{color: '#E54B4B'}}>
                    Log In with Google
                </Text>
            </TouchableOpacity>
        </View>
    )
}