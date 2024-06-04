export default function handleResponseFromAPI(promise) {
  return promise
    .then((resolve) => {
      resolve({ status: 200, body: 'Success' });
    })
    .catch((reject) => {
      reject(new Error());
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
