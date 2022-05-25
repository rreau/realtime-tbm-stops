import useToggle from '@hooks/useToggle';
import { useCallback } from 'react';
import MenuBookmarks from './MenuBookmarks';

const MenuContainer = () => {
  const [toggleBookmark, toggle] = useToggle(false);

  const handleBookmarks = useCallback(() => toggle(), [toggle]);

  return (
    <div
      className='fixed z-10 left-0 w-[266px] max-w-[266px] h-[calc(100%-76px)] bg-white shadow-xl'
      style={{ top: '76px' }}
    >
      <div className='flex flex-col m-3'>
        <a href='https://www.infotbm.com/' className='flex items-center button-primary'>
          <i className='fa-solid fa-right-to-bracket mr-5'></i>
          <span>
            Revenir vers <span className='font-bold'>infotbm</span>
          </span>
        </a>
        <button className='flex items-center button-primary' onClick={handleBookmarks}>
          <i className='fa-solid fa-star mr-5'></i>
          Mes favoris
        </button>
        {toggleBookmark && <MenuBookmarks />}
        <div className='flex justify-center absolute bottom-0 left-0 w-full'>
          <a
            className='button-primary'
            href='https://github.com/NootNook/realtime-infotbm-stops'
            title='GitHub repository of website'
          >
            <div className='flex items-center'>
              <i className='fa-brands fa-github fa-2x mr-2'></i>
              Code source
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
