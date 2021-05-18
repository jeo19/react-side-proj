const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello world');
  }, 1000);
  setTimeout(() => {
    reject(new Error());
  }, 2000);
});
myPromise
  .then((n) => {
    console.log(n);
  })
  .catch((error) => {
    console.log(error);
  });
console.log('work start');
