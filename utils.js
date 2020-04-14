const delay = (time) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(true);
      }, time);
    } catch {
      reject(false);
    }
  });
};

module.exports = { delay };
