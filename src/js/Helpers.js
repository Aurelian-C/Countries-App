import { TIMEOUT_FETCH } from './Config';

const timeout = function (seconds) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(
          `Request took too long! Faild to fetch after ${seconds} seconds!`
        )
      );
    }, seconds * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const response = await Promise.race([fetchPro, timeout(TIMEOUT_FETCH)]);
    const data = await response.json();
    if (!response.ok)
      throw new Error(`${response.statusText}! Status: ${response.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
