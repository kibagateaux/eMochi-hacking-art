import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  HOME,
  PERSONAL_SETTINGS,
  INTEGRATIONS,
  OAUTH
} from '@constants/routes';
import styles from './styles';

export default ({navigateTo}) => (
  <View style={styles.container}>
    <View style={styles.activity}>
      <TouchableOpacity
        onPress={() => navigateTo(HOME, {type: 'reset'})}
        style={styles.textContainer}
      >
        <Text style={styles.text}> Your Activity </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.connect}>
      <TouchableOpacity
        onPress={() => navigateTo(
          INTEGRATIONS,
          {navigateToOAuth: (options) => navigateTo(OAUTH, options)}
        )}
        style={styles.textContainer}
      >
        <Text style={styles.text}> Connect </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.settings}>
      <TouchableOpacity
        onPress={() => navigateTo(PERSONAL_SETTINGS)}
        style={styles.textContainer}
      >
        <Text style={styles.text}> Settings </Text>
      </TouchableOpacity>
    </View>
  </View>
);