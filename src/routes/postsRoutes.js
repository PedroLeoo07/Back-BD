const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/posts", postController.getAllPosts);
router.get("/posts/:id", postController.getPost);
router.post("posts", postController.createPost);
router.put("/posts/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
