import React from 'react';
import {
  Scene,
  Actions
} from 'react-native-router-flux';

import App from '@containers/App';
import NavBar from '@containers/NavBar';

import {
  LoginScreen,
  SignupScreen,
  PersonalSettingsScreen,
  MainSettingsScreen,
  OAuthScreen,
  NonReferralIntro,
  IntegrationsScreen
} from '@screens';

import{
  HOME,
  LOGIN,
  SIGNUP,
  SETTINGS,
  PERSONAL_SETTINGS,
  OAUTH,
  INTEGRATIONS,
  NON_REFERRAL_INTRO
} from '@constants/routes';

export default Actions.create(
  <Scene key="app">
    <Scene initial navBar={NavBar} key={HOME} title="Home" component={App} />  
    <Scene hideNavBar key={NON_REFERRAL_INTRO} title='Welcome Introduction' component={NonReferralIntro} />
    <Scene navBar={NavBar} key={SETTINGS} title='Settings' component={MainSettingsScreen} />
    <Scene navBar={NavBar} key={PERSONAL_SETTINGS} title='Personal Settings' component={PersonalSettingsScreen} />
    <Scene navBar={NavBar} key={INTEGRATIONS} title='Integrations' component={IntegrationsScreen} />
    <Scene navBar={NavBar} key={OAUTH} title="Connect App" component={OAuthScreen} />
    <Scene hideNavBar key={LOGIN} title='Login' component={LoginScreen} />
    <Scene hideNavBar key={SIGNUP} title='Signup' component={SignupScreen} />
  </Scene>
);
 