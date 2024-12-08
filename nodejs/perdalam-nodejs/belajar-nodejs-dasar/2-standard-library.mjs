//? Modules
//* Standard library yang terdapat di NodeJS bisa kita gunakan seperti layaknya JavaScript Modules
//* NodeJS menggunakan Modules, jika kita ingin menggunakan modules, kita juga perlu memberitahu bahwa file JavaScript kita menggunakan Modules, caranya dengan mengubah nama file dari .js menjadi .mjs

//! Note : Dengan mengubah extention nya menjadi .mjs kita bisa melakukan import seperti contoh kode dibawah ini.
//* Contoh :
import os from "os";

console.info(os.platform());
console.info(os.cpus());
