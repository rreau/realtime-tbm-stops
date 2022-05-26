import { useCallback, useContext, useState } from 'react';
import { IformatRealtimeInfo, IStopData } from '@constants/types';
import useAutoFetchJson from '@hooks/useAutoFetchJson';
import { hmsToSeconds } from '@utils/convertTime';
import formatRealtimeInfo from '@utils/formatRealtimeInfo';
import { StopPointContext } from '@contexts/StopPointListener';
import WaitTimeRow from './WaitTimeRow';
import WaitTimeTable from './WaitTimeTable';
import Loading from '@components/Loading';
import { addBookmarksItem, checkItem, delBookmarksItem } from '@utils/bookmarks';

interface IElement {
  waittime: string;
  destination: string;
  realtime: boolean;
  lastUpdateVehicule: string;
}

const STOP_SCHEDULE_URL = 'https://ws.infotbm.com/ws/1.0/get-realtime-pass/';

const WaitTimeCard = ({ line, destination, id, stopName }: IStopData) => {
  const [rawData, isLoading] = useAutoFetchJson(STOP_SCHEDULE_URL + id, 30);
  const [bookmark, setBookmark] = useState<boolean>(
    checkItem({ line: line, destination: destination, id: id, stopName: stopName })
  );
  const stopPointTheme = useContext(StopPointContext);

  const handleClose = useCallback(() => {
    stopPointTheme?.setStopPoint((sp) =>
      sp.filter(
        (e) =>
          e.id.localeCompare(id) ||
          e.line.localeCompare(line) ||
          e.destination.localeCompare(destination) ||
          e.stopName.localeCompare(stopName)
      )
    );
  }, [stopPointTheme, destination, line, id, stopName]);

  const handleBookmark = useCallback(
    () =>
      setBookmark((b) => {
        const newValue = !b;
        const data = { line: line, destination: destination, id: id, stopName: stopName };
        newValue ? addBookmarksItem(data) : delBookmarksItem(data);
        return newValue;
      }),
    [destination, id, line, stopName]
  );

  if (isLoading) return <Loading />;

  const data = formatRealtimeInfo(rawData as unknown as IformatRealtimeInfo);
  const dataSorted = data.sort((a, b) => hmsToSeconds(a.waittime) - hmsToSeconds(b.waittime));

  return (
    <div className='flex flex-col m-5 border border-slate-500'>
      <div className='flex flex-row m-1 justify-between'>
        <button onClick={handleBookmark}>
          {bookmark ? (
            <i className='fa-solid fa-star fa-2x text-yellow-300'></i>
          ) : (
            <i className='fa-regular fa-star fa-2x text-yellow-300'></i>
          )}
        </button>
        <button className='w-10 place-self-end' title='Close card' onClick={handleClose}>
          <i className='fa-solid fa-xmark fa-2x text-red-700'></i>
        </button>
      </div>
      <WaitTimeTable
        key={line + destination}
        line={line}
        destination={destination}
        stopName={stopName}
      >
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
