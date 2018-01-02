import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';

import NamingScreen from './name';
import WelcomeScreen from './welcome';
import {SignupScreen} from '@screens';
import {NAVIGATE_NONREFERRAL_ONBOARDING_PROCESS} from '@constants/analytics';


// import styles from './styles';

export default (props) => {
  return (
    <Swiper
      showsButtons
      loop={false}
      autoplayTimeout={1}
      onIndexChanged={(i,e) => props.trackUserBehaviour(NAVIGATE_NONREFERRAL_ONBOARDING_PROCESS, {slide: i, completion: `${((i+1)/5)*100}%`)}
    >
      <WelcomeScreen 
        overlayImage={require('../../../lib/media/gif/Panda-Blob.gif')}
        slideText={"Howdy! Say hello to your eMochi. He is your personal avatar."}
        trackUserBehaviour={props.trackUserBehaviour}
      />
      <WelcomeScreen
        overlayImage={require('../../../lib/media/gif/full-growth-timelapse.gif')}
        slideText={"Take care of it an watch it grow or else it wil start to get weak."}
        trackUserBehaviour={props.trackUserBehaviour}
      />
      <WelcomeScreen
        overlayImage={require('../../../lib/media/gif/running-bebo.gif')}
        slideText={"He grows whenever you walk, run, or eat well."}
        trackUserBehaviour={props.trackUserBehaviour}
      />
      <NamingScreen
        overlayImage={require('../../../lib/media/gif/Panda-Blob.gif')}
        updateUser={props.updateUser}
        trackUserBehaviour={props.trackUserBehaviour}
      />
      <SignupScreen />
    </Swiper>
  )
}