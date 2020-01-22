import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { Context as AuthContext } from '../../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../../components/Spacer';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';

const SigninScreen = () => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                btnLabel="Sign in"
                onSubmit={signin}
                loading={state.loading}
            />

            <Spacer>
                <Divider style={{backgroundColor: '#000'}}/>
            </Spacer>

            <Spacer>
                <NavLink
                    text="Don't have an account? Sign up instead"
                    routeName="Signup"
                />
            </Spacer>
        </View>
    );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;