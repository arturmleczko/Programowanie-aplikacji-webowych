const express = require('express');
const dbConfig = require('./config/db.config');

const app = express();
app.use(express.json());

const db = require('./models');
db.mongoose
	.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true,
		useCreateIndex: true,
	})
	.then(() => console.log('Successfully connected to MongoDB'))
	.catch((err) => {
		console.error('Connection error', err);
		process.exit();
	});

require('./routes/product.routes')(app);
require('./routes/category.routes')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
