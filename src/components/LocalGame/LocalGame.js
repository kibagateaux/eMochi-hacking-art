import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import ActionButton from '@components/common/ActionButton/ActionButton';
import styles from './styles';

import {localStatsAfterActivity} from '@lib/helpers/stats';

export default (props) => {
  const {
    localStats,
    updateLocalStats,
    setAvatarActivity,
    trackUserBehaviour,
  } = props;
  const onActivityPress = (activity) => {
    const eventData = {
      activityName: activity,
      localStats
    };
    return () => {
      trackUserBehaviour('LOCAL_GAME_ACTION_PRESSED', eventData);
      updateLocalStats(localStatsAfterActivity(activity, localStats));
      setAvatarActivity(activity);
    };
  };
  
  const actions= [
    {
      action: "Run",
      onPress: onActivityPress("running"),
      icon: "🏃‍♀️"
    },
    {
      action: "Dance",
      onPress: onActivityPress("dancing"),
      icon: "💃"
    },
    {
      action: "Sleep",
      onPress: onActivityPress("sleeping"),
      icon: "💤"
    },
    {
      action: "Eat",
      onPress: onActivityPress("eating"),
      icon: "🍎"
    }
  ];

  const actionButtons = actions.map(({action, onPress, icon}) => 
    <ActionButton
      key={action}
      style={styles.localActionButtons}
      secondaryColor
      buttonText={action}
      onPress={onPress}
      icon={icon}
    />)
  
  return (
    <ScrollView horizontal style={styles.localGameContainer}>
      <View style={styles.localActionButtonContainer}>
        {actionButtons}
      </View>
    </ScrollView>
  )
}