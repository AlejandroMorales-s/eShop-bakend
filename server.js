const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.json({message: 'eShop API'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});