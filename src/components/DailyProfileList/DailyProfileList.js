import React, {PureComponent} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import _ from 'lodash';

import DailyProfile from '@containers/DailyProfile';
import FillerBox from '@components/common/FillerBox/FillerBox'; 
import IntegrationsList from '@containers/IntegrationsList';

import styles from './styles';

export default class extends PureComponent {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const {fetchActivities, user: {userId}} = this.props;
    if(userId) {
      // fetchActivities(userId);
    }
  }

  _renderFillerBox() {
    const {
      emochiName,
      userId,
      navigateToIntegations,
      navigateToLogin,
    } = this.props;
    // first check if they have integrations and call updateData
    const mainText = userId ? 
      "No data available, connect more apps to see your Jinni's training regimine" :
      "You must sign in in order to see your pet's activity";
    const mainButtonFunc = userId ? navigateToIntegations : navigateToLogin;
    const mainButtonText = userId ? "CONNECT APPS" : "LOGIN";

    // if !userId then FillerBox
    // else Integrations SectionList
    return (
      <View style={styles.fillerBoxContainer}>
        {!userId && <FillerBox 
          mainText={mainText}
          mainButtonFunc={mainButtonFunc}
          mainButtonText={mainButtonText}
        />}
        {userId && (
          <View stlye={{flex: 1}}>
            <View style={styles.headerMessageContainer}>
              <Text style={styles.headerMessageText}> No data available, connect more apps </Text>
              <Text style={styles.headerMessageText}> to train 
                {(emochiName && <Text style={styles.emochiName}> {emochiName} </Text>) || "your pet"}
                with your activity
              </Text>
            </View>
            <IntegrationsList />
          </View>
        )}
      </View>
    )
  }


  _renderActivityLegend() {
    const legend = [
      {
        color: "yellow",
        text: "In Transit",
        icon: "directions-transit"
      },
      {
        color: "red",
        text: "Sitting",
        icon: "weekend"
      },
      {
        color: "green",
        text: "Walking",
        icon: "directions-walk"
      },
    ];
    return legend.map(({color, text, icon}) => (
      <View style={[styles.legendItem, {backgroundColor: color}]} key={text}>
        <View style={styles.legendItemIcon}/>
        <Text style={styles.centerText}> {text} </Text>
        <Icon name={icon} />
      </View>
    ))
  }

  _renderDailyProfiles() {
    const {days} = this.props;
    console.log('rend days', days);
    // all this null checking is handled in render already
    // and moot because should not have days
    // filter activities into days using reduce then render
    const profiles = _.isEmpty(days) ? null : // no data, tell them to add to apps or integrate new ones
      _.map(days, ({date, activities, summary}) =>
        _.isEmpty(activities) ? null : // motivational thing or something not null
          (<DailyProfile 
              key={date}
              date={date}
              daysActivities={activities}
              summary={summary}
            />));
    return (
      <View>
        <View style={styles.legendContainer}>
          {this._renderActivityLegend()}
        </View>
        {profiles}
      </View>
    )
  }

  render() {
    const {
      userId,
      activities: {activities},
    } = this.props;
    return (
      <ScrollView> 
        {(_.isEmpty(activities) 
          // || !userId
        ) ? this._renderFillerBox() : this._renderDailyProfiles()}
      </ScrollView>
    );
  }
}