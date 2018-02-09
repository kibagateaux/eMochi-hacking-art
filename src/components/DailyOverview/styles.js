import {Dimensions, StyleSheet} from 'react-native';
import {font} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container:{
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height / 32
  },
  rightContainer: {
    flex: 3,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: width / 32
  },
  summaryContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  avatarContainer:{
    alignSelf: 'flex-start',    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateContainer:{
    flex: 1,
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    padding: width / 48
  },
  dateContainer: {
    width: width / 4,
    height: width / 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  dateText: {
    fontSize: font.size.medium,
    fontWeight: font.weight.bold
  },
  iconGif: {
    height: height / 6,
    width: height / 6
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});