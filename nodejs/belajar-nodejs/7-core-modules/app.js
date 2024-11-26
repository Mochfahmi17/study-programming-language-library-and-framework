// Core Module
// File System
const fs = require("node:fs");

// menuliskan string ke file secara synchronous
// try {
//   fs.writeFileSync("data/test.txt", "Hello World!, secara synchronous!");
// } catch (error) {
//   console.log(error);
// }

// menuliskan string ke file secara asynchronous
// fs.writeFile("data/test.txt", "Hello World! secara asynchronous!", (e) => {
//   console.log(e);
// });

// membaca isi file secara synchronous
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// membaca isi file secara asynchronous
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readline
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama : ", (nama) => {
  rl.question("Masukkan no HP : ", (noHP) => {
    if (!Number(noHP)) {
      console.log("Nomor yang anda masukkan tidak valid!");
    } else {
      console.log(`\nData yang anda masukkan adalah :\nnama : ${nama}\nnoHp : ${noHP}`);

      const contact = { nama, noHP };
      const file = fs.readFileSync("data/contacts.json", "utf-8");
      const contacts = JSON.parse(file);

      contacts.push(contact);
      console.log(contacts);

      fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));
    }
    rl.close();
  });
});
