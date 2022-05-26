import { IStopData } from '@constants/types';

const KEY = 'bookmarks';

const setBookmarks = (data: IStopData[]) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const getBookmarks = () => {
  const cookie = localStorage.getItem(KEY);
  if (!cookie) return [];
  return JSON.parse(cookie);
};

export const addBookmarksItem = (data: IStopData) => {
  const bookmarks = getBookmarks();
  const newBookmarks = [...bookmarks, data];
  setBookmarks(newBookmarks);
};

export const delBookmarksItem = (data: IStopData) => {
  const bookmarks = getBookmarks();
  const newBookmarks = bookmarks.filter(
    (e: IStopData) =>
      e.id.localeCompare(data.id) ||
      e.line.localeCompare(data.line) ||
      e.destination.localeCompare(data.destination) ||
      e.stopName.localeCompare(data.stopName)
  );

  if (newBookmarks.length !== 0) setBookmarks(newBookmarks);
  else localStorage.removeItem(KEY);
};

export const checkItem = (data: IStopData) => {
  const bookmarks = getBookmarks();
  return bookmarks.some(
    (e: IStopData) =>
      !(
        e.id.localeCompare(data.id) ||
        e.line.localeCompare(data.line) ||
        e.destination.localeCompare(data.destination) ||
        e.stopName.localeCompare(data.stopName)
      )
  );
};
