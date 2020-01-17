import createDataContext from './createDataContext';

const INITIAL_STATE = {
    isSignedIn: false
};

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Context, Provider } = createDataContext(
    authReducer, 
    {
        signin,
        signout,
        signup
    }, 
    INITIAL_STATE);

