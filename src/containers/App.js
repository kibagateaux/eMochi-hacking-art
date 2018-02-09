import {connect} from 'react-redux';
import App from '@components/App/App';
import {
  updateLocalStats,
  setDisplayStats
} from '@actions/stats';
import {identifyUser} from '@actions/analytics/identifyUser';
import {navigateTo} from '@actions/navigation/navigateTo';
import {getLocalStats} from '@actions/stats/getLocalStats';
import {fetchActivities} from '@actions/activities';
import {updateActivitiesList} from '@actions/activities';
import {updateDays} from '@actions/days';

import {LOGIN, INTEGRATIONS, NON_REFERRAL_INTRO} from '@constants/routes';

const mapStateToProps = ({stats, activities, user}) => ({
  lastLiveStats: stats.lastLiveStats,
  localMode: user.localMode,
  user
});

const mapDispatchToProps = (dispatch) => ({
  identifyUser: (userData) => dispatch(identifyUser(userData)),
  getLocalStats: () => dispatch(getLocalStats()),
  setDisplayStats: (statsMap) => dispatch(setDisplayStats(statsMap)),
  updateLocalStats: (statsMap) => dispatch(updateLocalStats(statsMap)),
  fetchActivities: (count) => dispatch(fetchActivities(count)),
  updateActivitiesList: (activities) => dispatch(updateActivitiesList(activities)),
  updateDays: (days) => dispatch(updateDays(days)),
  navigateToNonReferralIntro: (data) => dispatch(navigateTo(NON_REFERRAL_INTRO, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);