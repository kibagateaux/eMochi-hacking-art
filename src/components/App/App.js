import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import branch from 'react-native-branch';
import uuid from 'uuid';

import HomeProfile from '@containers/HomeProfile';
import LocalGame from '@containers/LocalGame';
import DailyProfileList from '@containers/DailyProfileList';

import styles from './styles';

export default class App extends Component {
  constructor(props){
    super(props);
    const {
      user: { userId, anonymousId },
      identifyUser,
      updateActivitiesList,
      updateDays
    } = props;

    if(!userId && !anonymousId) {
      const id = uuid.v4();
      identifyUser({anonymousId: id});
    }
    
    // branch.subscribe(props.handleBranchRouting);
    this.branchUnsubcription = branch.subscribe(({params, error}) => {
      const url = params['+url'] || params['+non_branch_link'];
      if(params['+is_first_session']) {
        props.navigateToNonReferralIntro({params, user: props.user});
      }
    });

    // refreshes user's cloud data on app load
    // pull metadata table instead
    if(!__DEV__) {
      if(userId) {
        axios.get(`https://og1pdgpgji.execute-api.us-east-1.amazonaws.com/dev/moves/storyline/${userId}`)
        .then((res) => {
          if(res.data) {
            res.data.map((day) => {
                // This is incorrect for many reasons
                //   - "Days" only exist for moves api call
                //   - Everything is down to the millisecond so can easily cluster activities with reducer func if needed
                //   - Doesn't use DynamoDB as single source of truth
              updateActivitiesList(day.activities);
              updateDays({[day.date]: day.summary})
            })
          }
        })
      .catch((error) => error)
      }
    }
  }

  // Updates data and initializes UI for default game mode
  async componentWillMount(e) {
    const {
      updateLocalStats,
      setDisplayStats,
      lastLiveStats,
      localMode,
      getLocalStats,
    } = this.props;
    const lastLocalStats = await getLocalStats();
    // instantiate local stats so not overwritten on first press. 
    updateLocalStats(lastLocalStats);
    localMode ?
      updateLocalStats(lastLocalStats) :
      setDisplayStats(lastLiveStats);
  }

  componentWillUnmount(e) {
    this.branchUnsubcription();
  }

  _renderLowerPanel = () =>
    this.props.localMode ?
      <LocalGame /> :
      <DailyProfileList />;
  
  render() {
    return (
      <View style={styles.container}> 
        <HomeProfile />
        {this._renderLowerPanel()}
      </View>
    )

  }
}

