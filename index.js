import express from "express";
import cors from "cors";
import router from "./backend/src/api.js";
import path from "path";

const app = express();
app.use(cors());

//development
/*
app.use("/api", router); 
*/

console.log(process.cwd());
//production
app.use(express.static(path.join(process.cwd(), "/frontend/build")));
app.use("/api", router);
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "/frontend/build/index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
