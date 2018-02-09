import DailyOverview from '@components/DailyOverview/DailyOverview';
import {connect} from 'react-redux';


const mapStateToProps = ({days}) => ({
  days
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, null)(DailyOverview)