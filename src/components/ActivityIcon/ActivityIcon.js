


export default ({activity, count, metric}) => (
  <View style={styles.iconContainer} key={activity}>
    <Icon
      name={getIconNameForActivity(activity)}
      raised
      size={12}
    />
    <Text> {count || Math.floor(Math.random(30))} {metric || "hr"}</Text>
  </View>
);


const getIconNameForActivity = (activity) => {
  switch(activity) {
    case "walking": return "walk";
    case "running": return "fitness-center";
    case "idle": return "sitting";
    case "transporting": return "train";
    case "cycling": return "bike";
    case "eating": return "apple";
    default: return "person";
  }
}

const getIconColorForActivity = (activity) => {
  switch(activity) {
    case "walking": return "green";
    case "running": return "blue";
    case "idle": return "red";
    case "transporting": return "yellow";
    case "cycling": return "black";
    case "eating": return "orange";
    default: return "red";
  }
}
