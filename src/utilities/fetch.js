export default function getProducts() {
  const url = `${process.env.END_POINT}/public/data/product.json`;
  return fetch(url) //
    .then((res) => {
      if (!res.ok) {
        throw new Error(`fetch fail ${res.status}`);
      }
      return res.json();
    })
    .then((data) => data)
    .catch((e) => console.error(e.message));
}
