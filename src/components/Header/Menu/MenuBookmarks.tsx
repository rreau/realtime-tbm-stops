import { IStopData } from '@constants/types';
import { StopPointContext } from '@contexts/StopPointListener';
import { getBookmarks } from '@utils/bookmarks';
import { useCallback, useContext, MouseEvent } from 'react';

const MenuBookmarks = () => {
  const stopPointTheme = useContext(StopPointContext);
  const elements = getBookmarks();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const id = (e.currentTarget as HTMLButtonElement).dataset.id as string;
      const line = (e.currentTarget as HTMLButtonElement).dataset.line as string;
      const destination = (e.currentTarget as HTMLButtonElement).dataset.destination as string;
      const stopName = (e.currentTarget as HTMLButtonElement).dataset.stopname as string;
      const data = { id: id, line: line, destination: destination, stopName: stopName };
      stopPointTheme?.setStopPoint((sp) => [...sp, data]);
    },
    [stopPointTheme]
  );

  return (
    <div className='flex flex-col flex-1 max-h-[60vh] overflow-auto'>
      {elements.map((e: IStopData) => (
        <button
          data-id={e.id}
          data-line={e.line}
          data-destination={e.destination}
          data-stopname={e.stopName}
          key={e.line + e.destination + e.id}
          onClick={handleClick}
          className='border border-black button-primary flex flex-col'
        >
          <span className='text-left font-bold'>
            {e.stopName} - {e.line}
          </span>
          <span className='text-left text-xs '>{e.destination}</span>
        </button>
      ))}
    </div>
  );
};

export default MenuBookmarks;
