import useToggle from '@hooks/useToggle';
import { memo, useCallback, useState, MouseEvent } from 'react';
import StopPointList from './StopPointList';

interface IStopAreaItem {
  id: string;
  title: string;
}

const StopAreaItem = ({ id, title }: IStopAreaItem) => {
  const [stopAreaID, setStopArea] = useState('');
  const [toggleState, toggle] = useToggle(false);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setStopArea(!toggleState ? ((e.target as HTMLButtonElement).dataset.id as string) : '');
      toggle();
    },
    [toggle, toggleState]
  );

  const css =
    'text-left py-2.5 px-5 text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700';

  return (
    <>
      <button data-id={id} className={css} onClick={handleClick}>
        {toggleState ? (
          <i className='fa-solid fa-caret-down pr-2'> </i>
        ) : (
          <i className='fa-solid fa-caret-right pr-2'></i>
        )}
        {title}
      </button>
      <div className='flex flex-col'>
        {stopAreaID && <StopPointList key={stopAreaID} id={stopAreaID} />}
      </div>
    </>
  );
};

export default memo(StopAreaItem);
