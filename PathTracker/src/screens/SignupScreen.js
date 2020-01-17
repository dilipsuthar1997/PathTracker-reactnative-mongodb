import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthProvider';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {

    const { state, signup } = useContext(AuthContext);

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    console.log(state);

    return(
        <View style={styles.container}>
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
                    text="Already have an account? Sign in"
                    onPress={() => navigation.navigate('Signin')}
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