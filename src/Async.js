const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello world');
  }, 1000);
});
myPromise
  .then((n) => {
    console.log(n);
  })
  .catch((error) => {
    console.log(error);
  });
