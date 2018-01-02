import {Dimensions, StyleSheet, Platform} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');
const paddingTop = Platform.OS === "ios" ? height / 30 : 0;

export default StyleSheet.create({
  container: {
    paddingTop,
    height: height / 12,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    // alignItems: 'stretch'
    justifyContent: 'space-between'
  },
  rightIcon: {
    height: height / 20,
    width: height / 18,
    alignSelf: 'flex-end'
  },
  leftIcon: {
    alignSelf: 'flex-start',
    marginLeft: width / 24,
    marginTop: height / 96
  },
  routeName: {
    fontSize: font.size.medium,
    alignSelf: 'center'
    // fontWeight: font.weight.heavy
  }
});