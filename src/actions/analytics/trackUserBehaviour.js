
import {analytics} from '@lib/analytics';
import {Analytics} from 'aws-amplify-react-native';
import {TRACK_USER_BEHAVIOUR} from '@actions/actionNames';

export const trackUserBehaviour = (event, properties = {}) => 
  (dispatch, getStore) => {
    const {user: {userId, anonymousId}} = getStore();
    const id = userId ? {userId} : {anonymousId};
    console.log('track user behaviour', id, event, properties);
    if(event) {
      const eventData = {...id, event, properties};
      analytics.track(eventData);
      Analytics.record(eventData.event, eventData.properties);
    }
  }