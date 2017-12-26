import {Platform} from 'react-native';
import Analytics from 'analytics-react-native';

const SEGMENT_API_KEY = Platform.OS === 'ios' ?
  "NliDLm9qrv5ZXlvsAtAkeXs8o5NIHQbT" : "JydO1FucBehXnEyqcPX8pvwz8ObGl0eL";

export const analytics = new Analytics(SEGMENT_API_KEY);