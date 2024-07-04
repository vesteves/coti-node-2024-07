const express = require('express');
const getCep = require('./getcep.js');

const app = express();

app.listen(8000, async () => {
  console.log('Servidor ON');
  const result = await getCep('20761250');
  console.log(result);
});
