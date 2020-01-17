import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const INITIAL_STATE = {
    loading: false,
    token: null,
    errorMessage: ''
};

const ADD_ERROR = 'add_error';
const AUTHENTICATION_START = 'start_authentication';
const SIGNUP = 'signup';

const authReducer = (state, action) => {
    switch (action.type) {
        case AUTHENTICATION_START:
            return { ...state, loading: true, errorMessage: '' };

        case SIGNUP:
            return { ...state, token: action.payload, loading: false };

        case ADD_ERROR:
            return { ...state, errorMessage: action.payload, loading: false };

        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
        dispatch({ type: AUTHENTICATION_START });

        try {
            const response = await trackerAPI.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: SIGNUP, payload: response.data.token });

            navigate('TrackList');
        } catch (err) {
            dispatch({ type: ADD_ERROR, payload: 'Something went wrong.' });
        }
    };

const signin = (dispatch) => ({ email, password }) => {
        // TODO: call signin API
    };

const signout = (dispatch) => () => {
        // TODO: call signout API
    };

export const { Context, Provider } = createDataContext(
    authReducer, 
    {
        signin,
        signout,
        signup
    }, 
    INITIAL_STATE);

