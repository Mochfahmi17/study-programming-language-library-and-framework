//? File System
//* File System merupakan standard library yang bisa digunakan untuk memanipulasi file system.
//* Dalam File System, terdapat 3 jenis library
//* Pertama library yang bersifat non-blocking atau synchronous
//* Kedua library yang bersifat non-blocking atau asynchronous menggunakan callback
//* Ketiga library yang bersifat non-blocking atau asychronous tapi menggunakan promise

//* Contoh code :
import fs from "fs/promises";

const dir = "./coba";

const checkAndCreateDir = async () => {
  try {
    await fs.access(dir);
  } catch (error) {
    console.log("Folder tidak ditemukan. Sedang membuat folder...");
    await fs.mkdir(dir, { recursive: true });
    console.log("Folder berhasil dibuat");
  }
  const filePath = `${dir}/coba.txt`;
  await fs.writeFile(filePath, "Hello World");
  console.log("File berhasil dibuat dengan sebuah content");
};

checkAndCreateDir();
