import {connect} from 'react-redux';
import LocalGame from '@components/LocalGame/LocalGame';

import {setAvatarActivity} from '@actions/activities';
import {updateLocalStats} from '@actions/stats';
import {trackUserBehaviour} from '@actions/analytics/trackUserBehaviour';

const mapStateToProps = ({stats}) => ({
  localStats: stats.localStats
});

const mapDispatchToProps = (dispatch) => ({
  updateLocalStats: (stats) => dispatch(updateLocalStats(stats)),
  trackUserBehaviour: (eventName, eventData) => dispatch(trackUserBehaviour(eventName, eventData)),
  setAvatarActivity: (activity) => dispatch(setAvatarActivity(activity))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalGame);