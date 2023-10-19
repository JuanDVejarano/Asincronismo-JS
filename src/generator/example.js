function* gen() {
  yield "🫕";
  yield "🪨🪨🪨🪨";
  yield "🔥🔥🔥🔥";
  yield "Tssss 🥩🥩🥩";
  yield "🍖🍖🍖";
}

const g = gen();

console.log("Asar carnita");

console.log(g.next().value);

setTimeout(() => {
  console.log(g.next().value);
}, 3000);
setTimeout(() => {
  console.log(g.next().value);
}, 4000);
setTimeout(() => {
  console.log(g.next().value);
}, 2000);
setTimeout(() => {
  console.log(g.next().value);
}, 5000);
