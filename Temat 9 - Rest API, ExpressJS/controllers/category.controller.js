const Category = require('../models/category.model');

const categories = [];

exports.getAll = (req, res) => {
	res.status(200).send(categories);
};

exports.add = (req, res) => {
	const { id, name, amountOfProducts } = req.body;

	const category = new Category(id, name, amountOfProducts);

	categories.push(category);
	res.status(201).send(category);
};

exports.update = (req, res) => {
	const { id, name, amountOfProducts } = req.body;

	const newCategory = new Category(id, name, amountOfProducts);
	const searchedIndex = categories.findIndex(
		(category) => category.id === id
	);

	categories.splice(searchedIndex, 1, newCategory);
	res.status(200).send(newCategory);
};

exports.delete = (req, res) => {
	const id = req.params.id;

	const searchedIndex = categories.findIndex(
		(category) => category.id === id
	);

	const deletedCategory = categories.splice(searchedIndex, 1);
	res.status(200).send(deletedCategory);
};
