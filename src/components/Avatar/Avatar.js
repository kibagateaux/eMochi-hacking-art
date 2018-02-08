import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import Video from 'react-native-video';
import ActivityCircle from '../ActivityCircle/ActivityCircle';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

// TODO get video component working
// TODO Convert all GIFs to mp4 and utilize {loop} prop
const avatarSelector = (activity) => {
  switch(activity) {
    case "running":         return {type: "gif", src:require("@media/gif/running-bebo.gif")};
    case "walking":         return {type: "gif", src:require("@media/gif/running-bebo.gif")};
    case "sleeping":        return {type: "gif", src:require("@media/gif/tiredblob.gif")};
    case "transport":       return {type: "gif", src:require("@media/gif/Panda-Blob.gif")};
    case "dancing":         return {type: "gif", src: require("@media/gif/shrinking.gif")}
    case "eating":          return {type: "gif", src: require("@media/gif/eating-apple.gif")}
    case "idle":            return {type: "gif", src: require("@media/gif/shrinking.gif")};
    default:                return {type: "gif", src:require("@media/gif/running-bebo.gif")};
  }
};

export default (props) => {
  const {
    activity,
    navigateToSettings,
    updateLocalGameMode,
    emochiName
  } = props;

  const medium = avatarSelector(activity);

  // Avatar layering Schema top -> down
  // item for activity
  // avatar  // https://github.com/react-native-community/react-native-video
  // environment


  return (
    <View style={styles.container}>
      <Text style={styles.avatarName}> {emochiName || "BoBo DeBois"} </Text>
      <ActivityCircle style={styles.activityCircle}>
        {(medium.type === "video") ?
          null
          // <Video
          //   source={medium.src}
          //   style={styles.avatar}
          // /> 
          :
          <Image
            source={medium.src}
            style={styles.avatar} 
            resizeMode="contain"
          />}
        </ActivityCircle>
    </View>
  );
}
