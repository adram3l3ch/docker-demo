const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
	const posts = await Post.find();
	res.status(200).json({ posts, status: "success" });
};

const getPost = async (req, res) => {
	const { id } = req.params;
	const post = await Post.findById(id);
	res.status(200).json({ post, status: "success" });
};

const createPost = async (req, res) => {
	const post = await Post.create(req.body);
	res.status(201).json({ post, status: "created" });
};

const deletePost = async (req, res) => {
	const { id } = req.params;
	const post = await Post.findByIdAndDelete(id);
	res.status(200).json({ post, status: "deleted" });
};

module.exports = { getAllPosts, getPost, createPost, deletePost };
