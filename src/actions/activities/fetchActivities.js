import AWS from 'aws-sdk';
import moment from 'moment';
import {flatten, isEmpty} from 'lodash';

import {FETCH_ACTIVITIES} from '@actions/actionNames';
import {DYNAMO_TABLES, CONFIG} from '@constants/AWS';

import {updateActivitiesList} from '@actions/activities';
import {updateDays} from '@actions/days';
import parseListIntoDays from '@helpers/time';


const DB = new AWS.DynamoDB.DocumentClient(CONFIG);
export const fetchActivities = (earliestTime, latestTime) => (dispatch, getStore) => {
  const {user:{userId}} = getStore();
  const queryParams = {
    TableName: DYNAMO_TABLES.activities,
    IndexName: "userId-startTime",
    // figure out how to make range work, see AWS Loft dudes
    KeyConditionExpression: "userId = :userId and startTime > :earliest",
    KeySchema: [
      {"AttributeName": "userId", "KeyType": "HASH"},
      {"AttributeName": "startTime", "KeyType": "RANGE"}
    ],
    ExpressionAttributeValues: {
      ":userId": userId,
      // ":latest": latest || moment().unix(),
      ":earliest":  earliestTime ? moment(earliestTime).unix() : moment().day(-1).unix()
    },
    Limit: 250
  };

  DB.query(queryParams, (error, result) => {
    console.log('get acts', error, result);
    if(!error && result) {
      const allActs = isEmpty(result.Items) ? [] : flatten(result.Items);
      dispatch(updateActivitiesList(allActs));
      const parsedActs = parseListIntoDays(allActs);
      console.log('parse act into days', parsedActs);
      dispatch(updateDays(parsedActs));
    }
  });
}