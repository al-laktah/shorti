function SERVER_ENDPOINT() {
  // The API is served from the same domain as the frontend, under /api/.
  // During development "proxy" in package.json forwards it to Flask.
  return "/";
}

export default SERVER_ENDPOINT;
