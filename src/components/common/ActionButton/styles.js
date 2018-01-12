import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
import {font} from '@constants/style';

export default StyleSheet.create({
  icon: {
    margin: width / 48
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
});
