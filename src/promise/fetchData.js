import fetch from "node-fetch";

const API = " https://api.escuelajs.co/api/v1";

function getData(urlApi) {
  return fetch(urlApi);
}

getData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return getData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((products) => {
    console.log(products.title);
    return getData(`${API}/categories/${products.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((error) => console.log(error))
  .finally(console.log("Finally"));

console.log("Consumo API");

// getData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => {
//     console.log(products);
//   })
//   .then(() => {
//     console.log("Hola");
//   })
//   .catch((error) => console.log(error));
