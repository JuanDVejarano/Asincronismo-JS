// Promesa para simular la respuesta de un llamado a 2 segundos
const fnAsync = () => {
  return new Promise(function (resolve, reject) {
    true
      ? setTimeout(() => {
          resolve("Async!!");
        }, 2000)
      : reject(new Error("Error"));
  });
};

//Aync y await no bloquean la ejecucion del codigo por ende siempre se va ejecutar el console log de before y after
const anoTherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello");
};

console.log("Before call function");
anoTherFn();
console.log("After call function");
