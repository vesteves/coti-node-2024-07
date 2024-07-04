async function getCep(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => response);
}

module.exports = getCep;
