
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';


export default ({activity, count, metric, size}) => {
  const {source, name} = getIconNameForActivity(activity);
  console.log('act icon', activity, count, name);
  return (
  <View style={styles.iconContainer} key={activity}>
    <Icon
      name={name}
      type={source}
      raised
      size={size || 12}
    />
    <Text> {count || Math.floor(Math.random(30))} {metric || "hr"}</Text>
  </View>
);
}

const getIconNameForActivity = (activity) => {
  switch(activity) {
    case "walking":       return {source: "material", name: "directions-walk"};
    case "running":       return {source: "material", name: "directions-run"};
    case "idle":          return {source: "ionicon", name: "ios-sad"};
    case "transport":     return {source: "material", name: "directions-transit"};
    case "cycling":       return {source: "material", name: "directions-bike"};
    case "eating":        return {source: "material-community", name: "food-apple"};
    default:              return {source: "material", name: "person"};
  }
}

const getIconColorForActivity = (activity) => {
  switch(activity) {
    case "walking":       return "green";
    case "running":       return "blue";
    case "idle":          return "red";
    case "transport":     return "yellow";
    case "cycling":       return "black";
    case "eating":        return "orange";
    default:              return "red";
  }
}
