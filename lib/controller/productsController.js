const Reader = require("../utils/reader");
const ProductsService = require("../service/productsService");

class ProductsController {
    static getProductsByName(name) {
        const products = Reader.readJsonFile("products.json");
        const productsByName = ProductsService.filterByName(products, name);
        return productsByName;
    }
    static getProductsByCategory(category) {
        const products = Reader.readJsonFile("products.json");
        const productsByCategory = ProductsService.filterByCategory(products, category);
        return productsByCategory;
    }
}
module.exports = ProductsController;