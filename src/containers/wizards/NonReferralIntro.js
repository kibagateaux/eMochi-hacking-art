import NonReferralIntro from '@components/wizards/NonReferralIntro';
import {connect} from 'react-redux';
import {updateUser} from '@actions/user';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (profile) => dispatch(updateUser(profile))
});

export default connect(null, mapDispatchToProps)(NonReferralIntro)