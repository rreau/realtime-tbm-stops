import { useCallback, useState } from 'react';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isVisibleModal, setVisibleModal] = useState(false);

  const onClickSearch = useCallback(() => setVisibleModal(true), []);

  return (
    <>
      <nav className='flex flex-row justify-between items-center border-b-2 border-gray-300 mx-5'>
        <button className='m-5'>
          <i className='fa-solid fa-bars fa-2x' />
        </button>
        <i className='fa-solid fa-angles-right fa-2x m-2' />
        BIP BIP
        <div className='relative flex-auto mx-8 flex items-center'>
          <button
            className='w-full h-10 text-left drop-shadow-md input-primary'
            onClick={onClickSearch}
          >
            <i className='fa-solid fa-magnifying-glass pr-2' />
            Search ...
          </button>
        </div>
        <a
          className='m-5'
          href='https://github.com/NootNook/realtime-infotbm-stops'
          title='GitHub repository of website'
        >
          <i className='fa-brands fa-github fa-2x'></i>
        </a>
      </nav>
      {isVisibleModal && <SearchModal onClose={setVisibleModal} />}
    </>
  );
};

export default Navbar;
