require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/bootcamps", require("./routes/bootcampRoutes"));

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
