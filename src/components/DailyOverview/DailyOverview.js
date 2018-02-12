import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native'
import {Icon} from 'react-native-elements'
import {unix, duration} from 'moment';
import {mapValues, isObject} from 'lodash';

import ActivityCircle from '../ActivityCircle/ActivityCircle';
import ActivityIcon from '../ActivityIcon/ActivityIcon';

import {summarizeActivityTypes} from '@lib/helpers/activities';
import {colors} from '@constants/style';
import styles from './styles';


export default (props) => {
  const {
    date,
    days,
    activities,
    yesterdayResultantAvatar
  } = props;

  // if passed specific activities to render else use all activities from day
  const dayActivities = activities || days[date] ? days[date].activities : [];
  const activitiesSummary = summarizeActivityTypes(dayActivities);
  // once Activity Circle API is figured out use act summary to make colors stuff
  const formattedDate = Number(date) ?
    unix(date / 1000).format("MMM Do").split(' ') :
    ["NO", "DATE"];
  const todayResultantAvatar = null; // some calculation on dayAcivities to see how much work you did
  const minuteVals = mapValues(activitiesSummary, (value) =>
    isObject(value) ?
      mapValues(value, (times) =>
        Number(times) ? duration(times).minutes() : 0) :
        Number(value) ? duration(value).minutes() : 0); // what is defult?

  console.log('act types', activitiesSummary, minuteVals);

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
          {generateIcons(minuteVals)}
        </View>
      </View>
    </View>
  )
}

const getActivityMetric = (activity) => {
  // currently all by time until figure out appropriate information to present user
  switch(activity) {
    case "walking": return "min"; // depends on locale and how it is kept in db
    case "running": return "min";
    case "idle": return "min";
    case "transport": return "min";
    case "cycling": return "min";
    case "eating": return "min";
    default: return "person";
  }
};

const generateIcons = (acts) => 
  Object.keys(acts).map((actType) => (
    <ActivityIcon
      key={actType}
      style={styles.activityIcon}
      activity={actType}
      count={acts[actType].totalDuration}
      metric={getActivityMetric(actType)}
    />
  ));
