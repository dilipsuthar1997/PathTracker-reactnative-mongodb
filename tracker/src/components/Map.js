import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polygon, Circle } from 'react-native-maps';
import { matrics } from '../commonConfig';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {  

    const { state: { currentLocation } } = useContext(LocationContext);
    //console.log(state);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{
            height: 300, 
            justifyContent: 'center',
            alignItems: 'center'
        }}/>
    }

    return(
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle
                center={currentLocation.coords}
                strokeWidth={0.5}
                radius={80}
                strokeColor="rgba(67,160,71,1.0)"
                fillColor="rgba(67,160,71, 0.2)"
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        height: matrics.Scale(300)
    }
});

export default Map;