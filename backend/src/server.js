import express from "express";
import cors from "cors";
import router from "./api.js";

const app = express();
app.use(cors());
app.use("/api", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
