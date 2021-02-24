export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    // "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function putAPI(path, req, reqMethod) {
  const requestOptions = {
    method: reqMethod,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(req),
  };
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, requestOptions);
  const data = await response.json();
  return data;
}
