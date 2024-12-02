import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
import { contact } from "./model/contact.js";
import "./utils/db.js";

const app = express();
const port = 3000;

// Setup EJS
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Configurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Halaman Home (route: home)
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Ilham Gaming",
      email: "ilhamgaming@gmail.com",
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Mochammad Fahmi Kurnia Sandi",
    title: "Homepage",
    mahasiswa,
  });
});

// Halaman About (route: about)
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

// Halaman Contact (route: contact)
app.get("/contact", async (req, res) => {
  try {
    const contacts = await contact.find();
    res.render("contact", {
      layout: "layouts/main-layout",
      title: "Halaman Contact",
      contacts,
      msg: req.flash("msg"),
    });
  } catch (error) {
    res.status(500).send("Terjadi kesalahan saat mengambil data kontak.");
  }
});

// Halaman Contact-Detail (route: contact-detail)
app.get("/contact/:nama", async (req, res) => {
  try {
    const contactNama = await contact.findOne({ nama: req.params.nama });
    console.log(contactNama);

    res.render("contact-detail", {
      layout: "layouts/main-layout",
      title: "Detail Contact",
      contactNama,
    });
  } catch (error) {
    res.status(500).send("Terjadi kesalahan saat mengambil data kontak.");
  }
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}...`);
});
