import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  Icon,
} from 'react-native-elements';

import styles from './styles';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: true
    };
  }

  onChangeText = (emochiName, e) => {
    this.setState({emochiName})
  }

  onButtonPress = () => {
    const {emochiName, nameInput} = this.state
    this.props.updateUser({emochiName});
    console.log('on btn pres', nameInput);
    this.setState({nameInput: !nameInput});
  }

  renderNameInput() {
    return (
      <View style={styles.namingContainer}>
        <FormLabel containerStyle={styles.noMargin}>
          <Text> Name Your eMochi! </Text>
        </FormLabel>
        <FormInput
          containerStyle={styles.noMargin}
          returnKeyType="next"
          onChangeText={this.onChangeText}
          autoCapitalize="words"
          placeholder="BeBo"
        />
        <Button
          buttonStyle={styles.primaryButton}
          containerStyle={styles.primaryButton}
          title="Perform Naming Ritual"
          onPress={this.onButtonPress}
        />
      </View>
    )
  }

  renderMessage() {
    return (
      <View style={styles.namingContainer}>
        <View style={styles.namingMessageContainer}>
          <Text> Congratz! <Text style={styles.name}> {this.state.emochiName} </Text> is officially your new virtual pet.</Text>
          
          <Text> Press next to signup and save <Text style={styles.name}> {this.state.emochiName} </Text> to your profile or go straight to the game </Text>
        </View>
        <Button
          buttonStyle={styles.primaryButton}
          containerStyle={styles.primaryButton}
          title="Rename"
          onPress={this.onButtonPress}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require('../../../lib/media/image/orangeMountains.png')}
            style={styles.backgroundImage}
            resizeMode='stretch'
          />
          <Image
            source={this.props.overlayImage}
            style={styles.overlayImage}
            resizeMode='cover'
          />
        </View>
        {this.state.nameInput ? this.renderNameInput() : this.renderMessage()}
      </View>
    )
  }
}
