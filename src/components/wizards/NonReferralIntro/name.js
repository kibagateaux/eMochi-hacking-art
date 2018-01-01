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

    };
  }

  onChangeText = (emochiName, e) => {
    console.log('on txt', emochiName, e);
    this.setState({emochiName})
  }

  onButtonPress = () => {
    console.log('name press', this.state);
    this.props.updateUser(this.state);
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
        <View style={styles.namingContainer}>
          <FormLabel>
            <Text> Name Your eMochi! </Text>
          </FormLabel>
          <FormInput
            containerStyle={styles.nameInputContainerStyles}
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
      </View>
    )
  }
}
