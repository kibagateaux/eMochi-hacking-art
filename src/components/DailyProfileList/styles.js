import {Dimensions, StyleSheet} from 'react-native';
import {font} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerMessageContainer: {
    marginBottom: height / 36
  },
  headerMessageText: {
    textAlign: 'center',
    fontSize: font.size.large
  },
  centerText: {
    textAlign: 'center',
    fontWeight: font.weight.bold  
  },
  fillerBoxContainer: {
    flex: 1,
    marginTop: height / 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendItem: {
    flexDirection: 'column',
    flex: 1,
    padding: 6
  },
  legendItemIcon: {
    height: 10,
    width: 10, 
    borderRadius: 5,
    alignSelf: "center"
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});