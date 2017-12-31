import {Dimensions, StyleSheet} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: height / 2,
    width: width,    
    alignSelf: 'center'
  },
  overlayImage: {
    alignSelf: 'center',
    height: height / 3,
    width: height / 3,
    padding: 0
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  welcomeText: {
    fontSize: font.size.large,
    fontWeight: font.weight.bold,
    textAlign: 'center',
  },
  slideText: {
    width: width / 1.16,
    textAlign: 'center',
    alignSelf: 'center'
  },
  skipButtonContainer: {

  },
  skipButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: width * (0.16 * 5)
  },
  skipText: {

  },
});