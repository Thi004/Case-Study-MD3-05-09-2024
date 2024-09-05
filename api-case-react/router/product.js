const express = require('express');
const router = express.Router();

const products = [
    {
        id: 1,
        name: 'Shoes',
        price: 100,
        quantity: 10,
        category: 'Men' ,
        images: ["https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d2576ffd7974712bff9a83e14350b91_9366/adizero-cybersonic-women.jpg",]
    },
    {
        id: 2,
        name: 'Shoes',
        price: 200,
        quantity: 20,
        category: 'Women',
        images: ["https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/476b0d6d9fb14212987544548b32ed57_9366/adizero-sl2-running-shoes.jpg"]
    },
    {
        id: 3,
        name: 'Shoes',
        price: 300,
        quantity: 30,
        category: 'Kid',
        images: ['https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/51750192b5a941eb8866d87bf13c5921_9366/codechaos-boa-25-shoes.jpg']
    }
];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.post("/", (req, res) => {
    const newProduct = {
        id: Date.now(), // Sử dụng timestamp để tạo id duy nhất
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category,
        images: req.body.images
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index].name = req.body.name;
        products[index].price = req.body.price;
        products[index].quantity = req.body.quantity;
        products[index].category = req.body.category;
        products[index].images = req.body.images;
        res.send(products[index]);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.send({ message: 'Product deleted', id: id });
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

module.exports = router;
