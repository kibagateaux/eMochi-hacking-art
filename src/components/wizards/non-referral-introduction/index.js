import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';

import NamingScreen from './name'; // not implemented yet
import WelcomeScreen from './welcome';
import {SignupScreen} from '@screens';


// import styles from './styles';

export default (props) => {
  console.log('app intro', props);
  return (
    <Swiper
      showsButtons
      loop={false}
      autoplayTimeout={1}
    >
      <WelcomeScreen 
        overlayImage={require('../../../lib/media/gif/Panda-Blob.gif')}
        slideText={"Howdy! Say hello to your eMochi. He is your personal avatar."}

      />
      <WelcomeScreen
        overlayImage={require('../../../lib/media/gif/full-growth-timelapse.gif')}
        slideText={"Take care of it an watch it grow or else it wil start to get weak."}
      />
      <WelcomeScreen
        overlayImage={require('../../../lib/media/gif/running-bebo.gif')}
        slideText={"He grows whenever you walk, run, or eat well."}
      />
      <SignupScreen />
    </Swiper>
  )
}