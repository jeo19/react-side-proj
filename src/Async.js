function incrementAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'valueIsFive';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}
incrementAndPrint(0).then((n) => {
  console.log(`result:${n}`);
});
