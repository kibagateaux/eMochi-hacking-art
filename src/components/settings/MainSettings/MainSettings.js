import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  HOME,
  PERSONAL_SETTINGS,
  INTEGRATIONS
} from 'constants/routes';

import styles from './styles';

export default ({navigateTo}) => {
  // render default cards or is this just or styling?
  return (
    <View style={styles.container}>
      <View style={styles.activity}>
        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.text}> Your Activity </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.connect}>
        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.text}> Connect </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settings}>
        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.text}> Settings </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}