import Login from '@components/auth/Login/Login';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, SIGNUP} from '@constants/routes';
import {signInUser} from '@actions/auth';
import {aliasAnonToUser} from '@actions/analytics';
import {trackUserBehaviour} from '@actions/analytics';

const mapStateToProps = ({user}) => ({
  anonymousId: user.anonymousId,
});

const mapDispatchToProps = (dispatch) => ({
  navigateToSignup: () => dispatch(navigateTo(SIGNUP)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'})),
  signInUser: (userInfo) => dispatch(signInUser(userInfo)),
  aliasAnonToUser: (anonId, userId) => dispatch(aliasAnonToUser(anonId, userId)),
  trackUserBehaviour: (eventName, eventData) => dispatch(trackUserBehaviour(eventName, eventData)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)