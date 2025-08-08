// 1
new Promise((resolve) => {
  setTimeout(() => {
    resolve('Olá mundo');
  }, 2000);
});

// 2
new Promise((_, reject) => {
  setTimeout(() => {
    reject('Algo deu errado');
  }, 2000);
});

// 3
Promise.resolve(10)
  .then((num) => num * 5)
  .then(console.log)
  .catch(console.error);

// 4
function randomNumber() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(Math.floor(Math.random() * 100) + 1), 1000)
  );
}

// 5
Promise.resolve(5)
  .then((num) => num * 2)
  .then((num) => num + 10)
  .then((num) => num / 2)
  .then(console.log);

// 11
fetch('https://dummyjson.com/products/1')
  .then((res) => res.json())
  .then((product) => console.log(product.title));

// 12
function getProduct(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then(console.log);
}
