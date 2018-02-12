import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {MainSettings} from '@components/settings';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {
  OAUTH
} from '@lib/constants/routes';
import userActions from '@actions/user/';

mapDispatchToProps = (dispatch) => ({
  navigateTo: (route, options) => dispatch(navigateTo(route, options)),
});

export default connect(null, mapDispatchToProps)(MainSettings)