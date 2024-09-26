export const getProducts = () => fetcher(`/public/data/product.json`);

const fetcher = (path) => {
  return fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `${response.url} ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => console.log(error.message));
};
