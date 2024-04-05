export const getProducts = () => fetcher(`/public/data/product.json`);

const fetcher = (path) => {
  return new Promise((resolve, reject) => {
    fetch(path) //
      .then((response) => {
        if (!response.ok) {
          reject(
            new Error(
              `${response.url} ${response.status} ${response.statusText}`
            )
          );
        }
        resolve(response.json());
      })
      .catch((error) => console.error(error.message));
  });
};
