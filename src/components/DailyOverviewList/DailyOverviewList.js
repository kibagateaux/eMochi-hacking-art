import React from 'react';
import {
  ScrollView,
  Text,
} from 'react-native'
import styles from './styles';
import DailyOverview from '../DailyOverview/DailyOverview';

export default (props) => {

  return (
    <ScrollView style={styles.container}>
      <DailyOverview />
      <DailyOverview />
      <DailyOverview />
      <DailyOverview />
    </ScrollView>
  )
}