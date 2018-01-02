import {Actions} from 'react-native-router-flux';
import {trackNavigation} from '@actions/analytics';

export const navigateBack = (lastRoute) => (dispatch) => {
    Actions.pop();
    if(lastRoute) {
      console.log('nav back', lastRoute );
      // dispatch(trackNavigation(route, options));
    }
  };