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
      .then(async ({username, authenticationFlowType}) => {
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
          ...this.state,
          authenticationFlowType,
        });
        nextScreen ? nextScreen(nextScreenProps) : navigateToHome();
      })
      .catch((error) => {
        this.setState({errorMessage: "Invalid login. Please try again, we believe in you!"});
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
            keyboardType="phone-pad"
            placeholder="555-555-5555"
            returnKeyType="next"
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            value={phoneNumber}
          />
          <FormLabel>
            {/* Platform === ios && <Icon
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
            // inlineImageLeft for android https://facebook.github.io/react-native/docs/textinput.html#inlineimageleft
            onChangeText={(password) => this.setState({password})}            
            value={password}
          />
          
          <Button
            raised
            containerViewStyle={styles.signInButton}
            buttonStyle={styles.signInButton}
            onPress={this.handleLogInClick}
            title="LOGIN"
          />
          
          <View style={styles.altActionsContainer}>
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