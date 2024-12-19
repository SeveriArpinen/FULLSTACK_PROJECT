const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
];

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

//get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

//get one post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({ msg: `A post with id ${id} was not found` });
  } else {
    res.status(200).json(post);
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
