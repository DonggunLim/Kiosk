export const saveDataToStorage = (data) =>
  sessionStorage.setItem(new Date(), JSON.stringify(data));
