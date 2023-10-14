import fetch from "node-fetch";

const API = " https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const dataProduct = {
  title: "Pantalon para tiendas",
  price: 15,
  description: "Pantalon jean de bota campana",
  categoryId: 1,
  images: [
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.milenio.com%2Fo2qoMxNXRqapZG_AnVk1yRvWxGU%3D%2F300x0%2Fuploads%2Fmedia%2F2023%2F08%2F31%2Fpantalon-para-tiendas.jpeg&tbnid=Aro8pHg0bHwrVM&vet=12ahUKEwiCqbvAhPaBAxVNDWIAHVlwCZMQMygHegUIARCHAQ..i&imgrefurl=https%3A%2F%2Fwww.milenio.com%2Fvirales%2Fpantalon-para-tiendas-por-que-le-dicen-asi-y-que-capitulo-es&docid=v_PDAGrYFTQCHM&w=300&h=411&q=pantalon%20para%20tiendas&ved=2ahUKEwiCqbvAhPaBAxVNDWIAHVlwCZMQMygHegUIARCHAQ",
  ],
};

postData(`${API}/products/`, dataProduct)
  .then((response) => response.json())
  .then((product) => console.log(product));
