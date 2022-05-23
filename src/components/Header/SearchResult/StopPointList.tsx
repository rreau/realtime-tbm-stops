import { useCallback, useContext } from 'react';
import { PosItem } from '../../../constants/enum';
import { IformatStopAreaInfo } from '../../../constants/types';
import useFetchJson from '../../../hooks/useFetchJson';
import formatStopAreaInfo from '../../../utils/formatStopAreaInfo';
import { StopPointContext } from '../../App';
import ListItemSearch from './ListItemSearch';
import ListSearch from './ListSearch';

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
  const stopPointStore = useContext(StopPointContext);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;
      const id = target.dataset.id as string;
      const line = target.dataset.line as string;
      const destination = target.dataset.destination as string;
      stopPointStore?.setStopPoint([{ id: id, line: line, destination: destination }]);
    },
    [stopPointStore]
  );

  if (isLoading) return <>Chargement en cours...</>;

  const datas = formatStopAreaInfo(rawDatas as unknown as IformatStopAreaInfo);

  return (
    <div className="flex flex-col justify-center items-center">
      <span>Liste des arrêts</span>
      <div className="flex flex-row space-x-3">
        {Object.keys(datas).map((key: string) => {
          const lengthData = datas[key].length;

          return (
            <ListSearch key={key} title={key}>
              {datas[key].map((e: IStopPointInfo, i: number) => {
                let position = PosItem.MID;
                if (lengthData - 1 === 1) position = PosItem.ONE;
                if (i === 0) position = PosItem.TOP;
                if (i === lengthData - 1) position = PosItem.BOTTOM;

                return (
                  <ListItemSearch
                    key={e.transport + e.destination}
                    id={e.idSchedule}
                    line={e.transport}
                    destination={e.destination}
                    position={position}
                    title={`${e.transport} > ${e.destination}`}
                    onClick={handleClick}
                  />
                );
              })}
            </ListSearch>
          );
        })}
      </div>
    </div>
  );
};

export default StopPointList;
