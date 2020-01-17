import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavLink = ({ text, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontWeight: 'bold'
    }
});

export default NavLink;