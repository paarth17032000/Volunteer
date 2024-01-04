const { default: mongoose } = require("mongoose");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

const userDetails = async (req, res) => {
	try {
		const token = req.headers["authorization"].split(" ")[1];
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
		const userEmail = decoded.userInfo.email;
		if (!userEmail)
			return res.status(401).json({
				success: false,
				data: null,
				error: 401,
				message: "Unauthorized",
			});
		const foundUser = await User.findOne({ email: userEmail });
		if (!foundUser) {
			res.status(404).json({
				success: false,
				data: null,
				error: 400,
				message: "User is invalid.",
			});
		}
		res.status(200).json({
			success: true,
			data: foundUser,
			error: "",
			message: "",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			data: null,
			error: 500,
			message: err.message,
		});
	}
};

module.exports = { userDetails };
