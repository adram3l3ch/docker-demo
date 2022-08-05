const { getAllPosts, getPost, deletePost, createPost } = require("../controllers/post");
const router = require("express").Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPost).delete(deletePost);

module.exports = router;
