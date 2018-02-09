import React from 'react';
import {
  ScrollView,
  Text,
} from 'react-native'
import styles from './styles';
import DailyOverview from '@containers/DailyOverview';

export default (props) => {
  const {days} = props;
  const dayOverviews = days ? Object.keys(days).map((date) => {
    console.log('day', date);
    return <DailyOverview key={date} date={date} />
  }) : [];
  
  return (
    <ScrollView style={styles.container}>
      {dayOverviews}
    </ScrollView>
  )
}