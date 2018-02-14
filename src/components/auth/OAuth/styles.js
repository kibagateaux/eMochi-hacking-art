import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
import {font, colors} from '@constants/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: height / 1.16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogo: {
    flex: 1,
    height: height / 18,
    width: width / 2
  },
  spacer: {
    flex: 0.2
  },
  textContainer: {
    flex: 1,
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  connectText: {
    paddingHorizontal: width / 60,
    marginVertical: height / 60,
    textAlign: 'center'
  },
  connectButton: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: width / 4,
    borderRadius: width / 12,
  }
});