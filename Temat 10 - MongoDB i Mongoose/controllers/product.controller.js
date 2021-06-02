const Product = require('../models/product.model');

exports.getAll = (req, res) => {
	Product.find()
		.populate('category')
		.exec((err, products) => {
			res.status(200).send(products);
		});
};

exports.add = (req, res) => {
	const { name, description, price, category } = req.body;

	const product = new Product({
		name,
		description,
		price,
		category,
	});

	product.save((err) => {
		if (err) {
			console.log(err);
			return false;
		}

		return true;
	});
};

exports.update = (req, res) => {
	const { id, name, description, price } = req.body;

	Product.updateOne({ _id: id }, { name, description, price }).exec();
};

exports.delete = (req, res) => {
	Product.deleteOne({ _id: req.body.id }).exec();
};
