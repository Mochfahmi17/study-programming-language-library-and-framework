//! Core Modules
//? File System
const { error, log } = require("console");
const fs = require("fs");
const { stdin, stdout } = require("process");

//* Menuliskan string ke file secara (synchronous)
// try {
//   fs.writeFileSync("data/text.txt", "Hello World secara synchronous");
// } catch (error) {
//   console.log(error);
// }

//* Menuliskan string ke file secara (Asynchronous)
// fs.writeFile("data/test.txt", "Hello World dalam asynchronous", (e) => {
//   console.log(e);
// });

//* Membaca isi file secara (Sychronous)
// const data = fs.readFileSync("data/text.txt", "utf-8");
// console.log(data);

//* Membaca isi file secara (Asynchronous)
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

//? Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukkan nama anda : ", (nama) => {
  rl.question("masukkan No. hp anda : ", (noHP) => {
    const contact = { nama, noHP };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file); // JSON.parse() => digunakan mengubah string JSON menjadi array object pada javascript

    contacts.push(contact);

    try {
      fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); // JSON.stringify() => digunakan untuk mengubah array object menjadi string JSON
    } catch (err) {
      console.log(err);
    }
    console.log("Terima kasih telah memasukkan data kontak");
    rl.close();
  });
});
