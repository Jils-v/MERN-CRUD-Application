require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");

module.exports = () => {
	const connection = mongoose
		.connect(process.env.MONGODB_URI,
			{
				useNewUrlParser: true,
				ssl: true,
				sslValidate: true,
				sslCA: `global-bundle.pem`
			})
		.then((result) => console.log("Connected to database"))
		.catch((err) => console.log("could not connect to database", err));
};
