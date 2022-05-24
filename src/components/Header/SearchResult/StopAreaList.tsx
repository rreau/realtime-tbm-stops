import useFetchJson from '../../../hooks/useFetchJson';
import StopAreaItem from './StopAreaItem';

interface IStopAreaList {
  search: string;
}

const SEARCH_STOP_URL = 'https://ws.infotbm.com/ws/1.0/get-schedule/';

const StopAreaList = ({ search }: IStopAreaList) => {
  const [datas, isLoading] = useFetchJson(SEARCH_STOP_URL + search);

  if (isLoading) return <>Chargement en cours...</>;

  const elements = datas
    .filter((e: Record<string, string>) => e.type === 'stop_area')
    .map((e: Record<string, string>) => {
      return <StopAreaItem key={e.id} id={e.id} title={e.name} />;
    });

  return <div className='flex flex-col w-full'>{elements}</div>;
};

export default StopAreaList;
