export const setItemLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
