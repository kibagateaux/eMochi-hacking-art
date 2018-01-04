import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  Icon,
  SocialIcon,
} from 'react-native-elements';
import {Auth} from 'aws-amplify-react-native';

import {checkPhoneNumberLength} from '@helpers/validation';
import {FACEBOOK_SIGNUP, USERNAME_SIGNUP} from '@constants/analytics'
import styles from './styles';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMFAPrompt: false,
      username: '',
      password: '',
      email: '',
      phoneNumber: '',
      errorMessage: 'Sign up with just your phone number and a password',
    };
    this.baseState = this.state;
  }
  
   validateFields = () => {
     console.log('valid', checkPhoneNumberLength);
    const {password, phoneNumber} = this.state;
    const validPassword = password.length > 7;
    const validNumber = checkPhoneNumberLength(phoneNumber);
    const numberMessage = validNumber ? '' : ' Please enter a proper US number e.g. 342-624-8971 ';
    const passwordMessage = validPassword ? '' : ' Passwords must be longer than 8 characters ';
    const errorMessage = numberMessage + passwordMessage;
    if(errorMessage.length > 0) {
      console.log('err msg', errorMessage);
      this.setState({errorMessage});
    } else {
      this.handleSignUp();
    }
  };

  signUpUser(username, password, email, number) {
    Auth.signUp(username, password, email, number)
      .then((user) => {
        this.props.trackUserBehaviour(USERNAME_SIGNUP, this.state);
        this.props.navigateToLogin({lastScreen: "Signup"});
      })
      .catch((error) => {
        this.setState({errorMessage: error.message});
      })
  }

  handleSignUp = async () => {
    this.setState({errorMessage: ''});
    const {password, phoneNumber} = this.state;
    const awsPhoneNumber = '+1' + phoneNumber;
    this.signUpUser(phoneNumber, password, null, awsPhoneNumber);
  }

  facebookLogin = () => {
    const {trackUserBehaviour} = this.props;
    trackUserBehaviour(FACEBOOK_SIGNUP, this.state)
  }

  navigateHome = () => {
    const {trackUserBehaviour, navigateToHome} = this.props;
    trackUserBehaviour("SKIP_SIGNUP_TO_HOME", this.state)
    navigateToHome();
  }

  navigateLogin = () => {
    const {trackUserBehaviour, navigateToLogin} = this.props;
    trackUserBehaviour("NAVIGATE_TO_LOGIN_FROM_SIGNUP", this.state)
    navigateToLogin();
  }

  openPrivacyPolicy() {
    Linking.openURL("https://www.malikwormsby.com/privacy-policy")
      .catch((e) => e);
  }

  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require("@media/image/goldenField.png")}
      >
        <View style={styles.formContainer}>
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
          
          <FormLabel> 
            {/* <Icon
              name="phone" 
              iconStyle={styles.labelIcon}
              containerStyle={styles.labelIcon}
            />  */}
            Phone Number
          </FormLabel>
          <FormInput
            inputStyle={styles.inputStyles}
            containerStyle={styles.inputStyles}
            keyboardType="phone-pad"
            placeholder="212-039-7463"
            returnKeyType="next"
            value={this.state.phoneNumber}
            onChangeText={phoneNumber => this.setState({phoneNumber})} />
          
          <FormLabel>
            {/* <Icon
              name="lock-open" 
              iconStyle={styles.labelIcon}
              containerStyle={styles.labelIcon}
            /> */}
            New Password
          </FormLabel>
          <FormInput
            inputStyle={styles.inputStyles}
            containerStyle={styles.inputStyles}
            placeholder="**********"
            returnKeyType="done"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          
          <View style={styles.divider}/>
          
          <Button
            containerViewStyle={styles.signupButton}
            buttonStyle={styles.signupButton}
            onPress={this.validateFields}
            title="Sign Up"
          />

          <View style={styles.divider}/>
          
          {/* <SocialIcon
            title='Sign Up With Facebook'
            button
            type='facebook'
            style={styles.facebookButton}
            onPress={this.facebookLogin}
          /> */}

          <View style={styles.divider} />
          <View style={styles.altButtonContainer}> 
            <Button
              containerViewStyle={styles.altButton}
              buttonStyle={styles.altButton}
              onPress={this.navigateLogin}
              title="Login"
            />
            <Button
              containerViewStyle={styles.altButton}
              buttonStyle={styles.altButton}
              onPress={this.navigateHome}
              title="Home"
            />
          </View>
        </View>
        <Button
          containerViewStyle={styles.privacyPolicy}
          buttonStyle={styles.privacyPolicy}
          title="Privacy Policy"
          onPress={this.openPrivacyPolicy}
        />
      </ImageBackground>
    );
  }
}
