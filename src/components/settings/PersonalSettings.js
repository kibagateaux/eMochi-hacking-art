import React, {Component} from 'react';
import {
  View,
  Linking
} from 'react-native';
import Settings from '@components/settings/';
import styles from './styles';
import {integrationServices} from '@constants/integrations';

export default (props) => {
  const {
    navigateToIntegrations,
    navigateToLogin,
    navigateToOAuth,
    navigateToSignUp,
    navigateToHome,
    initIntegrationAuth,
    updateLocalGameMode
  } = props;
  console.log('setting tog lcl mode', updateLocalGameMode);
  const _getSettingsList = () => ([
    // {
    //   label: "Integrations",
    //   onPress: () => navigateToIntegrations({})
    // },
    {
      label: "Login",
      onPress: () =>  navigateToLogin()
    },
    {
      label: "SignUp",
      onPress: () => navigateToSignUp()
    },
    {
      label: "Change Game Mode",
      onPress: () => {updateLocalGameMode();navigateToHome({type: "reset"});}
    },
    {
      label: "Moves",
      onPress: () => navigateToOAuth({
        appName:"Moves",
        appLogo: require("@media/image/logos/moves-app-logo.png"),
        description: "A beautifulyl designed activity monitoring app.",
        onMainButtonPress: () => {
          initIntegrationAuth(integrationServices.Moves)
        },
        onAltButtonPress: () => navigateToIntegrations()
      })
    }
  ])
  
  // const {fields} = props;
  return (
    <Settings
      cardStyle={styles.cardStyle}
      cards={_getSettingsList()}
    />
  );
}