import {Dimensions, StyleSheet, Platform} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');
const paddingTop = Platform.OS === "ios" ? height / 30 : 0;
const sidePadding = width / 36;

export default StyleSheet.create({
  container: {
    paddingTop,
    height: height / 12,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  navBarTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  rightIcon: {
    height: height / 20,
    width: height / 18,
  },
  leftIcon: {
    marginLeft: width / 24,
    marginTop: height / 96
  },
  routeName: {
    fontSize: font.size.medium,
    alignSelf: 'center'
  }
});