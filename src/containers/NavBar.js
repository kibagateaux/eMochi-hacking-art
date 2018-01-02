import NavBar from '@components/NavBar/NavBar';
import {connect} from 'react-redux';
import {navigateTo, navigateBack} from '@actions/navigation';
import {SETTINGS} from '@constants/routes';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  navigateToSettings: () => dispatch(navigateTo(SETTINGS)),
  navigateBack: (lastRoute) => dispatch(navigateBack(lastRoute))
});

export default connect(null, mapDispatchToProps)(NavBar)