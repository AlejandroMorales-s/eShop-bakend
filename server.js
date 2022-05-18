const ProductsController = require('./lib/controller/productsController');
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

//* Endpoint para buscar productos por nombre
app.get('/products/search/:name', async (req, res) => {
    const name = req.params.name;
    const products = await ProductsController.getProductsByName(name);
    res.json(products);
});

//* Endpoint para obtener hero images
app.get('/heroimgs', async (req, res) => {
    const heroImages = await prisma.HeroImgs.findMany({});
    res.json(heroImages);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});