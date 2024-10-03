export async function handleFetch({ fetch, request }) {
  if (request.url.startsWith('http://localhost:8080/api')) {
    request = new Request(
      request.url.replace('http://localhost:8080/api', 'http://back:8080'),
      request,
    );
  }
  return fetch(request);
}
