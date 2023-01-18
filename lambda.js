const serverless = require("serverless-http");
const express = require("express");

const routes = require('./server/routes');
const app = express();


app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
	return res.status(404).json({
		error: "Route Not Found",
	});
});

app.use(
	(err, req, res, next) => {
		console.log(err);

		return res.status(500).json({
			status: "error",
			message: `Internal server error - ${err.message}`
		});
	}
);

module.exports.handler = serverless(app);