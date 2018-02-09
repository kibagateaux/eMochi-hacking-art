import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Linking,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './styles';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  openLink(link) {
    // FIXME: error handling
    Linking.open(link);
  }

  render() {
    const {
      title,
      link,
      image
    } = this.props;
    const openArticle = () => this.openLink(link);
    const close = () => this.setState({visible: false});
    return (
      <Modal
        visible={this.state.visible}
        style={styles.modal}
      >
        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={close} style={styles.close}>
            <Text> CLOSE!! </Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {title} ARTICLE TITLE
          </Text>
          <Image source={image} style={styles.image}/>
          <TouchableOpacity onPress={openArticle} style={styles.linkButton}>
            <Text style={styles.linkText}> Readeth And Get Woke! </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}