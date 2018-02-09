import DailyOverviewList from '@components/DailyOverviewList/DailyOverviewList';
import {connect} from 'react-redux';


const mapStateToProps = ({days}) => ({
  days
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, null)(DailyOverviewList)