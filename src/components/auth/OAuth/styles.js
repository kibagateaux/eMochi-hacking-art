import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
import {font, colors} from '@constants/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: height / 1.25,
    marginVertical: height / 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: colors.primary,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.primary
  },
  header: {
    height: height / 10,
    width: width,
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
    height: height / 6,
    width: height / 6
  },
  appName: {
    fontSize: font.size.large,
    color: colors.black,
  },
  description: {
    color: colors.black,
    fontSize: font.size.normal,
    zIndex: 3,      
  },
  loggedOutText: {
    textAlign: 'center',
  },
  loginButton: {
    width: width / 3,
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