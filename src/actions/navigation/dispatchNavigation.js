import {Actions} from 'react-native-router-flux';
export const dispatchNavigation = (route, options = {}) =>
  (dispatch) => {
    (Actions[route])(options);
    return {
      type: `NAVIGATE_TO_${route.toUpperCase()}`
    }
  };