import {Dimensions, StyleSheet} from 'react-native';
import {font, colors} from '@constants/style';

const {height, width} = Dimensions.get('window');


export default StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: height / 3,
    paddingHorizontal: width / 6,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.8
  },
  close: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    flex: 1,
    paddingVertical: height / 12,
    fontSize: font.size.large,
    color: colors.white,
    textAlign: 'center',
    alignSelf: 'center'
  },
  image: {
    flex: 3,
    height: height / 3,
    width: width
  },
  linkButton: {
    flex: 1,
    height: height / 24,
    width: width,
    backgroundColor:colors.primary,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  linkText: {
    fontSize: font.size.medium
  },
});