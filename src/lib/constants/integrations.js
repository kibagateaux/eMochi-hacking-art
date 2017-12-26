const MOVES_APP = "moves", FACEBOOK = "facebook";

export const integrationServices = {
  [MOVES_APP]: MOVES_APP,
  [FACEBOOK]: FACEBOOK
};

export const integrationAuthCalls = {
  [MOVES_APP]: `https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id=kdiz90L264WQ72Sc7OO0_0IUM4ZRrcB6&scope=activity+location` // pretty sure + iscorrect, isn't a problem once transferred to backend
}