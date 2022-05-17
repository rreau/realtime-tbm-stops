import { IformatStopAreaInfo } from '../constants/types';
import getScheduleID from './getScheduleID';

interface IResult {
  [key: string]: Array<{
    direction: string;
    transport: string;
    idSchedule: string;
  }>;
}

const formatStopAreaInfo = (rawDatas: IformatStopAreaInfo) => {
  const datas: IResult = {};

  for (const stopPoint of rawDatas.stopPoints) {
    // Only TRAM and BUSES
    if (['TBC', 'TBT'].includes(stopPoint.id.split(':')[1]) === false) continue;

    const nameStop = stopPoint.name;
    const idStop = stopPoint.id.split(':').pop() as string;
    if (!datas[nameStop]) datas[nameStop] = [];

    for (const route of stopPoint.routes) {
      const data = {
        direction: route.name,
        transport: route.line.name,
        idSchedule: getScheduleID(idStop, route.line.name),
      };

      datas[nameStop].push(data);
    }
  }

  return datas;
};

export default formatStopAreaInfo;
