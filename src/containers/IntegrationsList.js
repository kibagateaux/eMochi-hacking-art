import IntegrationsList from '@components/IntegrationsList/IntegrationsList';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation';
import {OAUTH} from '@constants/routes';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  navigateToOAuth: (appDetails) => dispatch(navigateTo(OAUTH, appDetails))
});

export default connect(null, mapDispatchToProps)(IntegrationsList)