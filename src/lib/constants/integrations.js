const MOVES_APP="Moves",FACEBOOK="Facebook",FITBIT="Fitbit";

export const integrationAuthCalls = {
  [MOVES_APP]: `https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id=kdiz90L264WQ72Sc7OO0_0IUM4ZRrcB6&scope=activity+location`,
[FITBIT]: `https://www.fitbit.com/oauth2/authorize?scope=heartrate%20profile%20nutrition%20activity%20location%20sleep%20weight%20social&prompt=consent&response_type=code&client_id=22CPBN`
}
const categories = {
  activityTracking: "Activity Tracking",
  social: "Social",
  messaging: "Messaging"
};
export const Moves = { // This is the universal integration format used for <IntegrationList /> and <OAuth />
  appName: MOVES_APP,
  key: MOVES_APP,
  appLogo: require("@media/image/logos/moves_icon.png"),
  appIcon: require("@media/image/logos/moves_icon.png"),  
  description: "A beautifully designed activity monitoring app.",
  category: categories.activityTracking
}

export const Fitbit = {
  appName: FITBIT,
  key: FITBIT,
  appLogo: require("@media/image/logos/fitbit_logo.png"),
  appIcon: require("@media/image/logos/fitbit_icon.png"),
  description: "A beautifully designed activity monitoring app.",
  category: categories.activityTracking
}
export default [
  Moves,
  Fitbit
];