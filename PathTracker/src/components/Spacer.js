import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return <View style={styles.spacer}>
        { children }
    </View>
}

const styles = StyleSheet.create({
    spacer: {
        marginTop: 7.5,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 7.5
    }
});

export default Spacer;