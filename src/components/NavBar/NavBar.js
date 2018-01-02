import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {Icon} from 'react-native-elements';
import {SETTINGS} from '@constants/routes';
import Actions from 'react-native-router-flux';
import styles from './styles';

export default (props) => {
  const lastScene = props.scenes[props.scenes.length - 2];
  const leftIcon = props.leftIcon || !lastScene ? "menu" : "keyboard-backspace";
  const leftPress = props.leftPress || (props.scenes.length <= 1) ?
  props.navigateToSettings : () => props.navigateBack()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={leftPress} style={styles.leftIcon}>
        <Icon
          name={leftIcon}
          type="MaterialCommunityIcons"
        />
      </TouchableOpacity>
      <Text style={styles.routeName}> eMochi </Text>
      <Image
        resizeMode="contain"
        style={styles.rightIcon}
        source={require('@media/image/logos/emochiLogo.png')}
      />
    </View>

  )
}