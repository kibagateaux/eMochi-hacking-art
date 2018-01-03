import {analytics} from '@lib/analytics';
import {Analyics} from 'aws-amplify-react-native';
import {isEmpty} from 'lodash';

export const trackNavigation = (name, properties) => 
  (dispatch, getStore) => {
    if(!__DEV__) {
      const {user: {userId, anonymousId}} = getStore();
      const id = userId ? {userId} : {anonymousId};
      if(name && !isEmpty((id))) {
        const eventData = {...id, name, properties};
        analytics.screen(eventData);
        Analytics.record(eventData.name, eventData.properties);
      }
    }
  }