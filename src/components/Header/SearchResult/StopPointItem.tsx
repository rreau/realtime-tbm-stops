import { memo, useCallback, useContext, MouseEvent } from 'react';
import { PosItem } from '@constants/enum';
import { StopPointContext } from '@contexts/StopPointListener';

interface IStopPointItem {
  stopName: string;
  transport: string;
  destination: string;
  idSchedule: string;
  itemPosition: PosItem;
}

const StopPointItem = ({
  stopName,
  transport,
  destination,
  idSchedule,
  itemPosition,
}: IStopPointItem) => {
  const stopPointTheme = useContext(StopPointContext);

  let css =
    'w-full px-4 py-2 text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white';

  if (itemPosition === PosItem.TOP) css += ' rounded-t-lg';
  if (itemPosition === PosItem.BOTTOM) css += ' rounded-b-lg';
  if (itemPosition === PosItem.ALONE) css += ' rounded-t-lg rounded-b-lg';

  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;
      const id = target.dataset.id as string;
      const line = target.dataset.line as string;
      const destination = target.dataset.destination as string;
      const stopName = target.dataset.stopname as string;
      stopPointTheme?.setStopPoint((sp) => [
        ...sp,
        { id: id, line: line, destination: destination, stopName: stopName },
      ]);
    },
    [stopPointTheme]
  );

  return (
    <button
      key={transport + destination}
      data-stopname={stopName}
      data-id={idSchedule}
      data-line={transport}
      data-destination={destination}
      className={css}
      onClick={handleClick}
    >
      {transport} &nbsp; {destination}
    </button>
  );
};

export default memo(StopPointItem);
