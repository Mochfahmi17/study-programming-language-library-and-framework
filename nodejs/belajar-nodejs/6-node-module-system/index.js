// const nama = "Mochammad Fahmi";
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;

// console.log(cetakNama(nama));
// console.log("Hello Fahmi");

// const fs = require("fs"); // core modules

// const cetakNama = require("./coba"); // local modules
// const PI = require("./coba");

// const momen = require("momen"); // thrid party modules / npm modules / node_modules

const coba = require("./coba");
console.log(coba.cetakNama("Ilham"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
