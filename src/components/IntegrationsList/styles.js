import {Dimensions, StyleSheet} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  sectionListContainer: {
    justifyContent: 'flex-start',
  },
  sectionHeaderContainer: {
    height: height / 36,
    width: width,
    shadowColor: colors.black,
    shadowOffset: {height: 5},
    shadowOpacity: 0.2,
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  sectionHeaderText: {
    fontSize: font.normal,
    fontWeight: font.bold
  },
  sectionItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: width / 48,
    height: height / 6,
    width: height / 6
  },
  sectionItemLogo: {
    flex: 3
  },
  sectionItemLabel: {
    flex: 1
  }
});