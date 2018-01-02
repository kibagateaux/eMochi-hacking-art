import {
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_SEGMENT,
  SET_AVATAR_ACTIVITY,
  UPDATE_ACTIVITIES_LIST
} from '@actions/actionNames';

const INITIAL_STATE = {
  activities: {},
  activeActivity: {},
  avatarActivity: ''
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case SET_ACTIVE_ACTIVITY: {
      const activeActivity = state.activities[payload];
      return {
        ...state,
        activeActivity,
        avatarActivity: activeActivity.activity
      };
    }
    case SET_ACTIVE_SEGMENT:
      return {
        ...state,
        activeActivity: state.activities[payload]
      };
    case SET_AVATAR_ACTIVITY:
      return {...state, avatarActivity: payload}
    case UPDATE_ACTIVITIES_LIST: 
      return {...state, activities: {...state.activities, ...payload}}
    default: return state;
  }
};


