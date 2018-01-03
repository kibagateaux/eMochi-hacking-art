import React from 'react';
import {Provider} from 'react-redux';
import Amplify from 'aws-amplify-react-native';
import uuid from 'uuid';
import store from './store';
import Router from './router';

import {AWS_CONFIG, initAWS} from '@constants/AWS';
initAWS();
Amplify.configure(AWS_CONFIG);


export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

