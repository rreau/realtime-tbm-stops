import { IformatStopAreaInfo } from '../constants/types';
import getScheduleID from './getScheduleID';

interface IResult {
  [key: string]: Array<{
    destination: string;
    transport: string;
    idSchedule: string;
  }>;
}

const formatStopAreaInfo = (rawData: IformatStopAreaInfo) => {
  const data: IResult = {};

  for (const stopPoint of rawData.stopPoints) {
    // Only TRAM and BUSES
    if (['TBC', 'TBT'].includes(stopPoint.id.split(':')[1]) === false) continue;

    const nameStop = stopPoint.name;
    const idStop = stopPoint.id.split(':').pop() as string;
    if (!data[nameStop]) data[nameStop] = [];

    for (const route of stopPoint.routes) {
      const value = {
        destination: route.name,
        transport: route.line.name,
        idSchedule: getScheduleID(idStop, route.line.name),
      };

      data[nameStop].push(value);
    }
  }

  return data;
};

export default formatStopAreaInfo;
