import OAuth from '@components/auth/OAuth/OAuth';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, SIGNUP, LOGIN, OAUTH} from '@constants/routes';
import {trackUserBehaviour} from '@actions/analytics';
import {initIntegrationAuth} from '@actions/auth';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  navigateToSignup: () => dispatch(navigateTo(SIGNUP)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'})),
  navigateToLogin: (options) => dispatch(navigateTo(LOGIN, {nextScreenProps: options})),
  trackUserBehaviour: (eventName, eventData) => dispatch(trackUserBehaviour(eventName, eventData)),
  initIntegrationAuth: (serviceName) => dispatch(initIntegrationAuth(serviceName))
});

export default connect(mapStateToProps, mapDispatchToProps)(OAuth)