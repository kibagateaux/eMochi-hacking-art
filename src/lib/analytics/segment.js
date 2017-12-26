import {Platform} from 'react-native';
import Analytics from 'analytics-react-native';

const SEGMENT_API_KEY = Platform.OS === 'ios' ?
  "d4WwKMyso9lgj2W5rySmsnK7hc4AQVXg" : "Y0LoetQUTndDdUUMGIIMCQrPuYCtaE1H";

export const analytics = new Analytics(SEGMENT_API_KEY);