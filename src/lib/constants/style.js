import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const font = {
  size: {
    normal: 12,
    medium: 18,
    large: 24,
  },
  weight: {
    light: '200',
    normal: '500',
    heavy: '600',
    bold: '600',
    sumo: '800'
  }
};

const colors = {
  primary: '#14b9d6',
  secondary: '#fab050',
  white: '#ffffff',
  black: '#000000'
};

export {font, colors};