import { StopPointContext } from '@contexts/StopPointListener';
import { getBookmarks } from '@utils/bookmarks';
import { useCallback, useContext } from 'react';

interface IData {
  line: string;
  destination: string;
  id: string;
}

const MenuBookmarks = () => {
  const stopPointTheme = useContext(StopPointContext);
  const elements = getBookmarks();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const id = (e.currentTarget as HTMLButtonElement).dataset.id as string;
      const line = (e.currentTarget as HTMLButtonElement).dataset.line as string;
      const destination = (e.currentTarget as HTMLButtonElement).dataset.destination as string;
      const data = { id: id, line: line, destination: destination };
      stopPointTheme?.setStopPoint((sp) => [...sp, data]);
    },
    [stopPointTheme]
  );

  return (
    <div className='flex flex-col flex-1 max-h-[60vh] overflow-auto'>
      {elements.map((e: IData) => (
        <button
          data-id={e.id}
          data-line={e.line}
          data-destination={e.destination}
          key={e.line + e.destination + e.id}
          onClick={handleClick}
          className='border border-black button-primary flex flex-col'
        >
          <span className='text-left font-bold'>{e.line}</span>
          <span className='text-left text-xs '>{e.destination}</span>
        </button>
      ))}
    </div>
  );
};

export default MenuBookmarks;
