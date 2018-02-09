import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from '@components/common/ActionButton/ActionButton';
import {Button} from 'react-native-elements';
import styles from './styles';
import {CONNECT_THIRD_PARTY_APP} from '@constants/analytics';

// default background, centered card with app name,
// which permissions and why the app will help them.
export default (props) => {
  const {
    appName,
    appLogo,
    description,
    onMainButtonPress,
    onAltButtonPress,
    navigateToLogin,
    user,
    trackUserBehaviour,
    initIntegrationAuth
  } = props;

  const renderLoggedOutText = () => (
    <View style={styles.loggedOutTextContainer}>
      <Text style={styles.loggedOutText}> 
        You must be logged in to connect apps
      </Text>
      <Text style={styles.loggedOutText}> 
        and train your avatar
      </Text>
      <ActionButton
        onPress={() => navigateToLogin(props)}
        style={styles.loginButton}
        secondaryColor
        buttonText="Login Now"
      />
    </View>
  );
  
  const onConnectPress = () => {
    initIntegrationAuth(appName);
    trackUserBehaviour(CONNECT_THIRD_PARTY_APP, {appName, description});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}> 
          <Image source={require('@media/image/logos/emochiLogo.png')} style={styles.appLogo}
            resizeMode="contain" resizeMethod="resize"/>
            <Text> {"<---------->"} </Text>
          <Image source={appLogo} style={styles.appLogo}
            resizeMode="contain" resizeMethod="resize"/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.appName}> {appName} </Text>
          <Text style={styles.description}> {description} </Text>
        </View>
      </View>
      {(!user.userId && 
        renderLoggedOutText())} 
      <View style={styles.buttonContainer}>
      {(user.userId && 
        (<Text> Make sure you have {appName} downloaded before connecting </Text> &&
        <Button
          buttonStyle={styles.actionButton}          
          containerStyle={styles.actionButton}          
          buttonText="Connect App"
          onPress={onConnectPress}
          secondaryColor
        />))}
      </View>
    </View>
  );
};


