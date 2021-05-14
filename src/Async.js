function work() {
  const start = Date.now();
  for (let i = 1; i < 1000; i += 1) {
    const end = Date.now();
    console.log(`${end - start}ms`);
  }
}
work();
console.log('next work');
