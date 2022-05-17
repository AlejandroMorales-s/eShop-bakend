const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

//* Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const { application } = require('express');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'eShop API'});
});

//* Endpoint para listar todos los produtos
app.get('/products', async (req, res) => {
    const allProducts =  await prisma.Products.findMany({});
    res.json(allProducts);
});

//* Endpoint para listar un producto por id
app.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await prisma.Products.findUnique({where: {id: parseInt(id)}});
    res.json(product);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});