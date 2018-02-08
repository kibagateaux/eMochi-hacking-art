import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: width
  }
});