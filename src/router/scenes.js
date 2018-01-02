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
  OAuthScreen,
  NonReferralIntro
} from '@screens';

import{
  HOME,
  LOGIN,
  SIGNUP,
  SETTINGS,
  OAUTH,
  INTEGRATIONS,
  NON_REFERRAL_INTRO
} from '@constants/routes';

export default Actions.create(
  <Scene key="app">
    <Scene navBar={NavBar} key={HOME} title="Home" initial component={App} />  
    <Scene hideNavBar key={NON_REFERRAL_INTRO} title='Welcome Introduction' component={NonReferralIntro} />
    <Scene navBar={NavBar} key={SETTINGS} title='Settings Screen' component={PersonalSettingsScreen} />
    <Scene navBar={NavBar} key={INTEGRATIONS} title='Integrations Screen' component={PersonalSettingsScreen} />
    <Scene navBar={NavBar} key={OAUTH} title="Portal for integrating other apps" component={OAuthScreen} />
    <Scene hideNavBar key={LOGIN} title='Login Screen' component={LoginScreen} />
    <Scene hideNavBar key={SIGNUP} title='Signup Screen' component={SignupScreen} />
  </Scene>
);
 