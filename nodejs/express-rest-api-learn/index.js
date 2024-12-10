import express from "express";
import router from "./routes/menuRouter.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/menu", router);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}...`);
});
