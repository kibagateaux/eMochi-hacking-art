import {Dimensions, StyleSheet} from 'react-native';
import {font} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container:{
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height / 32,
    paddingHorizontal: width / 32
  },
  dateContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: width / 4,
    height: width / 4,
    alignItems: 'center',
    alignSelf: 'center',
  },
  dateText: {
    fontSize: font.size.medium,
    fontWeight: font.weight.bold
  },
  rightContainer: {
    flex: 3,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: width / 32
  },

  avatarContainer:{
    alignSelf: 'flex-start',    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconGif: {
    height: height / 6,
    width: height / 6
  },

  summaryContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
});