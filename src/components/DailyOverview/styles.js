import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container:{
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  date: {
    width: width / 4,
    height: width / 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  iconGif: {
    height: height / 12,
    width: height / 12
  }
});