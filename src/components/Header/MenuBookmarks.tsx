import { getBookmarks } from '@utils/bookmarks';

interface IData {
  line: string;
  destination: string;
  id: string;
}

const MenuBookmarks = () => {
  const elements = getBookmarks();

  return (
    <div className='flex flex-col flex-1 max-h-[60vh] overflow-auto'>
      {elements.map((e: IData) => (
        <button
          data-id={e.id}
          data-line={e.line}
          data-destination={e.destination}
          key={e.line + e.destination + e.id}
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
