import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/Spacer';
import { colors } from '../commonConfig';

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);

    const renderTracks = () => {
        return state.length ?
        <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
                    >
                        <ListItem
                            chevron 
                            title={item.name}
                            titleStyle={{ fontWeight: 'bold' }}
                            badge={{ value: `${item.locations.length}`}}
                            subtitle={`Total tracks: ${item.locations.length}`}
                            bottomDivider
                            //leftIcon={}
                        />
                    </TouchableOpacity>
                );
            }}
        /> : <Spacer><Text h4>You have no any tracks yet.</Text></Spacer>
    }

    return(
        <View style={{flex: 1}}>
            <StatusBar barStyle="light-content"/>
            <NavigationEvents
                onWillFocus={() => fetchTracks()}   // fetching track list callback()
            />
            {renderTracks()}
        </View>
    );
}

TrackListScreen.navigationOptions = () => {
    return {
        headerTitle: 'Tracks',
    }
}

const styles = StyleSheet.create({});

export default TrackListScreen;