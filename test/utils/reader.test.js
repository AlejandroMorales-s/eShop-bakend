const fs = require("fs");
const Reader = require("./../../lib/utils/reader");

describe("Unit test for Reader class", () => {
    test("Read json file", () => {
        const products = Reader.readJsonFile("products.json");
        expect(products).not.toBe(false);
    });
});