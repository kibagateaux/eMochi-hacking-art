import {Dimensions, StyleSheet, Platform} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height / 8,
    backgroundColor: colors.orange,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  spacer: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navBarButtonContainer: {
    flex: 3,
    height: height / 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  navBarTitleContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    flex: 1,
    height: height / 12,
    width: height / 12,
    alignSelf: 'flex-end'
  },
  leftIcon: {
    flex: 1,
    zIndex: 1000, // makes sure menu/back icon is always pressable
    marginTop: height / 42,
    alignSelf: 'center'
  },
  routeName: {
    fontSize: font.size.medium,
    alignSelf: 'center',
    textAlign: 'center'
  }
});