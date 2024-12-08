//? Require Function
//* Awal ketika NodeJS rilis, fitur JavaScript Modules belum rilis, namun sekarang JavaScript sudah banyak menggunakan JavaScript Modules
//* NodeJS pun awalnya tidak menggunakan JavaScript Modules, namun sekarang NodeJS sudah bisa menggunakan JavaScript Modules, dan sangat direkomendasikan menggunakannya
//* Namun awal sebelum Modules, NodeJS menggunakan function require() untuk melakukan import file.

//* Contoh code :
const os = require("os");

console.info(os.platform());
console.info(os.cpus());
