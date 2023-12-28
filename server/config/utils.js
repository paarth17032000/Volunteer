const whitelist = ["http://localhost:8000", "https://www.google.com", "http://localhost:3000"];

const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not Allowed By Cors."));
		}
	},
	optionsSuccessStatus: 200,
};

module.exports = { corsOptions };
