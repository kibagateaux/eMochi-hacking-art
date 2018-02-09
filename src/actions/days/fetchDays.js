import AWS from 'aws-sdk';
import {DYNAMO_TABLES, CONFIG} from '@constants/AWS';
import {updateDays} from '@actions/days';
import moment from 'moment';
import {flatten, isEmpty} from 'lodash';


const DB = new AWS.DynamoDB.DocumentClient(CONFIG);
export const fetchActivities = (earliestTime, latestTime) => (dispatch, getStore) => {
  const {user:{userId}} = getStore();
  const queryParams = {
    TableName: DYNAMO_TABLES.activities,
    IndexName: "userId-date",
    KeyConditionExpression: "userId = :userId and date > :earliest",
    KeySchema: [
      {"AttributeName": "userId", "KeyType": "HASH"},
      {"AttributeName": "date", "KeyType": "RANGE"}
    ],
    ExpressionAttributeValues: {
      ":userId": userId,
      // ":latest": latest || moment().unix(),
      ":earliest":  earliestTime ? moment(earliestTime).unix() : moment().day(-1).unix()
    }

  };

  DB.query(queryParams, (error, result) => {
    console.log('get day', error, result);
    if(!error && result) {
      const allActs = isEmpty(result.Items) ? [] : flatten(result.Items);
      console.log('flat day', allActs);
      dispatch(updateActivitiesList(allActs));
    }
  });
}