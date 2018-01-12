import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
import {font, colors} from '@constants/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: height / 1.16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: height / 3,
    width: width,
    zIndex: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  appLogo: {
    flex: 1,
    paddingHorizontal: width / 32,
    paddingVertical: height / 64,
    width: width
  },
  textContainer: {
    paddingVertical: height / 32,
    alignItems: 'center'
  },
  appName: {
    fontSize: font.size.large,
    color: colors.black,
    fontWeight: font.weight.bold
  },
  description: {
    color: colors.black,
    fontSize: font.size.normal,
  },
  loggedOutText: {
    textAlign: 'center',
  },
  loginButton: {
    width: width / 3,
    height: height / 10,
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionButton: {
    padding: width / 20,
    alignItems: 'center'
  }
});