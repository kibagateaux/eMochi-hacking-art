import {UPDATE_ACTIVITIES_LIST} from '@actions/actionNames';

export const updateActivitiesList = (activitiesList) => {
  return {
    type: UPDATE_ACTIVITIES_LIST,
    payload: activitiesList
  }
}