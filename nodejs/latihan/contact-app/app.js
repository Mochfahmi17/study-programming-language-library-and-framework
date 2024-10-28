//! data Contact
//* Contoh penulisan lebih ringkas :
const { tulisPertanyaan, simpanContact } = require("./contacts");
const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama anda : ");
  const email = await tulisPertanyaan("Masukkan email anda : ");
  const noHP = await tulisPertanyaan("Masukkan nomor hp anda : ");

  simpanContact(nama, email, noHP);
};

main();

//* Contoh 3 :
// //? File System
// const fs = require("fs");

// //? Readline
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// //* Membuat folder data apabila folder tersebut belum ada
// const dirPath = "./data";
// if (!fs.existsSync(dirPath)) {
//   fs.mkdirSync(dirPath);
// }

// //* Membuat file contacts.json jika belum ada
// const dataPath = "./data/contacts.json";
// if (!fs.existsSync(dataPath)) {
//   fs.writeFileSync(dataPath, "[]", "utf-8");
// }

// const tulisPertanyaan = (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (nama, email, noHP) => {
//       resolve(nama, email, noHP);
//     });
//   });
// };

// const main = async () => {
//   const nama = await tulisPertanyaan("Masukkan nama anda : ");
//   const email = await tulisPertanyaan("Masukkan email anda : ");
//   const noHP = await tulisPertanyaan("Masukkan nomor hp anda : ");

//   const contact = { nama, email, noHP };
//   const file = fs.readFileSync(dataPath, "utf-8");
//   const contacts = JSON.parse(file);

//   contacts.push(contact);

//   try {
//     fs.writeFileSync(dataPath, JSON.stringify(contacts));
//   } catch (err) {
//     console.log(err);
//   }

//   console.log("Terimakasih sudah menginputkan data ke kontak");
//   rl.close();
// };

// main();

//* Contoh 2 menggunakan async atau promise :
// const pertanyaan1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan nama anda : ", (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Masukkan email anda : ", (email) => {
//       resolve(email);
//     });
//   });
// };
//
// const main = async () => {
//   const nama = await pertanyaan1();
//   const email = await pertanyaan2();

//   const contact = { nama, email };
//   const file = fs.readFileSync(dataPath, "utf-8");
//   const contacts = JSON.parse(file);

//   contacts.push(contact);

//   try {
//     fs.writeFileSync(dataPath, JSON.stringify(contacts));
//   } catch (err) {
//     console.log(err);
//   }
//   console.log("Terimakasih telah menginputkan data ke kontak");
//   rl.close();
// };

// main();

//* Contoh 1 menggunakan callback :
// rl.question("masukkan nama anda : ", (nama) => {
//   rl.question("masukkan No. hp anda : ", (noHP) => {
//     const contact = { nama, noHP };
//     const file = fs.readFileSync(dataPath, "utf-8");
//     const contacts = JSON.parse(file); // JSON.parse() => digunakan mengubah string JSON menjadi array object pada javascript

//     contacts.push(contact);

//     try {
//       fs.writeFileSync(dataPath, JSON.stringify(contacts)); // JSON.stringify() => digunakan untuk mengubah array object menjadi string JSON
//     } catch (err) {
//       console.log(err);
//     }
//     console.log("Terima kasih telah memasukkan data kontak");
//     rl.close();
//   });
// });
