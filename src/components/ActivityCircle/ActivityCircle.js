import React from 'react';
import {
  View,
  Text,
  ART
} from 'react-native'
import styles from './styles';

export default (props) => {
  console.log('art', ART);
  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        {props.children} 
      </View>
    </View>
  )
}