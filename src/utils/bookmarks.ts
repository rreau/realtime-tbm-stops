interface IData {
  line: string;
  destination: string;
  id: string;
}

const KEY = 'bookmarks';

const setBookmarks = (data: IData[]) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const getBookmarks = () => {
  const cookie = localStorage.getItem(KEY);
  if (!cookie) return [];
  return JSON.parse(cookie);
};

export const addBookmarksItem = (data: IData) => {
  const bookmarks = getBookmarks();
  const newBookmarks = [...bookmarks, data];
  setBookmarks(newBookmarks);
};

export const delBookmarksItem = (data: IData) => {
  const bookmarks = getBookmarks();
  const newBookmarks = bookmarks.filter(
    (e: IData) => e.id !== data.id && e.line !== data.line && e.destination !== data.destination
  );

  if (newBookmarks.length !== 0) setBookmarks(newBookmarks);
  else localStorage.removeItem(KEY);
};

export const checkItem = (data: IData) => {
  const bookmarks = getBookmarks();
  return bookmarks.some(
    (e: IData) => e.id === data.id && e.line === data.line && e.destination === data.destination
  );
};
