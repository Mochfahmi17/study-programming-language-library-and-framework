import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const port = 3000;

// Gunakan ejs
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Ilham Gaming",
      email: "ilhamgaming@gmail.com",
    },
    {
      nama: "Rini",
      email: "rini@gmail.com",
    },
    {
      nama: "Bayu",
      email: "bayu@gmail.com",
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Ilham",
    title: "Homepage",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact",
  });
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
