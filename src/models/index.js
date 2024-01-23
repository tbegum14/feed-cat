const Sequelize = require("sequelize");
const CatModel = require('./cats')

const setUpDatabase = () => {
	const connection = new Sequelize("feed_cat", "postgres", "password", {
		host: "localhost",
		port: 5432,
		dialect: "postgres",
        logging: false
	});

    const Cat = CatModel(connection, Sequelize)
    connection.sync({alter: true})

    return { Cat }
};

module.exports = setUpDatabase();
