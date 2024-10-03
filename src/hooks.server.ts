export async function handleFetch({ fetch, request }) {
  if (request.url.startsWith('http://localhost:8080/api')) {
    request = new Request(request.url.replace('http://localhost', 'http://back'), request);
  }
  return fetch(request);
}
