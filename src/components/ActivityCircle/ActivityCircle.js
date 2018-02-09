import React from 'react';
import {
  View,
  Text,
  ART
} from 'react-native';
import styles from './styles';

export default (props) => (
  // Create Flexible api for rending circle for different uses
  // Color and how much space they each gets should be simple
  // Int is degrees or string with %
  <View style={styles.container}>
    <View style={styles.ring}>
      {props.children} 
    </View>
  </View>
);
