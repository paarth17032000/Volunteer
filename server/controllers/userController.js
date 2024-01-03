const { default: mongoose } = require("mongoose");
const User = require("../model/User");

const userDetails = async (req, res) => {
	try {
		const userId = req.params.userId;
		if (!mongoose.Types.ObjectId.isValid(userId)) {
			return res.status(400).json({
				success: false,
				data: null,
				error: 400,
				message: "Invalid Id.",
			});
		}
		if (!userId)
			res.status(404).json({
				success: false,
				data: null,
				error: 404,
				message: "User Id is required.",
			});
		const foundUser = await User.findById(userId);
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
