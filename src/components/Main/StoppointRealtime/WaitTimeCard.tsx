import { useCallback, useContext } from 'react';
import { IformatRealtimeInfo } from '../../../constants/types';
import useAutoFetchJson from '../../../hooks/useAutoFetchJson';
import { hmsToSeconds } from '../../../utils/convertTime';
import formatRealtimeInfo from '../../../utils/formatRealtimeInfo';
import { StopPointContext } from '../../App';
import WaitTimeRow from './WaitTimeRow';
import WaitTimeTable from './WaitTimeTable';

interface IWaitTimeCard {
  line: string;
  destination: string;
  id: string;
}

interface IElement {
  waittime: string;
  destination: string;
  realtime: boolean;
  lastUpdateVehicule: string;
}

const STOP_SCHEDULE_URL = 'https://ws.infotbm.com/ws/1.0/get-realtime-pass/';

const WaitTimeCard = ({ line, destination, id }: IWaitTimeCard) => {
  const [rawData, isLoading] = useAutoFetchJson(STOP_SCHEDULE_URL + id, 30);
  const stopPointTheme = useContext(StopPointContext);

  const handleClose = useCallback(() => {
    console.log(stopPointTheme?.stopPoint);
    console.log({ id: id, line: line, destination: destination });
    stopPointTheme?.setStopPoint((sp) =>
      sp.filter((e) => e.id !== id && e.line !== line && e.destination !== destination)
    );
    console.log(stopPointTheme?.stopPoint);
  }, [stopPointTheme, destination, line, id]);

  if (isLoading) return <>Chargement en cours...</>;

  const data = formatRealtimeInfo(rawData as unknown as IformatRealtimeInfo);
  const dataSorted = data.sort((a, b) => hmsToSeconds(a.waittime) - hmsToSeconds(b.waittime));

  return (
    <div className="flex flex-col m-5 border border-slate-500">
      <button className="w-10 place-self-end" title="Close card" onClick={handleClose}>
        <i className="fa-solid fa-xmark fa-2x text-red-700"></i>
      </button>
      <WaitTimeTable key={line + destination} line={line} destination={destination}>
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
