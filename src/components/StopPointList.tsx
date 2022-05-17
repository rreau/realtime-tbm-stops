import { PosItem } from '../constants/enum';
import { IformatStopAreaInfo } from '../constants/types';
import useFetchJson from '../hooks/useFetchJson';
import formatStopAreaInfo from '../utils/formatStopAreaInfo';
import ListItemSearch from './ListItemSearch';
import ListSearch from './ListSearch';

interface IStopPointList {
  id: string;
  onClickItem: React.Dispatch<React.SetStateAction<string>>;
}

interface IStopPointInfo {
  direction: string;
  transport: string;
  idSchedule: string;
}

export const STOP_INFO_URL = 'https://ws.infotbm.com/ws/1.0/network/stoparea-informations/';

const StopPointList = ({ id, onClickItem }: IStopPointList) => {
  const [rawDatas, isLoading] = useFetchJson(STOP_INFO_URL + id);

  if (isLoading) return <>Chargement en cours...</>;

  const datas = formatStopAreaInfo(rawDatas as unknown as IformatStopAreaInfo);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClickItem((e.target as HTMLElement).dataset.id as string);
  };

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
                    key={e.transport + e.direction}
                    id={e.idSchedule}
                    position={position}
                    title={`${e.transport}> ${e.direction}`}
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
