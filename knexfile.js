const path = require('path');

const BASE_PATH = __dirname;

module.exports = {
	client: 'postgres',
	connection: {
		multipleStatements: true,
		host: process.env.HOST,
		database: process.env.DATABASE,
		user: process.env.USERNAME,
		password: process.env.PASSWORD,
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		directory: path.join(BASE_PATH, 'database', 'migrations'),
	},
	seeds: {
		directory: path.join(BASE_PATH, 'seeds'),
	},
};
