import useCountdown from '@hooks/useCountdown';
import { hmsToSeconds, secondsToHms } from '@utils/convertTime';

interface IWaitTimeRow {
  destination: string;
  waittime: string;
  realtime: boolean;
  lastUpdate: string;
}

// Updates are allowed with less than 20 minutes
const LAST_UPDATE = 20 * 60 * 1000;

const WaitTimeRow = ({ destination, waittime, realtime, lastUpdate }: IWaitTimeRow) => {
  const timestampLastUpdate = Date.parse(lastUpdate);
  const timestampNow = Date.now();
  const diffTimestamp = timestampNow - timestampLastUpdate;

  if (realtime && diffTimestamp < LAST_UPDATE) {
    const diffSecond = Math.floor(diffTimestamp / 1000);
    const seconds = Math.max(0, hmsToSeconds(waittime) - diffSecond);
    waittime = secondsToHms(seconds);
  }

  const remainingTime = useCountdown(waittime);
  const cssRealtime = realtime ? 'text-green-500' : 'text-orange-500';
  const cssWaittime =
    waittime < '00:01:00'
      ? 'font-bold text-red-500'
      : waittime < '00:02:00'
        ? 'font-semibold text-orange-400'
        : 'text-black';

  return (
    <tr>
      <td className='p-3'>&gt; {destination}</td>
      <td className={`p-3 ${cssWaittime}`}>{remainingTime}</td>
      <td className={`p-3 ${cssRealtime}`}>{realtime ? 'Temps réel' : 'Temps estimé'}</td>
    </tr>
  );
};

export default WaitTimeRow;
