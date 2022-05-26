import useToggle from '@hooks/useToggle';
import { useCallback, useState } from 'react';
import MenuContainer from './MenuContainer';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [isVisibleMenu, toggle] = useToggle();

  const onClickSearch = useCallback(() => setVisibleModal(true), []);
  const handleMenu = useCallback(() => toggle(), [toggle]);
  const handleLeave = useCallback(() => toggle(), [toggle]);

  return (
    <>
      <nav className='flex flex-row justify-between items-center border-b-2 border-gray-300 mx-2 text-sm '>
        <button className='m-5' onClick={handleMenu}>
          <i className='fa-solid fa-bars fa-2x' />
        </button>
        {isVisibleMenu && <MenuContainer onMouseLeave={handleLeave} />}
        <i className='fa-solid fa-hourglass fa-2x mr-3'></i>
        REALTIME <br /> STOP <br /> BORDEAUX
        <div className='relative flex-auto mx-8 flex items-center'>
          <button
            className='w-full h-10 text-left drop-shadow-md input-primary'
            onClick={onClickSearch}
          >
            <i className='fa-solid fa-magnifying-glass pr-2' />
            Search ...
          </button>
        </div>
      </nav>
      {isVisibleModal && <SearchModal onClose={setVisibleModal} />}
    </>
  );
};

export default Navbar;
