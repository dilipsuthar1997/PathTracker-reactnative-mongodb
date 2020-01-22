// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';
import {
    ADD_ERROR,
    CLEAR_ERROR_MESSAGE,
    GET_AUTH_START,
    GET_SIGNIN,
    GET_SIGNOUT,
    GET_SIGNUP
} from './Types';

const INITIAL_STATE = {
    loading: false,
    token: null,
    errorMessage: ''
};

const authReducer = (state, action) => {
    switch (action.type) {
        case GET_AUTH_START:
            return { ...state, loading: true, errorMessage: '' };
        case GET_SIGNUP || GET_SIGNIN:
            return { ...state, token: action.payload, loading: false };
        case GET_SIGNOUT:
            return INITIAL_STATE;       
        case ADD_ERROR:
            return { ...state, errorMessage: action.payload, loading: false };
        case CLEAR_ERROR_MESSAGE:
            return INITIAL_STATE;

        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
        dispatch({ type: GET_AUTH_START });

        try {
            const response = await trackerAPI.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: GET_SIGNUP, payload: response.data.token });

            navigate('TrackList');
        } catch (err) {
            dispatch({ type: ADD_ERROR, payload: 'Something went wrong with signup' });
        }
    };

const signin = (dispatch) => async ({ email, password }) => {
        dispatch({ type: GET_AUTH_START });

        try {
            const response = await trackerAPI.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: GET_SIGNIN, payload: response.data.token });

            navigate('TrackList');
        } catch (err) {
            dispatch({ type: ADD_ERROR, payload: `Something went wrong with signin, ${err.message}` });
        }
    };

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        navigate('TrackList');
        dispatch({ type: GET_SIGNIN, payload: token });
    } else {
        navigate('Signup');
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: GET_SIGNOUT });
    navigate('loginFlow');
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
};

export const { Context, Provider } = createDataContext(
    authReducer, 
    {
        signin,
        signout,
        signup,
        clearErrorMessage,
        tryLocalSignin
    }, 
    INITIAL_STATE);

