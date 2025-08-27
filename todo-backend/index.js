require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const corsMiddleware = require("./src/middlewares/cors.middleware");
const jsonMiddleware = require("./src/middlewares/json.middleware");
const todoRoutes = require("./src/routes/todo.routes");

const app = express();

// Middleware
app.use(corsMiddleware);
app.use(jsonMiddleware);

// Routes
app.use("/api/todos", todoRoutes);

// DB Connection
const config = require("./src/config/config");
const PORT = config.port;
const MONGO_URI = config.mongoUri;

mongoose
  .connect(MONGO_URI, {})
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
