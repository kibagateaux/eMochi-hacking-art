import uuid from 'uuid';
import {analytics} from '@lib/analytics';
import {IDENTIFY_ANALYTICS_USER} from '@actions/actionNames';

export const identifyUser = (userData) => {
  if(!__DEV__) {analytics.identify(userData);}
  return {
    type: IDENTIFY_ANALYTICS_USER,
    payload: userData
  };
};