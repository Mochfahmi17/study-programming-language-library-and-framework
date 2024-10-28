//? File System
const fs = require("fs");

//? Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama, email, noHP) => {
      resolve(nama, email, noHP);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync(dataPath, "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  try {
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
  } catch (err) {
    console.log(err);
  }

  console.log("Terimakasih sudah menginputkan data ke kontak");
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
