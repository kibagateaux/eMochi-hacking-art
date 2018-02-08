import {StyleSheet, Dimensions} from 'react-native';
import {font} from '@constants/style';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center'
  },
  activityCircle: {
    flex: 1,
    width: width
  },
  avatar: {
    width: height / 3,
    height: height / 3,
    alignSelf: "center"
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    height: height / 30,
    width: height / 30,
  },
  avatarName: {
    fontSize: font.size.large,
    alignSelf: "center",
    textAlign: "center"
  }
});
