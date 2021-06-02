const Category = require('../models/category.model');

exports.getAll = (req, res) => {
	Category.find().exec((err, categories) => {
		res.status(200).send(categories);
	});
};

exports.add = (req, res) => {
	const { name, amountOfProducts } = req.body;

	const category = new Category({
		name,
		amountOfProducts,
	});

	category.save((err) => {
		if (err) {
			console.log(err);
			return false;
		}

		return true;
	});
};

exports.update = (req, res) => {
	const { id, name, amountOfProducts } = req.body;

	Category.updateOne({ _id: id }, { name, amountOfProducts }).exec();
};

exports.delete = (req, res) => {
	Category.deleteOne({ _id: req.body.id }).exec();
};
