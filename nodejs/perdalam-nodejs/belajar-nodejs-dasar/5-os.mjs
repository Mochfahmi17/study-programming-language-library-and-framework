//? OS
//* OS merupakan standard library yang bisa digunakan untuk mendapatkan informasi tentang sistem operasi yang digunakan.

//* Contoh code :
import os from "os";
console.info(os.platform());
console.info(os.arch());
console.info(os.cpus());
console.info(os.uptime());
console.info(os.totalmem());
console.info(os.freemem());
console.info(os.networkInterfaces());

console.table(os.cpus());
