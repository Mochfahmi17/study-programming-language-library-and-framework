import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
import methodOverride from "method-override";
import { validationResult, body, check } from "express-validator";
import { contact } from "./model/contact.js";
import "./utils/db.js";

const app = express();
const port = 3000;

// Setup method override
app.use(methodOverride("_method"));

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

// Halaman tambah data kontak baru (route: add-contact)
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    layout: "layouts/main-layout",
    title: "Add New Contact",
  });
});

// Proses tambah data kontak baru
app.post(
  "/contact",
  [
    body("nama").custom(async (value) => {
      const duplikat = await contact.findOne({ nama: value });
      if (duplikat) {
        throw new Error("Nama kontak sudah digunakan!");
      }
      return true;
    }),
    check("nohp", "No HP tidak valid!").isMobilePhone("id-ID"),
    check("email", "Email tidak valid!").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add-contact", {
        layout: "layouts/main-layout",
        title: "Add New Contact",
        errors: errors.array(),
      });
    } else {
      await contact.insertMany(req.body);
      req.flash("msg", "Data kontak berhasil ditambahkan!");
      res.redirect("/contact");
    }
  }
);

// Proses delete contact
// app.get("/contact/delete/:nama", async (req, res) => {
//   try {
//     const findContact = await contact.findOne({ nama: req.params.nama });

//     if (!findContact) {
//       res.status(404);
//       res.send("<h1>Data tidak ditemukan!</h1>");
//     } else {
//       await contact.deleteOne({ _id: findContact._id });
//       req.flash("msg", "Data berhasil dihapus!");
//       res.redirect("/contact");
//     }
//   } catch (error) {
//     res.status(500).send("Terjadi kesalahan saat menghapus data kontak!");
//   }
// });

// Proses delete menggunakan method delete
app.delete("/contact", async (req, res) => {
  try {
    const findContact = await contact.findOne({ nama: req.body.nama });
    await contact.deleteOne({ _id: findContact._id });
    req.flash("msg", "Data berhasil dihapus!");
    res.redirect("/contact");
  } catch (error) {
    res.status(500).send("Data contact gagal dihapus!");
    console.log(error);
  }
});

// Halaman ubah data contact
app.get("/contact/edit/:nama", async (req, res) => {
  const findContact = await contact.findOne({ nama: req.params.nama });

  res.render("edit-contact", {
    layout: "layouts/main-layout",
    title: "Edit Contact",
    findContact,
  });
});

// Proses update data contact
app.put(
  "/contact",
  [
    body("nama").custom(async (value, { req }) => {
      const duplikat = await contact.findOne({ nama: value });

      if (value !== req.body.oldNama && duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }
      return true;
    }),
    check("nohp", "No. Handphone tidak valid!").isMobilePhone("id-ID"),
    check("email", "Email tidak valid!").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("edit-contact", {
        layout: "layouts/main-layout",
        title: "Edit Contact",
        errors: errors.array(),
        findContact: req.body,
      });
    } else {
      await contact.updateOne({ _id: req.body._id }, { $set: { nama: req.body.nama, email: req.body.email, nohp: req.body.nohp } });
      req.flash("msg", "Data contact berhasil di update!");
      res.redirect("/contact");
    }
  }
);

// Halaman Contact-Detail (route: contact-detail)
app.get("/contact/:nama", async (req, res) => {
  try {
    const contactNama = await contact.findOne({ nama: req.params.nama });

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
