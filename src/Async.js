function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function process() {
  console.log('work start');
  await sleep(3000);
  console.log('working');
}
process().then(() => {
  console.log('work done');
});
