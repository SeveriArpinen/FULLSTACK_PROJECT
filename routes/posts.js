import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} from "../controllers/postController.js";
const router = express.Router();

//get all posts
router.get("/", getPosts);

//get one post
router.get("/:id", getPost);

// create a new post
router.post("/", createPost);

// update post
router.put("/:id", updatePost);

// delete post
router.delete("/:id", deletePost);

export default router;
