module.exports = req => {
  const { url, method, body, query } = req;
  delete body.password;

  const request = JSON.stringify(body);
  const params = JSON.stringify(query);

  const time = new Date().toUTCString();

  const inConsole = `request:
  {
    ${time},
    url: ${url},
    method: ${method},
    body: ${request}, 
    query_params: ${params}
  }`;

  const inFile = `{ ${time}, url: ${url}, method: ${method}, body: ${request}, query_params: ${params} }`;

  return { inConsole, inFile };
};
