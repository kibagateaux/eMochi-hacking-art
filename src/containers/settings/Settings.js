import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Settings from '@components/Settings';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {
  OAUTH
} from '@lib/constants/routes';
import userActions from '@actions/user/';

console.log('set cont', userActions);
mapStateToProps = (state) => {
  return {

  }
};

mapDispatchToProps = (dispatch) => ({
  navigateToOAuth: (options) => dispatch(navigateTo(OAUTH, options)),
  updateLocalGameMode: () => dispatch(userActions.updateLocalGameMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)