const Product = require('../models/product.model');

const products = [];

exports.getAll = (req, res) => {
	res.status(200).send(products);
};

exports.add = (req, res) => {
	const { id, name, description, price } = req.body;

	const product = new Product(id, name, description, price);

	products.push(product);
	res.status(201).send(product);
};

exports.update = (req, res) => {
	const { id, name, description, price } = req.body;

	const newProduct = new Product(id, name, description, price);
	const searchedIndex = products.findIndex((product) => product.id === id);

	products.splice(searchedIndex, 1, newProduct);
	res.status(200).send(newProduct);
};

exports.delete = (req, res) => {
	const id = req.params.id;

	const searchedIndex = products.findIndex((product) => product.id === id);

	const deletedProduct = products.splice(searchedIndex, 1);
	res.status(200).send(deletedProduct);
};
