const Reader = require("../utils/reader");
const products = Reader.readJsonFile("products.json");

class ProductsService {
    static filterByName(products, name) {
        const result =  products.filter(product => {
            if (product.name.toLowerCase().includes(name.toLowerCase())) {
                return product;
            }
        });
        return result;
    }
    static filterByCategory(products, category) {
        const result =  products.filter(product => {
            if (product.category.toLowerCase().includes(category.toLowerCase())) {
                return product;
            }
        });
        return result;
    }
}

module.exports = ProductsService;