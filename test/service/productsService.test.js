const Reader = require("./../../lib/utils/reader");
const products = Reader.readJsonFile("products.json");
const ProductsService = require("./../../lib/service/productsService");

describe("Unit test for ProductsService class", () => {

    test("Filter products by name", () => {
        const productsByName = ProductsService.filterByName(products, "iPhone");
        expect(productsByName[0].name).toBe("iPhone 13");
    });

    test("Filter products by category", () => {
        const productsByCategory = ProductsService.filterByCategory(products, "sports");
        expect(productsByCategory.length).toBe(8);
    });
});