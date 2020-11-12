export const getBlobFromUrl = async (url) => {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw Error(
        `toDataUrl: Возникла проблема при получении данных из удаленного источника. Заголовки ответа: ${response.headers}`
      );
    }
    let blob = await response.blob();
    return blob;
  } catch (e) {
    throw e;
  }
};

export const getBase64FromBlob = (blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = (event) => {
    let result = reader.result;
    const base64 = result.split(",")[1];
    return base64;
  };
};

export const getBase64FromUrl = async (url) => {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw Error(
        `toDataUrl: Возникла проблема при получении данных из удаленного источника. Заголовки ответа: ${response.headers}`
      );
    }
    let blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (event) => {
      let result = reader.result;
      const base64 = result.split(",")[1];
      return base64;
    };
  } catch (e) {
    throw e;
  }
};
