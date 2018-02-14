
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '@constants/style';
import styles from './styles';


export default (props) => {
  const {
    activity,
    count,
    metric,
    size, 
    style,
    iconColor
  } = props;
  return (
    <View style={[styles.iconContainer, style]} key={activity}>
      <Icon
        color={iconColor}
        raised
        size={size || 18}
        iconStyle={styles.icon}
        {...getIconNameForActivity(activity)}
        containerStyle={{backgroundColor: getIconColorForActivity(activity)}}
      />
      <View style={styles.metricContainer}>
        <Text>{count || Math.floor(Math.random(30))}</Text>
        <Text>{metric || "min"}</Text>
      </View>
    </View>
  );
}

const getIconNameForActivity = (activity) => {
  switch(activity) {
    case "walking":       return {type: "material", name: "directions-walk"};
    case "running":       return {type: "material", name: "directions-run"};
    case "idle":          return {type: "ionicon", name: "ios-sad"};
    case "transport":     return {type: "material", name: "directions-transit"};
    case "cycling":       return {type: "material", name: "directions-bike"};
    case "eating":        return {type: "material-community", name: "food-apple"};
    default:              return {type: "material", name: "person"};
  }
}

const getIconColorForActivity = (activity) => {
  switch(activity) {
    case "walking":       return colors.orange;
    case "running":       return colors.magenta;
    case "idle":          return colors.red;
    case "transport":     return colors.teal;
    case "cycling":       return colors.white;
    case "eating":        return colots.yellow;
    default:              return colors.white;
  }
}
