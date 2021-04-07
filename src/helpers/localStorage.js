//setting the item in localstorage
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//getting the item in localstorage
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//deleting the item in localstorage
export const deleteLocalStorage = (key) => {
  localStorage.removeItem(key);
};
