import {FETCH_ACTIVITIES} from '@actions/actionNames';
import DB, {tableNames} from '@lib/DynamoDB';
import {updateActivitiesList} from '@actions/activities/updateActivitiesList';

export const fetchActivities = (userId) => (dispatch) => {
  const queryParams = {
    RequestItems: {
      [tableNames.activities]: {
        ProjectionExpression: "activity,calories,startTime,endTime",
        Keys: {userId}
      }
    }
  }
  DB.batchGet(queryParams, (error, result) => {
    if(!error) {
      dispatch(updateActivitiesList(result.Items));
    }
  });
}