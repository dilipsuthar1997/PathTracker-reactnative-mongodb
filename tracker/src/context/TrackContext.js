import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { FETCH_TRACKS } from './Types';

const INITIAL_STATE = [];

const trackReducer = (state, action) => {
    switch (action.type) {
        case FETCH_TRACKS:
            return action.payload;
        default:
            state;
    }
};

const fetchTracks = (dispatch) => async () => {
    const response = await trackerAPI.get('/tracks');
    dispatch({ type: FETCH_TRACKS, payload: response.data });
};
const createTrack = (dispatch) => async (name, locations) => {
    await trackerAPI.post('/tracks', { name, locations });
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    {
        fetchTracks,
        createTrack
    },
    INITIAL_STATE
);