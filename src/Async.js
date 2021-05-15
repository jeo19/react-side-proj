function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 1; i < 100000; i += 1) {}
    const end = Date.now();
    console.log(`${end - start}ms`);
  }, 0);
}
console.log('Start work');
work();
console.log('next work');
