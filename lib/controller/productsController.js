const Reader = require("../utils/reader");
const ProductsService = require("../service/productsService");

class ProductsController {
    static getProductsByName(name) {
        const products = Reader.readJsonFile("products.json");
        const productsByName = ProductsService.filterByName(products, name);
        return productsByName;
    }
}
module.exports = ProductsController;