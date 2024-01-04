require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middleware/logger");
const { corsOptions } = require("./config/utils");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const verifyJwtAuth = require("./middleware/verifyjwt");

const PORT = process.env.PORT || 8000;

connectDB();

// to use formData: 'content-type': 'application/data'
app.use(express.urlencoded({ extended: false }));
// to use json data
app.use(express.json());

app.use(logger);

app.use(cors(corsOptions));

app.use("/api/login", require("./routes/api/login"));
app.use("/api/register", require("./routes/api/register"));
app.use("/api/events", verifyJwtAuth, require("./routes/api/events"));
app.use("/api/user", verifyJwtAuth, require("./routes/api/user"));
app.use("/api/", (req, res) => res.send("Welcome all volunteers API."));

app.use(function (err, req, res, next) {
	console.log(err);
	res.status(err.statusCode || 500).json({
		success: false,
		data: null,
		error: err.statusCode || 500,
		message: err.message ?? "Internal Server error",
	});
});

mongoose.connection.once("open", () => {
	console.log("Database successfully connected.");
	app.listen(PORT, () => {
		console.log(`listening on port ${PORT}`);
	});
});
