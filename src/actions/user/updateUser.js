import {UPDATE_USER} from '@actions/actionNames';
import {AsyncStorage} from 'react-native';
import {USER_PROFILE} from '@constants/asyncStorage';

export const updateUser = (payload = {}) => {
  AsyncStorage.getItem(USER_PROFILE).then((res = "{}") => {
    const profile = JSON.parse(res);
    const updatedProfile = {...profile,  ...payload};
    AsyncStorage.setItem(USER_PROFILE, JSON.stringify(updatedProfile));
  }).catch((error) => error);
  return ({
    type: UPDATE_USER,
    payload
  });
};
