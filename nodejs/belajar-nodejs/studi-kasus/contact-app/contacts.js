const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// Membuat folder data apabila folder tersebut belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contacts.json apabila file tersebut belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const file = fs.readFileSync(dataPath, "utf-8");
  const contacts = JSON.parse(file);

  return contacts;
};

const simpanContact = (nama, noHP, email) => {
  const contact = { nama, noHP, email };
  // const file = fs.readFileSync(dataPath, "utf-8");
  // const contacts = JSON.parse(file);
  const contacts = loadContact();

  // Cek duplikat
  const duplikat = contacts.find((contact) => contact.noHP === noHP);
  if (duplikat) {
    console.log(chalk.red.inverse.bold("Kontak dengan nomor ini sudah ditambahkan."));
    return false;
  }

  // Cek email validation
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Anda memasukkan email yang tidak valid!"));
      return false;
    }
  }

  // Cek noHP validation
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor hp anda tidak valid!"));
  }

  contacts.push(contact);
  fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2));
  console.log(chalk.green.inverse("Terima kasih! telah memasukkan data ke kontak."));
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.green.bold("Daftar Kontak :"));

  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. Nama : ${contact.nama}\n no hp : ${contact.noHP}\n`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => nama.toLowerCase() === contact.nama.toLowerCase());

  if (!contact) {
    console.log(chalk.bgRed(`${nama} tidak ditemukan.`));
    return false;
  }

  console.log(chalk.bgGreen("Data Ditemukan."));
  console.log(`${chalk.yellow("Nama")} : ${chalk.cyan(contact.nama)}`);
  console.log(`${chalk.yellow("No. hp")} : ${chalk.cyan(contact.noHP)}`);

  if (!contact.email) {
    console.log(`${chalk.yellow("Email")} : ${chalk.red(contact.nama + " tidak memiliki email.")}`);
    return false;
  }
  console.log(`${chalk.yellow("Email")} : ${chalk.cyan(contact.email)}`);
};

const hapusContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.filter((contact) => nama.toLowerCase() !== contact.nama.toLowerCase());

  if (contacts.length === contact.length) {
    console.log(chalk.bgRed(`${nama} tidak ditemukan.`));
    return false;
  }

  fs.writeFileSync(dataPath, JSON.stringify(contact, null, 2));
  console.log(chalk.green(`data contact ${nama} berhasil dihapus.`));
};

module.exports = { simpanContact, listContact, detailContact, hapusContact };
