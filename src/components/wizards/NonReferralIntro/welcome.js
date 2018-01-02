import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
import {NAVIGATE_NONREFERRAL_ONBOARDING_PROCESS} from '@constants/analytics';

export default (props) => {
  const {
    overlayImage,
    slideText,
    trackUserBehaviour
  } = props;
  const source = overlayImage || require('../../../lib/media/gif/running-bebo.gif');
  // trackUserBehaviour(NAVIGATE_NONREFERRAL_ONBOARDING_PROCESS, {slideText});
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../../../lib/media/image/orangeMountains.png')}
          style={styles.backgroundImage}
          resizeMode='stretch'
        />
        <Image
          source={source}
          style={styles.overlayImage}
          resizeMode='cover'
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}> Welcome </Text>
        <Text style={styles.slideText}> {slideText} </Text>
      </View>
    </View>
  );
}
{/* <Button
  raised
  title='SKIP'
  containerStyle={styles.skipButtonContainer}
  buttonStyle={styles.skipButton}
  iconRight={{name: 'code'}}
/> */}