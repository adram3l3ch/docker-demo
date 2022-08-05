const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
});

userSchema.pre("save", async function () {
	const encryptedPassword = await bcrypt.hash(this.password, 8);
	this.password = encryptedPassword;
});

userSchema.methods.verifyPassword = async function (password) {
	const isCorrect = await bcrypt.compare(password, this.password);
	return isCorrect;
};

module.exports = mongoose.model("User", userSchema);
