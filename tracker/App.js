import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import { colors, matrics } from './src/commonConfig';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SplashScreen from './src/screens/SplashScreen';
import AccountScreen from './src/screens/authModule/AccountScreen';
import SigninScreen from './src/screens/authModule/SigninScreen'
import SignupScreen from './src/screens/authModule/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

const TabBarComponent = props => <BottomTabBar {...props} />;

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});
trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: ({tintColor}) => <Icon name="list" size={25} color={tintColor}/>
}

const switchNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  }, {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: matrics.Scale(-2) },
        shadowOpacity: 0.2,
        elevation: 3,
        backgroundColor: colors.WHITE
      }}/>
    ),
    tabBarOptions: {
      activeTintColor: colors.PRIMARY_COLOR,
      inactiveTintColor: colors.GRAY,
      // indicatorStyle: {
      //   backgroundColor: 'rgb(102,134,205)',
      //   height: 2
      // },
      // tabStyle: {
      //   height: 48,
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // },
      // style: {
      //   backgroundColor: colors.ORANGE,
      // },
    }
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return(
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}




