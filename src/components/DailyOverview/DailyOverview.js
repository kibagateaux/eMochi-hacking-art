import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native'
import {Icon} from 'react-native-elements'
import moment from 'moment';

import ActivityCircle from '../ActivityCircle/ActivityCircle';
import ActivityIcon from '../ActivityIcon/ActivityIcon';

import {summarizeActivityTypes} from '@lib/helpers/activities';
import {colors} from '@constants/style';
import styles from './styles';


export default (props) => {
  const {
    date,
    days,
    yesterdayResultantAvatar
  } = props;

  const dayActivities = days[date] ? days[date].activities || []: []
  
  
  console.log('props', props, dayActivities);
  const activitiesSummary = summarizeActivityTypes(dayActivities);
  // once Activity Circle API is figured out use act summary to make colors stuff
  console.log('act types', Object.keys(activitiesSummary), Object.keys(activitiesSummary).length);
  const formattedDate = Number(date) ?
    moment.unix(date / 1000).format("MMM Do").split(' ') :
    ["NO", "DATE"];
  const todayResultantAvatar = null; // some calculation on dayAcivities to see how much work you did

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <ActivityCircle>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{formattedDate[0]}</Text>
            <Text style={styles.dateText}>{formattedDate[1]}</Text>
          </View>
        </ActivityCircle>
      </View>
      <View style={styles.rightContainer}> 
        <View style={styles.avatarContainer}>
          <Image
            style={styles.iconGif}
            source={
              yesterdayResultantAvatar ||
              require('@media/gif/eating-apple.gif')
            }
          />
          <Text style={{alignSelf: 'center'}}> ---> </Text>
          <Image
            style={styles.iconGif}
            source={
              todayResultantAvatar ||
              require('@media/gif/running-bebo.gif')
            }
          />
        </View>
        <View style={styles.summaryContainer}>
          {generateIcons(activitiesSummary)}
        </View>
      </View>
    </View>
  )
}

const getActivityMetric = (activity) => {
  // currently all by time until figure out appropriate information to present user
  switch(activity) {
    case "walking": return "hr."; // depends on locale and how it is kept in db
    case "running": return "hr.";
    case "idle": return "hr.";
    case "transporting": return "hr.";
    case "cycling": return "hr.";
    case "eating": return "hr.";
    default: return "person";
  }
}

const generateIcons = (acts) => 
  Object.keys(acts).map((actType) => (
    <ActivityIcon
      activity={actType}
      count={acts[actType].duration}
      metric={getActivityMetric(actType)}
    />
  ));
