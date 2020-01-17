import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {

    const { state, signup } = useContext(AuthContext);
    const { loading, errorMessage } = state;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(state);

    return(
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                <Input 
                    label="Email"
                    placeholder="email@address.com"
                    value={email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setEmail}/>
            </Spacer>
            <Spacer>
                <Input 
                    label="Password"
                    placeholder="Password"
                    value={password}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={setPassword}/>
            </Spacer>
            <Spacer>
                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            </Spacer>
            <Spacer>
                <Button 
                    title="Sign Up"
                    titleStyle={{fontSize: 22}}
                    raised
                    loading={loading}
                    buttonStyle={{height: 56}}
                    icon={<Icon name='check-circle' size={28} color='white'/>}
                    onPress={() => signup({ email, password })}
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
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: 18
    }
});

export default SignupScreen;