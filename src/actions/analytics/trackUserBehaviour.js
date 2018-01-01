
import {analytics} from '@lib/analytics';
import {Analytics} from 'aws-amplify-react-native';
import {isEmpty} from 'lodash';

export const trackUserBehaviour = (event, properties = {}) => 
  (dispatch, getStore) => {
    const {user: {userId, anonymousId}} = getStore();
    const id = userId ? {userId} : {anonymousId};
    if(event && !(isEmpty(id))){
      const eventData = {...id, event, properties};
      analytics.track(eventData);
      Analytics.record(eventData.event, eventData.properties);
    }
  }