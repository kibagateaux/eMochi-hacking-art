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

import {summarizeActivities} from '@lib/helpers/activities';
import {colors} from '@constants/style';
import styles from './styles';


export default (props) => {
  const {
    date,
    activities,
    yesterdayResultantAvatar
  } = props;

  const dayActivities = activities ? activities.filter((act) => {
    // take act start time
    // use moment to see if it falls within date
  }, []) : [];

  const activitiesSummary = summarizeActivities(dayActivities);
  // once Activity Circle API is figured out use act summary to make colors stuff

  const formattedDate = date ?
    moment(date).format("MMM Do").split(' ') :
    ["NO", "DATE"];
  const todayResultantAvatar = null; // some calculation on dayAcivities to see how much work you did

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <ActivityCircle>
          <View style={styles.date}>
            <Text>{formattedDate[0]}</Text>
            <Text>{formattedDate[1]}</Text>
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
