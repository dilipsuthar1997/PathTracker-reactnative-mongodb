import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const SplashScreen = () => {

    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            tryLocalSignin();
        }, 2000);
    }, []);

    return(
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../res/ic_tracker.png')}/>
            <Text style={styles.title}>Tracker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 120,
        width: 120,
        tintColor: '#FFF'
    },  
    title: {
        marginTop: 8,
        color: '#FFF',
        fontSize: 36,
        fontWeight: '500'
    }
});

export default SplashScreen;