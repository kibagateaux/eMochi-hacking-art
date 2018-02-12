import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricContainer: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
});