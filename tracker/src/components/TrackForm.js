import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer'
import { colors } from '../commonConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

    const {
        state: { name, isRecording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

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
            <Spacer>
                {!isRecording && locations.length > 0 ?
                <Button
                    title="Save"
                    raised
                    buttonStyle={{backgroundColor: colors.MATEBLACK}}
                    onPress={saveTrack}
                    icon={<Icon name="content-save" size={28} color='white'/>}
                /> : null}
            </Spacer>
        </>
    );
}

export default TrackForm;