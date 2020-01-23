import createDataContext from './createDataContext';
import {
    ADD_CURRENT_LOCATION,
    ADD_LOCATION,
    START_RECORDING,
    STOP_RECORDING,
    CHANGE_NAME
} from './Types';

const INITIAL_STATE = {
    name: '',
    isRecording: false,
    locations: [],
    currentLocation: null
};

const locationReducer = (state, action) => {
    switch (action.type) {
        case ADD_CURRENT_LOCATION:
            return { ...state, currentLocation: action.payload };
        case START_RECORDING:
            return { ...state, isRecording: true };
        case STOP_RECORDING:
            return { ...state, isRecording: false };
        case ADD_LOCATION:
            return { ...state, locations: [...state.locations, action.payload] };
        case CHANGE_NAME:
            return { ...state, name: action.payload };

        default:
            return state;
    }
}

const startRecording = (dispatch) => () => {
    dispatch({ type: START_RECORDING });
};
const stopRecording = (dispatch) => () => {
    dispatch({ type: STOP_RECORDING });
};
const addLocation = (dispatch) => (location, isRecording) => {
    dispatch({ type: ADD_CURRENT_LOCATION, payload: location });
    if (isRecording) {
        dispatch({ type: ADD_LOCATION, payload: location });
    }
};
const changeName = (dispatch) => (name) => {
    dispatch({ type: CHANGE_NAME, payload: name })
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    {
        startRecording,
        stopRecording,
        addLocation,
        changeName
    },
    INITIAL_STATE
);