import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import branch from 'react-native-branch';
import uuid from 'uuid';
import PushNotification from 'react-native-push-notification';

import HomeProfile from '@containers/HomeProfile';
import LocalGame from '@containers/LocalGame';
import DailyTimelineList from '@containers/DailyTimelineList';
import DailyOverviewList from '@containers/DailyOverviewList';
import Article from '@components/modals/Article/ArticleModal';

import styles from './styles';

import sampleActs from '@lib/sampleActivitiesData';
import {parseListIntoDays} from '@helpers/time';
import sampleActivitiesData from '../../lib/sampleActivitiesData';

import articles from '@lib/media/articles.js';

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
        // props.navigateToNonReferralIntro({params, user: props.user});
      }
    });

    const parse = parseListIntoDays(sampleActivitiesData, "activities");
    props.updateDays(parse);

    // refreshes user's cloud data on app load
    // pull metadata table instead
    // if(!__DEV__) {
      if(userId) {

      //   axios.get(`https://z7udwcips0.execute-api.us-east-1.amazonaws.com/dev/moves/storyline/${userId}`)
      //   .then((res) => {
      //     console.log('res', res);
            // props.fetchActivities(); // FIXME: Update API to not return data unnecesarily
      //     if(res.data) {
      //       res.data.map((day) => {
      //           // This is incorrect for many reasons
      //           //   - "Days" only exist for moves api call
      //           //   - Everything is down to the millisecond so can easily cluster activities with reducer func if needed
      //           //   - Doesn't use DynamoDB as single source of truth
      //         updateActivitiesList(day.activities);
      //         updateDays({[day.date]: day.summary})
      //       })
      //     }
      //   })
      // .catch((error) => error)
      }
    // }
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
      <DailyOverviewList />;
  
  _renderArticleModal() {
    const articleCount = articles.length;
    const selectArticle = () =>
      articles[Math.floor(Math.random() * articleCount)];
    return <Article {...selectArticle()} />
  }

  render() {
    return (
      <View style={styles.container}> 
        <HomeProfile />
        {this._renderLowerPanel()}
        {this._renderArticleModal()}
      </View>
    )

  }
}

