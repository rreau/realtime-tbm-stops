import Loading from '@components/Loading';
import { PosItem } from '@constants/enum';
import { IformatStopAreaInfo } from '@constants/types';
import useFetchJson from '@hooks/useFetchJson';
import formatStopAreaInfo from '@utils/formatStopAreaInfo';
import StopPointItem from './StopPointItem';

interface IStopPointList {
  id: string;
}

interface IStopPointInfo {
  destination: string;
  transport: string;
  idSchedule: string;
}

export const STOP_INFO_URL = 'https://ws.infotbm.com/ws/1.0/network/stoparea-informations/';

const StopPointList = ({ id }: IStopPointList) => {
  const [rawDatas, isLoading] = useFetchJson(STOP_INFO_URL + id);

  if (isLoading) return <Loading />;

  const datas = formatStopAreaInfo(rawDatas as unknown as IformatStopAreaInfo);

  return (
    <div className='m-5 flex flex-col'>
      <div className='flex flex-col space-y-3'>
        {Object.keys(datas).map((key: string) => {
          const lengthData = datas[key].length;
          return (
            <div key={key}>
              <span className='font-medium ml-1'>{key}</span>
              <div className='flex flex-col w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                {datas[key]
                  .sort((a, b) =>
                    `${a.transport} ${a.destination}`.localeCompare(
                      `${b.transport} ${b.destination}`
                    )
                  )
                  .map((e: IStopPointInfo, i: number) => {
                    let position = PosItem.MID;
                    if (lengthData - 1 === 1) position = PosItem.ALONE;
                    if (i === 0) position = PosItem.TOP;
                    if (i === lengthData - 1) position = PosItem.BOTTOM;

                    return (
                      <StopPointItem
                        key={e.transport + e.destination}
                        stopName={key}
                        transport={e.transport}
                        destination={e.destination}
                        idSchedule={e.idSchedule}
                        itemPosition={position}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StopPointList;
