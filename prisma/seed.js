const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const iphone13 = await prisma.products.upsert({
      where: { name: 'iPhone 13' },
      update: {},
      create: {
        name: 'iPhone 13',
        brand: 'Apple',
				category: 'technology',
				price: 17999,
                description: 'iPhone 13 is the latest iPhone smartphone. It features a 13.3-inch Super Retina XDR OLED display with a resolution of 1,920 x 1,080 pixels, and a notch-style bezel. It has a 12MP primary camera and an A12 Bionic chip with machine learning capabilities. It has a wireless charging pad and a dual-camera system with a rear camera. It has a fingerprint sensor and a TrueDepth camera. It has a dual-SIM (Nano-SIM) and a dual-standby battery that lasts up to 10 hours.',
                stock: 10,
                colors: 'Verde, Azul, Rosa, Azul Medianoche, Blanco Estelar, Product Red',
                sizes: '6.1” o 5.4”',
                images: 'https://webonline.macstore.mx/img/sku/IPHONE475_FZ.jpg https://webonline.macstore.mx/img/sku/IPHONE475_Z2.jpg https://webonline.macstore.mx/img/sku/IPHONE475_Z3.jpg https://webonline.macstore.mx/img/sku/IPHONE475_Z6.jpg',
                discount: 0
            },
    });
    const redmiNote10S = await prisma.products.upsert({
      where: { name: 'Xiaomi Redmi Note 10S' },
      update: {},
      create: {
        name: 'Xiaomi Redmi Note 10S',
        brand: 'Xiaomi',
				category: 'technology',
				price: 5100,
                description: 'Desafía tus límites con la Serie Redmi Note 10. Desde la Antártida hasta el espacio, la serie Redmi Note ha conquistado el mundo. Nuestra actitud es desafiar y superar las expectativas una y otra vez. ¡Ahora es tu turno! Desafía tus límites y descubre de lo que eres capaz.',
                stock: 94,
                colors: 'Ocean Blue, Onyx Gray, Pebble White',
                sizes: '6,43"',
                images: 'https://xiaomimx.vtexassets.com/arquivos/ids/157443-800-auto?v=637805832504800000&width=800&height=auto&aspect=true https://xiaomimx.vtexassets.com/arquivos/ids/157444-800-auto?v=637805832616030000&width=800&height=auto&aspect=true https://xiaomimx.vtexassets.com/arquivos/ids/157445-800-auto?v=637805832787300000&width=800&height=auto&aspect=true',
                discount: 13
            },
    });
    const samsungGalaxyZFlip3 = await prisma.products.upsert({
      where: { name: 'Samsung Galaxy Z Flip3' },
      update: {},
      create: {
        name: 'Samsung Galaxy Z Flip3',
        brand: 'Samsung',
				category: 'technology',
				price: 24999,
                description: 'Se pliega en tu bolsillo. Se mete en tu cartera. Se desliza dentro de tus jeans más ceñidos. Luego, puedes sacarlo y se despliega en un teléfono inteligente 5G con pantalla completa que se dobla a tus ángulos favoritos. Si parece que tratamos de rediseñar el teléfono, lo hicimos. Ahora es un manifiesto.',
                stock: 58,
                colors: 'Cream, Phantom Black, Green, Lavender',
                sizes: '6.7"',
                images: 'https://samsungmx.vtexassets.com/arquivos/ids/180914-800-auto?width=800&height=auto&aspect=true https://samsungmx.vtexassets.com/arquivos/ids/180913-800-auto?width=800&height=auto&aspect=true https://samsungmx.vtexassets.com/arquivos/ids/180916-800-auto?width=800&height=auto&aspect=true',
                discount: 9
            },
    });
    const motoE20 = await prisma.products.upsert({
      where: { name: 'Moto E20' },
      update: {},
      create: {
        name: 'Moto E20',
        brand: 'Motorola',
				category: 'technology',
				price: 2600,
                description: 'La pantalla de Moto e20 es de 6.5 pulgadas, con una resolución de 1920 x 1080 píxeles, con una densidad de píxeles de 1,441, y una resolución de píxeles de 16. Por lo tanto, la pantalla de Moto e20 es de una resolución de 1920 x 1080 píxeles, con una densidad de píxeles de 1,441, y una resolución de píxeles de 16. Por lo tanto, la pantalla de Moto e20 es de una resolución de 1920 x 1080 píxeles, con una densidad de píxeles de 1,441, y una resolución de píxeles de 16.',
                stock: 39,
                colors: 'Gray, Aqua',
                sizes: '6.5"',
                images: 'https://mxmoto.vtexassets.com/arquivos/ids/165543-800-auto?v=637697578711670000&width=800&height=auto&aspect=true https://mxmoto.vtexassets.com/arquivos/ids/165544-800-auto?v=637697578958270000&width=800&height=auto&aspect=true https://mxmoto.vtexassets.com/arquivos/ids/165547-800-auto?v=637697579483570000&width=800&height=auto&aspect=true',
                discount: 25
            },
    });
    const huaweiNova8i = await prisma.products.upsert({
      where: { name: 'Huawei Nova 8i' },
      update: {},
      create: {
        name: 'Huawei Nova 8i',
        brand: 'Huawei',
				category: 'technology',
				price: 5999,
                description: 'Heredando toda la estética premium y los colores dinámicos de la serie nova, HUAWEI nova 8i te brinda una experiencia visual excepcional y una sensación de agarre superior. La refinada artesanía NCVM produce una magnífica exhibición de color y sombra, mientras que la curvatura 4D ofrece bordes redondeados diseñados con precisión, para un toque ultra suave.',
                stock: 39,
                colors: 'Blue',
                sizes: '6.67"',
                images: 'https://shop-cdncname.huawei.com/mx/product/6941487225149/800_800_C324D443219C4917546DC215ADFE5F31EF2930924B2A2A14mp.png https://shop-cdncname.huawei.com/mx/product/6941487225149/group/800_800_7E0227DFC9346C9890434378208BC08132402C760C39486E.jpg https://shop-cdncname.huawei.com/mx/product/6941487225149/group/800_800_43BAC979CF526120CF3A194A57867E7C53E6E3377FD1DAFE.jpg',
                discount: 10
            },
    });
    const SamsungGalaxyNote10Plus = await prisma.products.upsert({
      where: { name: 'Samsung Galaxy Note10+' },
      update: {},
      create: {
        name: 'Samsung Galaxy Note10+',
        brand: 'Samsung',
				category: 'technology',
				price: 12999,
                description: 'El Galaxy Note 10+ supera toda experiencia anterior con un smartphone. Podrás crear fotografías profesionales, dibujar con un lápiz inteligente de última generación, trabajar conectado a tu computadora y divertirte con los mejores videojuegos en alta definición sin interrupciones.',
                stock: 87,
                colors: 'Aura Glow, Aura Black',
                sizes: '6.8"',
                images: 'https://images.samsung.com/is/image/samsung/assets/mx/smartphones/galaxy-note10/images/gallery/galaxy-note10-plus_gallery-color_note10-plus-c1-01.jpg https://images.samsung.com/is/image/samsung/assets/mx/smartphones/galaxy-note10/images/gallery/galaxy-note10-plus_gallery-color_note10-plus-c1-02.jpg https://images.samsung.com/is/image/samsung/assets/mx/smartphones/galaxy-note10/images/gallery/galaxy-note10-plus_gallery-color_note10-plus-c1-06.jpg',
                discount: 6
            },
    });
    const honor50Lite = await prisma.products.upsert({
      where: { name: 'Honor 50 Lite' },
      update: {},
      create: {
        name: 'Honor 50 Lite',
        brand: 'Honor',
				category: 'technology',
				price: 5200,
                description: 'El HONOR 50 Lite está disponible en Azul lumina, Plata sideral y Negro interestelar. El diseño permite que las luces se reflejen sobre las curvas icónicas mientras que el arco 3D ofrece un mejor agarre.',
                stock: 107,
                colors: 'Azul lumina, Plata sideral, Negro interestelar',
                sizes: '6.67"',
                images: 'https://img02.honorfile.com/ap/mx/honor/pms/product/6936520800308/group/428_428_24E02206C059B212F4006FB2B0338618E1A1C03E7CC01D6D.png https://img02.honorfile.com/ap/mx/honor/pms/product/6936520800308/group/428_428_BFD371DF618C7CEF348AC56C8FC46533586852037D5499CF.png https://img02.honorfile.com/ap/mx/honor/pms/product/6936520800308/group/428_428_62143C1C34E5159FB22C112AFA9AD8DE3827159D22428EE4.png',
                discount: 0
            },
    });
    const redmiNote10Pro = await prisma.products.upsert({
      where: { name: 'Xiaomi Redmi Note 10 Pro' },
      update: {},
      create: {
        name: 'Xiaomi Redmi Note 10 Pro',
        brand: 'Xiaomi',
				category: 'technology',
				price: 8100,
                description: 'Fotografía profesional en tu bolsillo. Descubre infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Pon a prueba tu creatividad y juega con la iluminación, diferentes planos y efectos para obtener grandes resultados.',
                stock: 49,
                colors: 'Onyx Gray',
                sizes: '6,67"',
                images: 'https://xiaomimx.vtexassets.com/arquivos/ids/157198-800-auto?v=637721083640770000&width=800&height=auto&aspect=true https://xiaomimx.vtexassets.com/arquivos/ids/157199-800-auto?v=637721083650630000&width=800&height=auto&aspect=true https://xiaomimx.vtexassets.com/arquivos/ids/157200-800-auto?v=637721083660800000&width=800&height=auto&aspect=true',
                discount: 5
            },
    });
    const xiaomiPocophonePocoX4Pro = await prisma.products.upsert({
      where: { name: 'Xiaomi Pocophone Poco X4 Pro' },
      update: {},
      create: {
        name: 'Xiaomi Pocophone Poco X4 Pro',
        brand: 'Xiaomi',
				category: 'technology',
				price: 5399,
                description: 'La serie POCO X ahora tiene una pantalla AMOLED y es compatible con DCI-P3. La gama de colores ampliada produce detalles enriquecidos, lo que proporciona un aspecto y una sensación cinematográfica. La apertura de la cámara frontal es de solo 2,96 mm, lo que amplía tu campo de visión.',
                stock: 28,
                colors: 'Laser Blue, Laser Black, Laser Yellow',
                sizes: '6,67"',
                images: 'https://doto.vtexassets.com/arquivos/ids/190837-800-auto?v=637820292584230000&width=800&height=auto&aspect=true https://doto.vtexassets.com/arquivos/ids/193985-800-auto?v=637842542756570000&width=800&height=auto&aspect=true https://doto.vtexassets.com/arquivos/ids/193986-800-auto?v=637842542979830000&width=800&height=auto&aspect=true',
                discount: 7
            },
    });
    const iphone8 = await prisma.products.upsert({
      where: { name: 'iPhone 8' },
      update: {},
      create: {
        name: 'iPhone 8',
        brand: 'Apple',
				category: 'technology',
				price: 4799,
                description: 'iOS es el sistema operativo móvil más personal y seguro del mundo. Trae funcionalidades avanzadas y está diseñado para proteger tu privacidad. Las funcionalidades de accesibilidad ayudan a las personas con alguna discapacidad a aprovechar al máximo su nuevo iPhone 8. Gracias al soporte integrado para visión, audición, motricidad y aprendizaje, puedes disfrutar como nunca del dispositivo más personal del mundo.',
                stock: 15,
                colors: 'Gold, Silver, Space Gray, Product Red',
                sizes: '4,7"',
                images: 'https://http2.mlstatic.com/D_NQ_NP_2X_782066-MLA43694099524_102020-F.webp https://http2.mlstatic.com/D_NQ_NP_2X_788338-MLA43694219150_102020-F.webp https://http2.mlstatic.com/D_NQ_NP_2X_956636-MLA43694219151_102020-F.webp',
                discount: 7
            },
    });


    console.log('New products added');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();