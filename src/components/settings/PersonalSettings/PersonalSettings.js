// import React, {Component} from 'react';
// import {
//   View,
//   Linking
// } from 'react-native';
// import Settings from '@components/settings/';
// import styles from './styles';
// import {Moves} from '@constants/integrations';

// export default (props) => {
//   const {
//     navigateToIntegrations,
//     navigateToLogin,
//     navigateToOAuth,
//     navigateToSignUp,
//     navigateToHome,
//     initIntegrationAuth,
//     updateLocalGameMode
//   } = props;
//   const _getSettingsList = () => ([
//     // {
//     //   label: "Integrations",
//     //   onPress: () => navigateToIntegrations({})
//     // },
//     {
//       label: "Login",
//       onPress: () =>  navigateToLogin()
//     },
//     {
//       label: "SignUp",
//       onPress: () => navigateToSignUp()
//     },
//     {
//       label: "Change Game Mode",
//       onPress: () => {updateLocalGameMode();navigateToHome({type: "reset"});}
//     },
//     {
//       label: "Moves",
//       onPress: () => navigateToOAuth({
//         ...Moves,
//         onMainButtonPress: (appData) => {
//           initIntegrationAuth(appData)
//         },
//         onAltButtonPress: () => navigateToIntegrations()
//       })
//     }
//   ])
  
//   // const {fields} = props;
//   return (
//     <Settings
//       cardStyle={styles.cardStyle}
//       cards={_getSettingsList()}
//     />
//   );
// }

export default () => null;