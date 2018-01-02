import Signup from '@components/auth/Signup/Signup';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, LOGIN} from '@constants/routes';
import {trackUserBehaviour} from '@actions/analytics';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  navigateToLogin: () => dispatch(navigateTo(LOGIN)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'})),
  trackUserBehaviour: (eventName, eventData) => dispatch(trackUserBehaviour(eventName, eventData))
});

export default connect(null, mapDispatchToProps)(Signup)