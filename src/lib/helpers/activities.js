import {isEmpty} from 'lodash'
export const summarizeActivities = (activities) =>
  (!isEmpty(activities)) ? activities.reduce((ledger, item) => {
    const {
      endTime,
      startTime,
      activity,
      calories,
      distance
    } = item;
    const summary = ledger[activity];
    const duration = endTime - startTime;
    const totalDuration = summary ? (summary.totalDuration || 0) + duration : duration;
    const totalCalories = summary ? (summary.totalCalories || 0) + calories : calories;
    const totalDistance = summary ? (summary.totalDistance || 0) + distance : distance;
    const newSummary = {[activity]: {totalCalories,totalDistance,totalDuration}};
    return {...ledger, newSummary};
  }, {}) : {};