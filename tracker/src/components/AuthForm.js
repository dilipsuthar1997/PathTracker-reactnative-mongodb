import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AuthForm = ({ headerText, errorMessage, onSubmit, btnLabel, loading }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
                    title={btnLabel}
                    titleStyle={{fontSize: 22}}
                    raised
                    loading={loading}
                    buttonStyle={{height: 56}}
                    icon={<Icon name='check-circle' size={28} color='white'/>}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: 18
    }
});

export default AuthForm;