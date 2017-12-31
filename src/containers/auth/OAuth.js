import OAuth from '@components/auth/OAuth/OAuth';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {HOME, SIGNUP, LOGIN, OAUTH} from '@constants/routes';

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  navigateToSignup: () => dispatch(navigateTo(SIGNUP)),
  navigateToHome: () => dispatch(navigateTo(HOME, {type: 'reset'})),
  navigateToLogin: (options) => dispatch(
    navigateTo(LOGIN, {nextScreenProps: options})),
});

export default connect(mapStateToProps, mapDispatchToProps)(OAuth)