import React from 'react';
import {
  ScrollView,
  Text,
} from 'react-native'
import styles from './styles';
import DailyOverview from '../DailyOverview/DailyOverview';

export default (props) => {
  const {days} = props;
  const dayOverview = days ? days.map((day) => {
    console.log('day', day);
    return <DailyOverview key={day.date} date={day.date} />
  }) : [];
  
  return (
    <ScrollView style={styles.container}>
      <DailyOverview />
      <DailyOverview />
      <DailyOverview />
      <DailyOverview />
    </ScrollView>
  )
}