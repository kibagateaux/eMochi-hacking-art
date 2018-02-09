import {
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_SEGMENT,
  SET_AVATAR_ACTIVITY,
  UPDATE_ACTIVITIES_LIST
} from '@actions/actionNames';
import sampleActs from '@lib/sampleActivitiesData';

const INITIAL_STATE = {
  activities: __DEV__ && sampleActs || [],
  activeActivity: {},
  avatarActivity: ''
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case SET_ACTIVE_ACTIVITY: {
      return {
        ...state,
        activeActivity: payload,
        avatarActivity: payload.activity
      };
    }
    case SET_AVATAR_ACTIVITY:
      return {...state, avatarActivity: payload}
    case UPDATE_ACTIVITIES_LIST: 
      return {...state, activities: [...payload]}; 
    default: return state;
  }
};


