const User = require("../models/User");

const signIn = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	const isPasswordCorrect = await user.verifyPassword(password);
	if (isPasswordCorrect) res.json({ status: "success", user });
	else res.json({ status: "error", error: "Wrong password" });
};

const signUp = async (req, res) => {
	const user = await User.create(req.body);
	res.json({ status: "created", user });
};

module.exports = { signUp, signIn };
