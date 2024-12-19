import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
const port = process.env.PORT || 8000;

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//body paresr middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// LOGGER MIDDLEWARE
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.use("/api/posts", posts);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
