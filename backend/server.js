const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const gameRoutes = require("./routes/gameRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const faqRoutes = require("./routes/faqRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/games", gameRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/faq", faqRoutes);

const uri =
  "mongodb+srv://nihatzaman:123456Nihat@cluster0.azl5rgq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((err) => {
    console.error("Database connection error: ", err);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
