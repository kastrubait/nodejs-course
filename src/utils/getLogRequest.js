module.exports = req => {
  const { url, method, body, query } = req;
  delete body.password;

  const request = JSON.stringify(body);
  const params = JSON.stringify(query);

  const time = new Date().toUTCString();

  const toConsole = `request:
  {
    ${time},
    url: ${url},
    method: ${method},
    body: ${request}, 
    query_params: ${params}
  }`;

  const toFile = `{ ${time}, url: ${url}, method: ${method}, body: ${request}, query_params: ${params} }`;

  return { toConsole, toFile };
};
