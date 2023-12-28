const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
	try {
		const { name, email, password, phoneNumber } = req.body;
		if (!name || !email || !password || !phoneNumber)
			return res.status(400).json({
				success: false,
				data: null,
				error: 409,
				message: "Name, Email, Password and Phone are required.",
			});
		const foundUserByEmail = await User.findOne({ email });
		const foundUserByNumber = await User.findOne({ phoneNumber });
		if (foundUserByEmail || foundUserByNumber)
			return res.status(409).json({
				success: false,
				data: null,
				error: 409,
				message: "User with this email or number already exists.",
			});
		const hashPwd = await bcrypt.hash(password, 10);
		const result = await User.create({
			name,
			email,
			password: hashPwd,
			phoneNumber,
			eventsRegistered: [],
			eventsCreated: [],
		});
		res.status(201).json({
			success: true,
			data: result,
			error: "",
			message: "",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			data: null,
			error: 500,
			message: err.message,
		});
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password)
			return res.status(400).json({
				success: false,
				data: null,
				error: 409,
				message: "Email and Password are required.",
			});
		const foundUser = await User.findOne({ email });
		if (!foundUser)
			return res.status(409).json({
				success: false,
				data: null,
				error: 409,
				message: "User with this email already exists.",
			});
		const match = await bcrypt.compare(password, foundUser.password);
		if (match) {
			const accessToken = jwt.sign(
				{
					userInfo: {
						name: foundUser.name,
						email: foundUser.email,
					},
				},
				process.env.ACCESS_TOKEN_PRIVATE_KEY,
				{ expiresIn: "30d" },
			);

			res.status(200).json({
				success: true,
				data: {
					user: foundUser,
					accessToken,
				},
				error: "",
				message: "",
			});
		}
	} catch (err) {
		res.status(500).json({
			success: false,
			data: null,
			error: 500,
			message: err.message,
		});
	}
};

module.exports = { loginUser, registerUser };
