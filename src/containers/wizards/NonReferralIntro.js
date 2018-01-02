import NonReferralIntro from '@components/wizards/NonReferralIntro';
import {connect} from 'react-redux';
import {updateUser} from '@actions/user';
import {trackUserBehaviour} from '@actions/analytics';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (profile) => dispatch(updateUser(profile)),
  trackUserBehaviour: (eventName, eventData) => dispatch(trackUserBehaviour(eventName, eventData))
});

export default connect(null, mapDispatchToProps)(NonReferralIntro)