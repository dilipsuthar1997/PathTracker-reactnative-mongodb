import '../_mockLocation';
import React, { useContext, useCallback, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Header } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';     // Custom hook
import TrackForm from '../components/TrackForm';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, matrics } from '../commonConfig';

const TrackCreateScreen = ({ isFocused }) => {

    const { state: { isRecording, currentLocation }, addLocation } = useContext(LocationContext);

    // useCallback -hook
    const memoizedCallback = useCallback((location) => {
        addLocation(location, isRecording)
    }, [isRecording]);

    // useLocation -custom hook
    const [err] = useLocation(isFocused || isRecording, memoizedCallback);

    return(
        <>
            <Header
                leftComponent={{}}
                centerComponent={{ text: 'Add Tracks', style: { color: '#fff', fontSize: 18 } }}
                rightComponent={{}}
                backgroundColor={colors.PRIMARY_COLOR}
            />
            <SafeAreaView forceInset={{ bottom: 'always', top: 'never' }}>
                <View>
                    <Map/>
                    <TouchableOpacity style={styles.locateMeContainer}>
                        <Icon name="my-location" size={25}/>
                    </TouchableOpacity>
                </View>
                {err ? <Text>Please enable location permission.</Text> : null}
                <TrackForm/>
            </SafeAreaView>
        </>
    );
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: ({tintColor}) => <Icon name="add-location" size={25} color={tintColor}/>
}

const styles = StyleSheet.create({
    locateMeContainer: {
        backgroundColor: colors.WHITE,
        padding: matrics.Scale(8),
        borderRadius: 8,
        shadowColor: colors.BLACK,
        shadowOffset: { width: matrics.Scale(1), height: matrics.Scale(3) },
        shadowRadius: matrics.Scale(8),
        shadowOpacity: matrics.Scale(0.3),
        elevation: matrics.Scale(3),
        position: 'absolute',
        margin: matrics.Scale(16),
        zIndex: matrics.Scale(3)
    }
});

export default withNavigationFocus(TrackCreateScreen);