import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native'
import styles from './styles';
import ActivityCircle from '../ActivityCircle/ActivityCircle';
import {Icon} from 'react-native-elements'
import gif1 from '@media/gif/eating-apple.gif';
import gif2 from '@media/gif/tiredblob.gif';

export default (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <ActivityCircle>
          <View style={styles.date}>
            <Text>Feb</Text>
            <Text> 1 </Text>
          </View>
        </ActivityCircle>
      </View>
      <View style={styles.rightContainer}> 
        <View style={styles.avatarContainer}>
          <Image style={styles.iconGif} source={require('@media/gif/eating-apple.gif')}/>
          <Text style={{alignSelf: 'center'}}> ---> </Text>
          <Image style={styles.iconGif} source={require('@media/gif/eating-apple.gif')}/>
        </View>
        <View style={styles.summaryContainer}>
          <Icon name="person" />
          <Icon name="person" />
          <Icon name="person" />
        </View>
      </View>
    </View>
  )
}