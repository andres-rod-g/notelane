import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -40
    },
    shadowProp: {
    },
    imageContainer: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: .2,
        shadowRadius: 5,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 8
    },
    title: {
        color: '#F7EBE8',
        fontFamily: 'Sansation',
        fontSize: 30,
    },
    loginButton: {
        borderWidth: 1,
        borderColor: '#E54B4B',
        borderRadius: 8,
        padding: 8,
        marginTop: 30
    }
})