import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

export default (props) => {
  const {
    overlayImage,
    slideText
  } = props;
  const source = overlayImage || require('../../../lib/media/gif/running-bebo.gif');

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
        <Text {/* add something to mitigate line length or watevs*/ ...props} 
          style={styles.slideText}
        >
          {slideText}
        </Text>
        
        <Button
          containerStyle={styles.skipButtonContainer}
          buttonStyle={styles.skipButton}
          iconRight={{name: 'code'}}
          title='SKIP'
        >
          <Text style={styles.skipText}> Skip </Text>
        </Button>
      </View>
    </View>
  );
}