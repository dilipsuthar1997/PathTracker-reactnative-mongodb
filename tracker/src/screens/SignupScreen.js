import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    console.log(state);

    return(
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                btnLabel="Sign up"
                onSubmit={({ email, password }) => signup({ email, password })}
                loading={state.loading}
            />

            <Spacer>
                <Divider style={{backgroundColor: '#000'}}/>
            </Spacer>

            <Spacer>
                <NavLink
                    text="Already have an account? Sign in instead"
                    routeName="Signin"
                />
            </Spacer>
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;