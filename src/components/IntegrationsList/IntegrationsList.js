import React, {Component} from 'react';
import {
  View,
  Text,
  SectionList,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import integrationsList from '@constants/integrations';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  renderSectionHeader({section}) {
    return (
      <View style={styles.sectionHeaderContainer} key={section.title}>
        <Text style={styles.sectionHeaderText}> {section.title} </Text>
      </View>
    )
  }

  renderItem = ({item}) => {
    const navToOauth = () => this.props.navigateToOAuth(item);
    return (
      <TouchableOpacity
        key={item.appName}
        style={styles.sectionItemContainer}
        onPress={navToOauth}
      >
        <Image
          resizeMode="contain"
          style={styles.sectionItemLogo}
          source={item.appLogo}
        />
        <Text style={styles.sectionItemLabel}> {item.appName || null} </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const sectionMap = integrationsList.reduce((sections, item) => {
      // take array of all integrations
      // seperate by category, cateogries = section title
      const section = sections[item.category] || {};
      const data = section.data ? [...section.data, item] : [item];
      const category = {title: item.category, data}
      return {...sections, [item.category]: category}
    }, {});
    const sections = Object.keys(sectionMap).map((i) => sectionMap[i]);
    return (
      <SectionList
        contentContainerStyle={styles.sectionListContainer}
        stickySectionHeadersEnabled
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        sections={sections}
      />
    );
 }
}