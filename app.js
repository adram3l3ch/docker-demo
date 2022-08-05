const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER } = require("./config/config");

app.use(express.json());

const postRouter = require("./routes/post");
const authRouter = require("./routes/auth");

app.get("/", async (req, res) => res.json({ message: "Hello world" }));
app.use("/posts", postRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
	const URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
	await mongoose.connect(URL);
	console.log("Server is listening in port" + PORT);
});
