import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
import {font, colors} from '@constants/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  activity: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  connect: {
    flex: 1,
    backgroundColor: colors.magenta,
  },
  settings: {
    flex: 1,
    backgroundColor: colors.teal,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: font.size.large,
    fontWeight: font.weight.bold,
    color: colors.white
  }
}); 