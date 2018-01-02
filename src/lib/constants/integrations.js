const MOVES_APP = "Moves", FACEBOOK = "Facebook";

export const integrationServices = {
  [MOVES_APP]: MOVES_APP,
  [FACEBOOK]: FACEBOOK
};

export const integrationAuthCalls = {
  [MOVES_APP]: `https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id=kdiz90L264WQ72Sc7OO0_0IUM4ZRrcB6&scope=activity+location` // pretty sure + iscorrect, isn't a problem once transferred to backend
}
const categories = {
  activityTracking: "Activity Tracking",
  social: "Social",
  messaging: "Messaging"
};

export default [
  {
    appName: MOVES_APP,
    appLogo: require("@media/image/logos/moves-app-logo.png"),
    description: "A beautifully designed activity monitoring app.",
    category: categories.activityTracking
  }
]