import createDataContext from './createDataContext';

const INITIAL_STATE = [];

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            state;
    }
};

const fetchTracks = (dispatch) => () => {};
const saveTrack = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
    trackReducer,
    {
        fetchTracks,
        saveTrack
    },
    INITIAL_STATE
);