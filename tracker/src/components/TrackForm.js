import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer'
import { colors } from '../commonConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const TrackForm = () => {

    const {
        state: { name, isRecording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    console.log(locations.length);

    return(
        <>
            <Spacer>
                <Input
                    label="Add Name"
                    placeholder="My track"
                    value={name}
                    onChangeText={changeName}
                />
            </Spacer>
            <Spacer>
                {isRecording ? 
                <Button 
                    title="Stop" 
                    raised
                    buttonStyle={{backgroundColor: colors.RED}}
                    onPress={stopRecording}
                    icon={<Icon name="pause" size={28} color='white'/>}
                /> :
                <Button 
                    title="Start Recording" 
                    raised
                    buttonStyle={{backgroundColor: colors.GREEN}}
                    onPress={startRecording}
                    icon={<Icon name="play" size={28} color='white'/>}
                />}
            </Spacer>
        </>
    );
}

export default TrackForm;