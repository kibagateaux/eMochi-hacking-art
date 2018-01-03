
import {analytics} from '@lib/analytics';
import {Analytics} from 'aws-amplify-react-native';
import {isEmpty} from 'lodash';
import uuid from 'uuid';

export const trackUserBehaviour = (event, properties = {}) => 
  (dispatch, getStore) => {
    if(!__DEV__) {
      const {user: {userId, anonymousId}} = getStore();
      const id = (!userId && !anonymousId) ?
      {anonymousId: uuid.v4()} : userId ? {userId} : {anonymousId};
      if(event && !(isEmpty(id))){
        const eventData = {...id, event, properties};
        analytics.track(eventData);
        Analytics.record(eventData.event, eventData.properties);
      }
    }
  }