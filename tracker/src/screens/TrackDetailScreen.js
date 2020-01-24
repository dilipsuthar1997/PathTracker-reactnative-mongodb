import React, { useContext, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import { NavigationEvents } from 'react-navigation';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const[focus, setFocus] = useState(false); 

    const _id = navigation.getParam('_id');
    const track = state.find(t => t._id === _id);

    const initialCoord = track.locations[0].coords;

    const renderMapView = () => {
        return focus ?
            <MapView
                initialRegion={{
                    ...initialCoord,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                style={styles.map}
            >
                <Polyline
                    coordinates={
                        track.locations.map(loc => loc.coords)
                    }
                />
            </MapView> : <View style={{height: 300, justifyContent: 'center'}}><ActivityIndicator size="large"/></View>
    }

    return(
        <View>
            <NavigationEvents
                onDidFocus={() => setFocus(true)}
            />
            {renderMapView()}
            <Card title={track.name}/>
        </View>
    );
}

TrackDetailScreen.navigationOptions = () => {
    return {
        headerTitle: 'Track Details',
    }
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;