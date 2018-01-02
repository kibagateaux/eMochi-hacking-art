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
  const route = props.scene.route.routeName;
  const {navigate, goBack} = props.navigation;
  const isHome = route === "home";
  const lastScene = props.scenes[props.scenes.length - 2];
  const leftIcon = !lastScene ? "menu" : "keyboard-backspace";
  
  const leftPress = (props.scenes.length <= 1) ?
  props.navigateToSettings : () => props.navigateBack()
  const rightIcon = "emochi symbol";
  console.log('navbar', props, lastScene, leftPress);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={leftPress} style={styles.leftIcon}>
        <Icon
          name={leftIcon}
          type="MaterialCommunityIcons"
        />
      </TouchableOpacity>
      <Text style={styles.routeName}> {route.toUpperCase()} </Text>
      <Image
        resizeMode="contain"
        style={styles.rightIcon}
        source={require('@media/image/logos/emochiLogo.png')}
      />
    </View>

  )
}