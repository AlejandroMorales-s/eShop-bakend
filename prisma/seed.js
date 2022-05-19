const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const prod = [
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
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
      {
        name : 'Adidas Superstar',
        brand: 'Adidas',
        category: 'sports',
        price: 799,
        description : 'Estos tenis de los años 70 fueron en sus orígenes un calzado que se utilizaba principalmente en el basketball. No mucho después se infiltraron en el mundo del skateboarding y el estilo callejero (por no mencionar la importante escena del hip-hop). Estos tenis para hombre mantienen el diseño clásico con un chasis recubierto en piel. Cuentan con todos los detalles originales, como el ribete en zigzag de las 3 Franjas y la famosa puntera de caucho.',
        stock: 10,
        colors: 'Black, White',
        sizes: '20,21,22,23,24,25,26,27,28,29',
        images: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d285610e30664900b857a7fa00ed0201_9366/Tenis_Superstar_Blanco_C77124_01_standard.jpg https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/788c369660914c649ddba41e0104a6a6_9366/Tenis_Superstar_Blanco_C77124_02_standard_hover.jpg https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/369f3e58453f4fa99336a41e01049f72_9366/Tenis_Superstar_Blanco_C77124_03_standard.jpg',
        discount: 5
      },
      {
        name : 'ADIDAS RACER TR21 X LEGO®',
        brand: 'Adidas',
        category: 'sports',
        price: 1899,
        description : 'Sal a la calle con estilo. Casuales con un toque deportivo, estos tenis adidas transforman las clásicas 3 Franjas en bloques de LEGO®. La mediasuela Cloudfoam Super proporciona amortiguación superior en cada paso y la suela de caucho aporta tracción en terrenos difíciles. Hechos parcialmente con contenido reciclado generado a partir de desechos de producción, tales como recortes de tela y desechos domésticos postconsumo, para evitar un mayor impacto ambiental al producir contenido virgen.',
        stock: 49,
        colors: 'Core White, Eqt Yellow',
        sizes: 'MX 2.5, MX 3, MX 3.5, MX 4, MX 4.5, MX 5, MX 5.5, MX 6, MX 6.5, MX 7, MX 7.5',
        images: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a378343253d4f73817cad7400b4b0b1_9366/Tenis_adidas_Racer_TR21_x_LEGO(r)_Blanco_GW3680_01_standard.jpg https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6de0c5963a954ae3bbc5ad7400b4be9e_9366/Tenis_adidas_Racer_TR21_x_LEGO(r)_Blanco_GW3680_02_standard_hover.jpg https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3384ac32cc3e45d9a2a9ad7400b4c637_9366/Tenis_adidas_Racer_TR21_x_LEGO(r)_Blanco_GW3680_03_standard.jpg',
        discount: 10
      },
      {
        name : 'NMD_R1',
        brand: 'Adidas',
        category: 'sports',
        price: 2299,
        description : 'Destácate en la selva de cemento. Inspirados en un famoso modelo de running de adidas de los 80, estos tenis NMD_R1 brindan un ajuste tipo calcetín gracias a su exterior de sujeción tejido. La amortiguación con retorno de energía Boost brinda comodidad en todo momento, y las distintivas inserciones en la mediasuela los hacen 100% NMD. Si todo esto no fuera suficiente para atraer todas las miradas, con seguridad los colores chic lo harán.',
        stock: 39,
        colors: 'Core Black, Cloud White',
        sizes: 'MX 2.5, MX 3, MX 3.5, MX 4, MX 4.5, MX 5, MX 5.5, MX 6, MX 6.5, MX 7, MX 7.5',
        images: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d55a5bfc35404d228b4eacb800d333c4_9366/Tenis_NMD_R1_Negro_GZ7922_01_standard.jpg https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78fb04f4a51f4cf78befacb800d340f1_9366/Tenis_NMD_R1_Negro_GZ7922_02_standard_hover.jpg https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54b29783e7b44b2b8966acb800d34725_9366/Tenis_NMD_R1_Negro_GZ7922_03_standard.jpg',
        discount: 0
      },
      {
        name : 'ADIDAS CLUBCOURT',
        brand: 'Adidas',
        category: 'sports',
        price: 1399,
        description : 'Envuelve tus pies con comodidad. Estos tenis adidas inspirados en el deporte blanco están diseñados para ofrecer una total comodidad en los días largos, desde la punta hasta el talón, desde la suela hasta el tobillo. La clave está en la plantilla Cloudfoam Comfort que proporciona amortiguación y ligereza desde el momento en que te los pones. Combina esa comodidad moderna con el estilo tradicional del calzado de tenis y obtienes unos tenis muy especiales.',
        stock: 54,
        colors: 'Core Black, Carbon',
        sizes: 'MX 2.5, MX 3, MX 3.5, MX 4, MX 4.5, MX 5, MX 5.5, MX 6, MX 6.5, MX 7, MX 7.5',
        images: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a71a8c215cc84e10adacad20003724b0_9366/Tenis_adidas_Clubcourt_Negro_H68182_01_standard.jpg https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7f0e78fd3b04deab9cbad2000373e02_9366/Tenis_adidas_Clubcourt_Negro_H68182_02_standard_hover.jpg https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f8ff7fcc72f24d80a45fad2000374c55_9366/Tenis_adidas_Clubcourt_Negro_H68182_03_standard.jpg',
        discount: 5
      },
      {
        name : 'Air Jordan 1 Mid',
        brand: 'Nike',
        category: 'sports',
        price: 129990,
        description : 'El calzado Air Jordan 1 Mid está inspirado en el primer AJ1, que ofrece a los retro fans de Jordan la oportunidad de seguir sus pasos de grandeza. El color flamante bordea los materiales clásicos y limpios, lo que le da un aire nuevo al diseño familiar.',
        stock: 13,
        colors: 'Core Black, Carbon',
        sizes: 'MX 2.5, MX 3, MX 3.5, MX 4, MX 4.5, MX 5, MX 5.5, MX 6, MX 6.5, MX 7, MX 7.5',
        images: 'https://nikeclprod.vteximg.com.br/arquivos/ids/161554-1000-1000/554724_177_A_PREM.jpg?v=637654410791370000 https://nikeclprod.vteximg.com.br/arquivos/ids/166566-1000-1000/554724_177_B_PREM.jpg?v=637655040654070000 https://nikeclprod.vteximg.com.br/arquivos/ids/186279-1000-1000/554724_177_E_PREM.jpg?v=637658528034630000',
        discount: 0
      },
      {
        name : 'Jordan Stay Loyal',
        brand: 'Nike',
        category: 'sports',
        price: 114990,
        description : 'COMODIDAD DURADERA CON ADN DE VUELO.Directo del pasado y hacia el futuro. El Jordan Stay Loyal se inspira del clásico Air Jordan 12 para crear un calzado fresco, pero a la vez conocido. Inspirado en la durabilidad del 12, cuenta con revestimientos de cuero grueso y tracción de espiguilla de goma que envuelve la punta, los costados y el talón.',
        stock: 10,
        colors: 'Core Black, Carbon',
        sizes: 'MX 2.5, MX 3, MX 3.5, MX 4, MX 4.5, MX 5, MX 5.5, MX 6, MX 6.5, MX 7, MX 7.5',
        images: 'https://nikeclprod.vteximg.com.br/arquivos/ids/207520-1000-1000/DB2884_001_A_PREM.jpg?v=637691524018330000 https://nikeclprod.vteximg.com.br/arquivos/ids/212508-1000-1000/DB2884_001_B_PREM.jpg?v=637692145307770000 https://nikeclprod.vteximg.com.br/arquivos/ids/227516-1000-1000/DB2884_001_E_PREM.jpg?v=637693007434600000',
        discount: 0
      },
      {
        name : 'Air Jordan 1 Mid SE',
        brand: 'Nike',
        category: 'sports',
        price: 134990,
        description : 'Destaca con un estilo de básquetbol atemporal. El cuero premium se pule, brilla y texturiza para brindar una versión fresca del calzado que comenzó todo. La amortiguación Air y el diseño clásico mantienen todo lo que más te gusta del original.',
        stock: 5,
        colors: 'Core Black, Carbon',
        sizes: 'MX 2.5, MX 3, MX 3.5, MX 4, MX 4.5, MX 5, MX 5.5, MX 6, MX 6.5, MX 7, MX 7.5',
        images: 'https://nikeclprod.vteximg.com.br/arquivos/ids/435791-1000-1000/DM1200_016_C_PREM.jpg?v=637842732995370000 https://nikeclprod.vteximg.com.br/arquivos/ids/437758-1000-1000/DM1200_016_D_PREM.jpg?v=637843285280100000 https://nikeclprod.vteximg.com.br/arquivos/ids/439707-1000-1000/DM1200_016_E_PREM.jpg?v=637843324233030000',
        discount: 0
      },
      {
        name : 'Tenis Puma Amare',
        brand: 'Puma',
        category: 'sports',
        price: 1699,
        description : 'La sencillez se ve elegante en estos tenis Puma ideales para correr Amare unisex. Con líneas limpias, una parte superior de tela transpirable, amortiguación cómoda, la llamativa marca PUMA y un estilo moderno que marca tendencia, este par pulido  es imprescindible para los buscadores activos de estilo.',
        stock: 57,
        colors: 'Negro',
        sizes: 'MX 2.5, MX 3, MX 3.5, MX 4, MX 4.5, MX 5, MX 5.5, MX 6, MX 6.5, MX 7, MX 7.5',
        images: 'https://www.innovasport.com/medias/IS-376209-01-1.jpg?context=bWFzdGVyfGltYWdlc3w4NTk2M3xpbWFnZS9qcGVnfGltYWdlcy9oMGEvaDFlLzEwODQ1NzQyOTIzODA2LmpwZ3xmY2I5OGIyYjc1MzRjYzJlMWUwMWIyNmNhMmE0MGZlZjJkYmMyZjYyMTRlYjMwYjEzNjhkODM2ODAxNGIzM2Yx https://www.innovasport.com/medias/IS-376209-01-2.jpg?context=bWFzdGVyfGltYWdlc3w3ODM5NHxpbWFnZS9qcGVnfGltYWdlcy9oMGMvaDJmLzEwODQ1NzQyMzk5NTE4LmpwZ3w5MDk4OTUzNWQ5OTIzNTkxMWM4NGM2Yjk1ODA1ODQ4YTJkOWFmOTc0OGVmYWY0MDk3Y2IxNTM0MDg2MmIzYzEy https://www.innovasport.com/medias/IS-376209-01-3.jpg?context=bWFzdGVyfGltYWdlc3w2MzM2M3xpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDQ0LzEwODQ1NzQxOTQwNzY2LmpwZ3xmYzAxMTA1NTI1OWM4OTkxMWEyZWJjOGRjZmRmNTg2NWY3MmFmMjliMmVkMGIzYzgzNDE1NzVkNDMyMmVmNTZl',
        discount: 10
      },
    ]
      prod.map(async (product) => {
        const { name, brand, category, price, description, stock, colors, sizes, images, discount } = product;
        return await prisma.products.create({
          data: {
            name,
            brand,
            category,
            price,
            description,
            stock,
            colors,
            sizes,
            images,
            discount
          }
        })
      })
    const hero1 = await prisma.HeroImgs.upsert({
      where: { name: 'Hero 1' },
      update: {},
      create: {
        name: 'Hero 1',
                images: 'https://http2.mlstatic.com/D_NQ_624434-MLA49984575915_052022-OO.webp',
            },
    });
    const hero2 = await prisma.HeroImgs.upsert({
      where: { name: 'Hero 2' },
      update: {},
      create: {
        name: 'Hero 2',
                images: 'https://http2.mlstatic.com/D_NQ_980620-MLA49973149181_052022-OO.webp',
            },
    });
    const hero3 = await prisma.HeroImgs.upsert({
      where: { name: 'Hero 3' },
      update: {},
      create: {
        name: 'Hero 3',
                images: 'https://http2.mlstatic.com/D_NQ_865061-MLA49973906953_052022-OO.webp',
            },
    });
    const hero4 = await prisma.HeroImgs.upsert({
      where: { name: 'Hero 4' },
      update: {},
      create: {
        name: 'Hero 4',
                images: 'https://http2.mlstatic.com/D_NQ_710710-MLA49636436790_042022-OO.webp',
            },
    });
    const hero5 = await prisma.HeroImgs.upsert({
      where: { name: 'Hero 5' },
      update: {},
      create: {
        name: 'Hero 5',
                images: 'https://http2.mlstatic.com/D_NQ_631396-MLA49973527365_052022-OO.webp',
            },
    });
    const hero6 = await prisma.HeroImgs.upsert({
      where: { name: 'Hero 6' },
      update: {},
      create: {
        name: 'Hero 6',
                images: 'https://http2.mlstatic.com/D_NQ_865258-MLA49075260514_022022-OO.webp',
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