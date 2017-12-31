import React from 'react';
import {Provider} from 'react-redux';
import Amplify from 'aws-amplify-react-native';
import uuid from 'uuid';

import {AWS_CONFIG, initAWS} from '@constants/AWS';

import store from './store';
import Router from './router';

import {identifyUser} from '@actions/analytics';

initAWS();
Amplify.configure(AWS_CONFIG);
store.dispatch(identifyUser({anonymousId: uuid.v4()}));


export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

