import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import styles from './styles';

export default class Untitled extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  openLink = () => {
    const {link} = this.props;
    (link && Linking.canOpenURL(link)) ? Linking.openURL(link) : this.close();
  }

  close = () => this.setState({visible: false});

  render() {
    const {
      title,
      subtitle,
      image
    } = this.props;
    return (
      <Modal visible={this.state.visible} animationType="slide">
        <View style={styles.root}>
          <View style={styles.rect2}>
            <View style={styles.articleTitleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image
              style={styles.image1}
              source={image || require("@media/image/orangeMountains.png")}
              resizeMode="stretch"
            />
            <TouchableOpacity
              style={styles.skipButton}
              onPress={this.close}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={this.openLink}
            >
              <Text style={styles.linkText}>Get Woke</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

