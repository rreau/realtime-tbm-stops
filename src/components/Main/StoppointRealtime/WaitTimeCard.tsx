import { IformatRealtimeInfo } from '../../../constants/types';
import useAutoFetchJson from '../../../hooks/useAutoFetchJson';
import { hmsToSeconds } from '../../../utils/convertTime';
import formatRealtimeInfo from '../../../utils/formatRealtimeInfo';
import WaitTimeRow from './WaitTimeRow';
import WaitTimeTable from './WaitTimeTable';

interface IWaitTimeCard {
  line: string;
  direction: string;
  id: string;
}

interface IElement {
  waittime: string;
  destination: string;
  realtime: boolean;
  lastUpdateVehicule: string;
}

const STOP_SCHEDULE_URL = 'https://ws.infotbm.com/ws/1.0/get-realtime-pass/';

const WaitTimeCard = ({ line, direction, id }: IWaitTimeCard) => {
  const [rawData, isLoading] = useAutoFetchJson(STOP_SCHEDULE_URL + id, 30);

  if (isLoading) return <>Chargement en cours...</>;

  const data = formatRealtimeInfo(rawData as unknown as IformatRealtimeInfo);
  const dataSorted = data.sort((a, b) => hmsToSeconds(a.waittime) - hmsToSeconds(b.waittime));

  return (
    <div className="flex flex-row">
      <WaitTimeTable key={line + direction} line={line} direction={direction}>
        {dataSorted.map((e: IElement) => (
          <WaitTimeRow
            key={e.waittime}
            destination={e.destination}
            waittime={e.waittime}
            realtime={e.realtime}
            lastUpdate={e.lastUpdateVehicule}
          />
        ))}
      </WaitTimeTable>
    </div>
  );
};

export default WaitTimeCard;
