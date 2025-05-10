export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
export const pushNotification = (message) => {
  const current = JSON.parse(localStorage.getItem('notifications')) || [];
  const newNote = {
    id: `n${Date.now()}`,
    message,
    time: new Date().toISOString()
  };
  localStorage.setItem('notifications', JSON.stringify([newNote, ...current]));
};
