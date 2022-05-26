import { useCallback, useRef, useState, MouseEvent, ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import StopAreaList from './SearchResult/StopAreaList';

interface ISearchModal {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ onClose }: ISearchModal) => {
  const ref = useRef(null);

  const [search, setSearch] = useState('');

  const handleClose = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      onClose(ref.current !== e.target);
    },
    [onClose]
  );

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  return createPortal(
    <div
      className='fixed flex items-center justify-center top-0 left-0 w-full h-full z-50 bg-neutral-700 bg-opacity-30'
      ref={ref}
      onClick={handleClose}
    >
      <div className='flex flex-col p-4 w-11/12 lg:w-8/12 h-3/4 bg-white rounded-lg shadow'>
        <div className='relative flex items-center mb-5'>
          <i className='fa-solid fa-magnifying-glass absolute pl-3'></i>
          <input
            className='w-full pl-10 input-primary'
            placeholder='Search...'
            onChange={handleSearch}
            autoFocus
          />
        </div>
        <div className='flex flex-col items-start overflow-auto'>
          {search && <StopAreaList search={search} />}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SearchModal;
