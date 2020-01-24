import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { colors } from '../commonConfig';

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);

    return(
        <View style={{flex: 1}}>
            <NavigationEvents
                onWillFocus={() => fetchTracks()}   // fetching track list callback()
            />
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
                            badge={{ value: `${item.locations.length}`}}
                            subtitle={`Total tracks: ${item.locations.length}`}
                            bottomDivider    
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

TrackListScreen.navigationOptions = () => {
    return {
        title: 'Track List'
    }
}

const styles = StyleSheet.create({});

export default TrackListScreen;