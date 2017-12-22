'use strict'
import moment from 'moment';
import {dayInMicroSecs}  from '@constants/time';
import _ from 'lodash';

export const _formatToUnix = dateString => moment(dateString).valueOf()
export const _durationUnix = (start, end) => ( _formatToUnix(end) - _formatToUnix(start));

export const  _getTimesInUnix = (start, end) => ({
  startTime: _formatToUnix(start),
  endTime:  _formatToUnix(end),
  duration: _durationUnix(start, end)
});

export const _sortObjByTime = (obj) => obj ? Object.keys(obj)
  .sort((x, y) => x - y)
  .reduce((a, b) => (isNaN(b) ? a : {...a, [b]: obj[b]}), {}) : {};

export const _sortArrByTime = (arr) => arr ? 
  arr.sort((x, y) => x - y).filter((z) => isNaN(z)) : [];

export const _getFirstMSInDay = (timeMS) =>
  // First MS at GMT not local time - add second param localRegion or moment prob has way
  // coerce timeMS to first MS of that day 00:00 and return MS value
  moment(moment(timeMS).format("YYYY-MM-DD 00:00:00.000")).valueOf();

export const _getFirstActivityInDay = (time, obj) => {
  const startTime = _getFirstMSInDay(time);
  const endTime = startTime + dayInMicroSecs;
  const sortedActs = _sortObjByTime(obj);
  const times = Object.keys(sortedActs);
  let firstAct, i = 0;

  // FIXME loop because lazy
  while(!firstAct || i <= times.length) {
    const actTime = times[i];
    if (actTime > startTime && actTime < endTime) {
      firstAct = {[actTime]: obj[actTime]};
      break;
    }
    i++
  }
  return firstAct;
}

export const _filterObjByDay = (time, obj) => {
  const startTime = _getFirstMSInDay(time);
  const endTime = startTime + dayInMicroSecs;  
  _filterObjBetweenTimes(startTime, endTime, obj);
};

export const _filterObjBetweenTimes = (startTime, endTime, obj) => 
  Object.keys(obj).filter((time) => (time > startTime && time < endTime))
    .reduce((timeline, time) => ({...timeline, [time]: obj[time]}), {});


export const _findLastTime = (data) => Object.keys(_sortObjByTime(data))[0];

const dayNameFromISOCode = (ISOday) => {
  switch(ISOday) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
  }
};

export const getDayOfWeekNameFromTimestamp = (ts) =>
  _.isFinite(ts) ? dayNameFromISOCode(moment(ts).isoWeekday()) : null;

export const getDayofWeekDateFromTimestamp = ts =>
  _.isFinite(ts) ? moment(ts).format('L') : null;