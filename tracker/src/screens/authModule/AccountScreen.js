import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../../components/Spacer';
import { Context as AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../commonConfig';

const AccountScreen = () => {

    const { state: { token }, signout } = useContext(AuthContext);

    return(
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{fontSize: 48}}>Account Screen</Text>
            <Spacer>
                <Button
                    title="Sign out"
                    onPress={signout}
                />
            </Spacer>
            <Spacer>
                <Text style={{color: colors.RED}}>{`Token:\n${token}`}</Text>
            </Spacer>
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: ({tintColor}) =>  <Icon name="settings" size={20} color={tintColor}/>
}

const styles = StyleSheet.create({});

export default AccountScreen;