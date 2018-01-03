import {Dimensions, StyleSheet} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');
const paddingVertical = height / 24
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
    height: height / 2.1,
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
    justifyContent: 'flex-start',
    paddingVertical
  },
  namingContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical,
    backgroundColor: colors.white
  },
  namingMessageContainer: {
    paddingVertical,
    paddingHorizontal: width / 24
  },
  name: {
    fontWeight: font.weight.bold
  },
  noMargin: {
    marginLeft: 0,
    marginRight: 0
  },
  welcomeText: {
    fontSize: font.size.large,
    fontWeight: font.weight.bold,
    textAlign: 'center',
    paddingVertical
  },
  slideText: {
    width: width / 1.16,
    textAlign: 'center',
    alignSelf: 'center'
  },
  primaryButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: width * (0.16 * 5),
    marginVertical: paddingVertical
  },

});