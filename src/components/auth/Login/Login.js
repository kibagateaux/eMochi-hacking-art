import React, {PureComponent} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  Image
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  Icon,
} from 'react-native-elements';

import {Auth} from 'aws-amplify-react-native';
import {checkPhoneNumberLength} from '@helpers/validation';
import {USER_LOGIN} from '@constants/analytics';
import styles from './styles';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showActivityIndicator: false,
      phoneNumber: '',
      password: '',
      showMFAPrompt: false,
      errorMessage: '',
    };
    this.baseState = this.state;
  }

  doLogin(phoneNumber, password) {
    Auth.signIn(phoneNumber, password)
      .then(async ({username, authenticationFlowType, pool}) => {
        this.setState({showActivityIndicator: false})
        const {
          signInUser,
          nextScreen,
          nextScreenProps,
          navigateToHome,
          aliasAnonToUser,
          anonymousId,
          trackUserBehaviour
        } = this.props;
        signInUser({username});
        aliasAnonToUser(anonymousId, username);
        trackUserBehaviour(USER_LOGIN, {
          username,
          authenticationFlowType,
          pool,
          ...this.state
        });
        nextScreen ? nextScreen(nextScreenProps) : navigateToHome();
      })
      .catch((error) => {
        console.log('error on signin', error);
        this.setState({errorMessage: "Invalid login - " + error});
        this.setState({showActivityIndicator: false});
      })
  };

  handleLogInClick = (e) => {
    const {phoneNumber, password} = this.state;    
    this.setState({...this.baseState, showActivityIndicator: true});
    this.doLogin(phoneNumber, password);
  }

  navigateHome = () => {
    const {trackUserBehaviour, navigateToHome} = this.props;
    trackUserBehaviour("SKIP_LOGIN_TO_HOME", this.state)
    navigateToHome();
  }

  navigateSignup = () => {
    console.log('nav sign', this.props);
    const {trackUserBehaviour, navigateToSignup} = this.props;
    trackUserBehaviour("NAVIGATE_TO_SIGNUP_FROM_LOGIN", this.state)
    navigateToSignup();
  }

  render() {
    const {
      showActivityIndicator,
      errorMessage,
      showMFAPrompt,
      phoneNumber,
      password
    } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          visible={showActivityIndicator}
          onRequestClose={() => null}
        >
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
          />
        </Modal>
        <Image 
          style={styles.heroImage}
          source={require('@media/image/orangeMountains.png')}
          resizeMode="stretch"
        />
        <View style={styles.formContainer}>
          <Text style={styles.validationText}> {errorMessage} </Text>
          <FormLabel> {/* Icons throw error on Android*/} 
            {/* <Icon
              name="phone" 
              iconStyle={styles.labelIcon}
              containerStyle={styles.labelIcon}
            />  */}
            Phone Number
          </FormLabel>
          <FormInput
            inputStyle={styles.inputStyles}
            selectionColor={styles.signInButton.backgroundColor}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            placeholder="212-836-0297"
            returnKeyType="next"
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            value={phoneNumber}
          />
          <FormLabel>
            {/* <Icon
              name="lock-open" 
              iconStyle={styles.labelIcon}
              containerStyle={styles.labelIcon}
            />  */}
            Password
          </FormLabel>
          <FormInput
            inputStyle={styles.inputStyles}
            selectionColor={styles.signInButton.backgroundColor}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            placeholder="Password"
            returnKeyType="next"
            onChangeText={(password) => this.setState({password})}            
            value={password}
          />
          
          <Button
            raised
            containerViewStyle={styles.signInButton}
            buttonStyle={styles.signInButton}
            onPress={this.handleLogInClick}
            title="SIGN IN"
          />
          
          <View style={styles.altActionsContainer}>
            <Button
              raised
              buttonStyle={styles.altButton}
              containerViewStyle={styles.altButton}
              onPress={this.navigateHome}
              title="Forgot Password"
            />
            <Button
              raised
              buttonStyle={styles.altButton}
              containerViewStyle={styles.altButton}
              onPress={this.navigateSignup}
              title="Signup"
            />
            <Button
              raised
              buttonStyle={styles.altButton}
              containerViewStyle={styles.altButton}
              onPress={this.navigateHome}
              title="Skip Login"
            />
          </View>
        </View>
      </View>
    );
  }
}