import {SET_ACTIVE_SEGMENT} from '../actionNames';

export const setActiveSegment = ((startTime) => {
  return {
    type: SET_ACTIVE_SEGMENT,
    payload: startTime
  };
});
