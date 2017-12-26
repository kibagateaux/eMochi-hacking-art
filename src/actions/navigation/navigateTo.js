import {NAVIGATE_TO_} from '@actions/actionNames';
import {Actions} from 'react-native-router-flux';
import {dispatchNavigation} from '@actions/navigation';
import {trackNavigation} from '@actions/analytics';

export const navigateTo = (route, options = {}) =>
  (dispatch) => {
    dispatch(dispatchNavigation(route, options));
    dispatch(trackNavigation(route, options));
  };