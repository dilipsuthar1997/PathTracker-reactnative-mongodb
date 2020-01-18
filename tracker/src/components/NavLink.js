import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { navigate } from '../navigationRef';

const NavLink = ({ text, routeName }) => {
    return(
        <TouchableOpacity onPress={() => navigate(routeName)}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 18,
        fontWeight: '500'
    }
});

export default NavLink;