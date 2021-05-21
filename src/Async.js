function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const getDog = async () => {
  await sleep(1000);
  return 'Dog';
};
const getRabbit = async () => {
  await sleep(1000);
  return 'Rabbit';
};
const getTurtle = async () => {
  await sleep(1000);
  return 'Turtle';
};
async function process() {
  const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(dog);
  console.log(rabbit);
  console.log(turtle);
}
process();
