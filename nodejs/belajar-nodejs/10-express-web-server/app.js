import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  //   res.json({
  //     nama: "Jamal",
  //     noHP: "082201657382",
  //     email: "jamal@gmail.com",
  //   });
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("Ini adalah halaman about");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Ini adalah halaman contact");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(`product ID : ${req.params.id}<br/> Category : ${req.query.category}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
