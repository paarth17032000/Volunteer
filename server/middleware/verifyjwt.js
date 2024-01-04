const jwt = require("jsonwebtoken");
const CreateError = require("http-errors");

const verifyJwtAuth = (req, res, next) => {
	if (!req.headers["authorization"]) return next(CreateError.Unauthorized());
	const token = req.headers["authorization"].split(" ")[1];
	if (!token) return next(CreateError.Unauthorized());
	jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY, (err, payload) => {
		if (err) {
			const errorMesssage = err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
			return next(CreateError.Unauthorized(errorMesssage));
		}
		req.payload = payload;
		next();
	});
};

module.exports = verifyJwtAuth;
