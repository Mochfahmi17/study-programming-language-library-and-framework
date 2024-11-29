import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { loadContact, findContact } from "./utils/contact.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Ilam Gaming",
      email: "ilhamgaming24@gmail.com",
    },
    {
      nama: "Rini",
      email: "rinianisa@gmail.com",
    },
    {
      nama: "Reza Irawan",
      email: "Rezairawan@gmail.com",
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Mochammad Fahmi",
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
  const contacts = loadContact();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  console.log(contact);

  res.render("contact-detail", {
    layout: "layouts/main-layout",
    title: "Contact Detail",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
