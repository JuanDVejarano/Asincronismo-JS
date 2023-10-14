const promise = new Promise(function (resolve, reject) {
  resolve("hey!");
});

const cows = 15;

const countCow = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cows on the farm");
  }
});

countCow
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error;
  })
  .finally(() => console.log("Finaly"));
