import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {PersonalSettings} from '@components/settings';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {initIntegrationAuth} from '@actions/auth';
import {updateLocalGameMode} from '@actions/user';

import {
  OAUTH,
  LOGIN,
  SIGNUP,
  SETTINGS,
  HOME
} from '@lib/constants/routes';

mapStateToProps = (state) => {
  return {

  }
};

mapDispatchToProps = (dispatch) => ({
  navigateToOAuth: (options) => dispatch(navigateTo(OAUTH, options)),
  navigateToLogin: (options) => dispatch(navigateTo(LOGIN, options)),
  navigateToSignUp: (options) => dispatch(navigateTo(SIGNUP, options)),
  navigateToHome: (options) => dispatch(navigateTo(HOME, options)),
  navigateToIntegratons: (options) => dispatch(navigateTo(SETTINGS, options)),
  initIntegrationAuth: (serviceName) => dispatch(initIntegrationAuth(serviceName)),
  updateLocalGameMode: () => dispatch(updateLocalGameMode())

  
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalSettings)