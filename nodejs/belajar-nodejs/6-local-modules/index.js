// const fs = require("fs"); // ini adalah core modules
const coba = require("./coba"); // ini adalah menginport local modules
// const moment = require("moment"); // ini adalah third party modules / npm modules dan ini nantinya akan ada di folder node_modules

console.log(coba.cetakNama(coba.nama), coba.PI);
console.log(coba.mahasiswa.cetakMhs());

const orang = new coba.Orang();

console.log(orang);
