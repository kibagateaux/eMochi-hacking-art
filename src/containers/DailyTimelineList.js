import {connect} from 'react-redux';
import DailyTimelineList from '@components/DailyTimelineList/DailyTimelineList';

import {fetchActivities} from "@actions/activities";
import {navigateTo} from '@actions/navigation';
import {
  INTEGRATIONS,
  LOGIN
} from '@constants/routes';

const mapStateToProps = (state) => ({
  user: state.user,
  userId: state.user.userId,
  days: state.days,
  activities: state.activities,
  emochiName: state.user.emochiName
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: (userId) => dispatch(fetchActivities(userId)),
  navigateToLogin: () => dispatch(navigateTo(LOGIN)),
  navigateToIntegrations: () => dispatch(navigateTo(INTEGRATIONS))
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyTimelineList);
