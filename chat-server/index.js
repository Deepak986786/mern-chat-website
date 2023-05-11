const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Routes
const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");
const connectDB = require("./config/db");

dotenv.config();
app.use(cors());

//JSON
app.use(express.json());

const port = process.env.PORT || 8000;

// MONOGDB
connectDB();

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/user", userRoutes);
app.use("/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));
