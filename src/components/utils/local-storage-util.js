export const setEnrichmentLocalStorageItem = (key, item) => {
  //item obj
  if (localStorage && key) {
    console.log(`Saving to local storage data`);
    localStorage.setItem(key, JSON.stringify(item));
  } else {
    return;
  }
};

export const getEnrichmentLocalStorageItem = (key) => {
  //item obj
  if (localStorage && key) {
    console.log(`Reading data from local storage`);
    const result = localStorage.getItem(key);
    return result;
  } else {
    return;
  }
};

export const setLocalStorageItem = (key, item) => {
  if (localStorage && key) {
    console.log(`Saving to local storage data with key ${key}`);
    localStorage.setItem(key, JSON.stringify(item));
  } else {
    return;
  }
};

export const getLocalStorageItem = (key) => {
  if (localStorage && key) {
    console.log(`Reading data from local storage by key ${key}`);
    const result = localStorage.getItem(key);
    return result;
  } else {
    return;
  }
};
