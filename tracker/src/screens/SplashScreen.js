import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { images, matrics, colors } from '../commonConfig';

const SplashScreen = () => {

    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            tryLocalSignin();
        }, 2000);
    }, []);

    return(
        <View style={styles.container}>
            {/* <StatusBar barStyle="light-content"/> */}
            <Image style={styles.icon} source={images.APPLOGO}/>
            <Text style={styles.title}>Tracker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY_COLOR,
        flex: matrics.Scale(1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: matrics.Scale(120),
        width: matrics.Scale(120),
        tintColor: '#FFF'
    },  
    title: {
        marginTop: matrics.Scale(8),
        color: '#FFF',
        fontSize: matrics.Scale(36),
        fontWeight: '500'
    }
});

export default SplashScreen;