//? File System
const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

//* Membuat folder data apabila folder tersebut belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//* Membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync(dataPath, "utf-8");
  const contacts = JSON.parse(file);

  //* Cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!"));
    return false;
  }

  //* Cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
      return false;
    }
  }

  //* Cek nomor Handphone
  if (!validator.isMobilePhone(noHP, ["id-ID"])) {
    console.log(chalk.red.inverse.bold("Nomor Handphone anda tidak valid!"));
    return false;
  }

  contacts.push(contact);

  try {
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
  } catch (err) {
    console.log(err);
  }

  console.log(chalk.green.inverse.bold("Terimakasih sudah menginputkan data ke kontak"));
};

module.exports = { simpanContact };
