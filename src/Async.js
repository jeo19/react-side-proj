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
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}
process();
