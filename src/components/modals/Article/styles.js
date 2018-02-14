import {Dimensions, StyleSheet} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');

const borderRadius = width / 12
export default StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center'
  },
  background: {
    backgroundColor: 'black',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    ...StyleSheet.absoluteFillObject

  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: height / 1.5,
    width: width / 1.2,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },

  title: {
    flex: 2,
    fontSize: font.size.large,
    color: colors.white,
    textAlign: 'center',
    alignSelf: 'center'
  },
  image: {
    flex: 3,
    alignSelf: 'stretch'
  },
  button: {
    flex: 1,
    borderRadius: width / 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  linkText: {
    fontSize: font.size.medium
  },
});