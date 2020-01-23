import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polygon, Circle, Marker } from 'react-native-maps';
import { matrics, colors } from '../commonConfig';
import { Context as LocationContext } from '../context/LocationContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Map = ({ currentCoords }) => {  

    const { state: { currentLocation, locations } } = useContext(LocationContext);
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
            // region={{
            //     ...currentCoords,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01,
            // }}
        >

            <Circle
                center={currentLocation.coords}
                strokeWidth={1}
                radius={120}
                strokeColor="rgba(67,160,71,1.0)"
                fillColor="rgba(67,160,71, 0.2)"
            />

            <Polygon
                coordinates={
                    locations.map(location => location.coords)
                }
                //strokeColor={colors.PURPLE}
            />

            <Marker
                coordinate={currentLocation.coords}
            >
                <Icon name="person-pin-circle" size={30}/>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        height: matrics.Scale(300)
    }
});

export default Map;