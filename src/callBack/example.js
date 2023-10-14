// Callback para una suma
function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log("suma y resta Resta");
console.log(calc(3, 2, sum));
console.log(calc(3, 2, subtract));

// Callbak con para saludar con setTimeOut

function greatting(name) {
  console.log(`Hola ${name}`);
}

console.log("saludar personas y asar carnita");

setTimeout(greatting, 1000, "Juan D");
setTimeout(greatting, 1000, "Juan Jo");

// callback para asar carnita

let asador = "🫕";

function ponerAsador(callback) {
  console.log(asador);
  setTimeout(() => ponerCarbon(callback), 3000);
}

function ponerCarbon(callback) {
  asador = "🪨🪨🪨🪨";
  console.log(asador);
  setTimeout(() => prenderCarbon(callback), 4000);
}

function prenderCarbon(callback) {
  asador = "🔥🔥🔥🔥";
  console.log(asador);
  setTimeout(() => echarCarne(callback), 2000);
}

function echarCarne(callback) {
  asador = "Tssss 🥩🥩🥩";
  console.log(asador);
  setTimeout(callback, 5000);
}

function comerCarnita(callback) {
  asador = "🍖🍖🍖";
  console.log(asador);
}

ponerAsador(comerCarnita);
