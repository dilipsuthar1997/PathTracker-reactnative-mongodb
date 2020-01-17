import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                <Input 
                    label="Email"
                    placeholder="email@address.com"
                    autoCapitalize="none"
                    autoCorrect={false}/>
            </Spacer>
            <Spacer>
                <Input 
                    label="Password"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry/>
            </Spacer>
            <Spacer/>
            <Spacer>
                <Button 
                    title="Sign Up"
                    titleStyle={{fontSize: 22}}
                    raised
                    buttonStyle={{height: 56}}
                    icon={<Icon name='check-circle' size={28} color='white'/>}
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