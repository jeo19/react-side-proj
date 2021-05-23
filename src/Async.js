function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const getDog = async () => {
  await sleep(1000);
  return 'Dog';
};
const getRabbit = async () => {
  await sleep(500);
  return 'Rabbit';
};
const getTurtle = async () => {
  await sleep(1000);
  return 'Turtle';
};
async function process() {
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}
process();
