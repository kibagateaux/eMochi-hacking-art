import React from 'react';
import {Provider} from 'react-redux';
import Amplify from 'aws-amplify-react-native';

import {AWS_CONFIG, initAWS} from '@constants/AWS';

import store from './store/';
import Router from './router/';

initAWS();
Amplify.configure(AWS_CONFIG);

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

