import React from 'react';

import {Sentry, SentryLog} from 'react-native-sentry';

if(!__DEV__) {
  Sentry.config(
    'https://e9b558133e3540469095d69293955b49:2f119cfe91da423a9c82ca704caeff6c@sentry.io/266488',
    {logLevel: SentryLog.Verbose}
  ).install();
}

import Amplify from 'aws-amplify-react-native';
import {AWS_CONFIG, initAWS} from '@constants/AWS';
initAWS();
Amplify.configure(AWS_CONFIG);

import {Provider} from 'react-redux';
import store from './store';
import Router from './router';

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

