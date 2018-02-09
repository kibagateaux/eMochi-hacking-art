import {isEmpty} from 'lodash'
export const summarizeActivities = (activities = []) => {
  console.log('sum acts', activities);
  return activities.reduce((ledger, item) => {
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
  }, {});
};

export const summarizeActivityTypes = (activities = []) => {
  return activities.reduce((summary, act) => {
    const {
      endTime,
      startTime,
      activity,
      calories,
      distance
    } = act;
    const actSummary = summary[activity] || {};
    const duration = endTime - startTime;
    const totalDuration = (actSummary.totalDuration || 0) + (duration || 0);
    const totalCalories = (actSummary.totalCalories || 0) + (calories || 0);
    const totalDistance = (actSummary.totalDistance || 0) + (distance || 0);
    return {
      ...summary,
      [activity]: {
        totalDuration,        
        totalDistance,
        totalCalories,
      }
    }
  }, {});
};