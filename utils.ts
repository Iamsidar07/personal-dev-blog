import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

export const urlFromParams = (key: string, val: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has(key)) {
    searchParams.set(key, val);
  } else {
    searchParams.append(key, val);
  }
  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
  return newUrl;
};

export const relativeDate = (date: Date) => dayjs(date).fromNow();
