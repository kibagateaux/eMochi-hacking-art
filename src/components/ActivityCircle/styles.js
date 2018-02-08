import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  ring: {
    borderColor: "teal",
    borderRadius: height / 4, // how to make this responsive?
    borderWidth: 3
  }
});