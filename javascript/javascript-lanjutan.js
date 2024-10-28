// - PROTOTYPE
// Membuat object pada javascript bisa menggunakan 4 cara yaitu :
// 1. Object Literal PROBLEM : tidak efektif untuk objek yang banyak
// let mhs1 = {
//   nama: "Mochammad Fahmi Kurnia Sandi",
//   energi: 10,
//   alamat: "Jl. Gresik ppi 6 no. 22, Surabaya",
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// let mhs2 = {
//   nama: "Ilham Maulana",
//   energi: 20,
//   alamat: "Jl. Gresik ppi 6 no. 03, Surabaya",
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama} selamat makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam + 1;
//     console.log(`Halo ${this.nama} Selamat bermain`);
//   };

//   return mahasiswa;
// }

// let ilham = Mahasiswa(`Ilham`, 10);
// let fahmi = Mahasiswa(`Fahmi`, 20);

// 3. Constructor Function (keyword new)
// function Mhs(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama} Selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama} Selamat bermain game!`);
//   };
// }

// let fahmi = new Mhs("Fahmi", 10);

// 4. object.create()
// Contoh 1 :
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama} selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam + 1;
//     console.log(`Halo ${this.nama} Selamat bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama} Selamat tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let ilham = Mahasiswa(`Ilham`, 10);
// let fahmi = Mahasiswa(`Fahmi`, 20);

// Contoh 2 versi object inheritance :
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`Halo ${this.nama} selamat makan!`);
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam + 1;
//   console.log(`Halo ${this.nama} selamat bermain!`);
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   console.log(`Halo ${this.nama} selamat tidur!`);
// };

// let ilham = new Mahasiswa(`Ilham`, 10);

// Contoh 3 versi class :
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama} selamat makan!`);
//   }

//   main(jam) {
//     this.energi -= jam + 1;
//     console.log(`Halo ${this.nama} selamat bermain!`);
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama} selamat tidur!`);
//   }
// }

// let aisyah = new Mahasiswa("Aisyah", 10);

// prototype kasus pada array
// let angka = [1, 2, 3];
// console.log(angka.reverse()); // method reverse berasal dari prototype

// Belajar mengenai EXECUTION CONTEXT, HOISTING & SCOPE
// Execution context
// Ada 2 fase pada execution context, yaitu :
// 1. Creation
// Contoh 1 :
// console.log(nama);
// var nama = "Ilham";
// Note : Saat kode diatas tersebut dijalankan yang terjadi adalah ada sesuatu yang disebut dengan creation phase pada global context

// Contoh 2 :
// var nama = "Ilham Kurniawan";
// var username = "@ilhamkurniawan";
// function cetakURL(username) {
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

// Contoh 3 :
// function a() {
//   console.log("Ini adalah a");
//   function b() {
//     console.log("Ini adalah b");
//     function c() {
//       console.log("Ini adalah c");
//     }
//     c();
//   }
//   b();
// }
// a();

// Contoh 4 :
// function satu() {
//   var nama = "Fahmi";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "Erik";
// satu();
// dua("Ilham");
// console.log(nama);

// Belajar Closure
// Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut -MDN.
// Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi -w3school.
// Closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lngkungan saat ia diciptakan -Code Fellow.
// Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain -Techsith.
// Note : Kenapa harus menggunakan closure ? Karena untuk membuat function factories, private method

// Lexical scope
// function init() {
//   //   let nama = "Fahmi";
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("Ilham");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// console.dir(selamatMalam);

// Contoh :
// let add = (function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// Var, Let dan Const
// Note : jangan pernah menggunaan var untuk membuat variable dalam javascript
// Contoh penggunaan var :
// console.log(i);
// var i = 10;
// Note : Kode tersebut menghasilkan nilai undifined

// contoh penggunaan var dalam looping :
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// Note : dalam kasus tersebut var mampu mengakses variabel di dalam lingkup scope yang seharusnya dalam kasus bahasa pemograman lain itu tidak bisa atau akan menghasilkan nilai eror
// Note 2 : Karena javascript menganut function scope bukan block scope

// Contoh penggunaan var dalam menggunakan function :
// function tes() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// tes();
// console.log(i);
// Note : Output dari kode diatas akan menghasilkan output error

// Contoh penggunaan let :
// console.log(j);
// let j = 10;
// Note : Kode tersebut menghasilkan error

// Contoh penggunaan let dalam looping :
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// Note : Kode tersebut jika dijalankan akan menghasilkan nilai error karena let menganut block scope

// Contoh penggunaan const :
// const i = 10;
// i = 15;
// Note : Gunakan const apabila kita yakin nilai tersebut tidak akan pernah berubah.

// Contoh penggunaan const dalam object :
// const mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
// };
// mhs = {
//   jurusn: "Teknik Informatika",
// };
// console.log(mhs);
// Note : dalam kasus tersebut const bisa diubah kecuali jika kita mengubah objectnya maka hasilnya akan eror

// Contoh penggunaan const dalam array :
// const i = [1, 2, 3];
// i.push(4);
// console.log(i);
// Note : Kode tersebut jika dijalankan akan menambah nilai ke 4 asal kita tidak mengubahnya keseluruhan seperti : (i = [1,2,3,4];) Jika kode tersebut dijalankan maka akan error
// Note untuk const : const digunakan untuk meminimalisir perubahan state

// Arrow function
// Arrow function adalah bentuk lain yang lebih ringkas dari Function Expression -MDN
// Contoh function expression :
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("fahmi"));

// Contoh Arrow Function :
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("Ilham Kurniawan"));

// Contoh 2 arrow function :
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama("Ilham Kurniawan", "Pagi"));

// Note : Arrow Function jika parameternya hanya satu tidak perlu tanda kurung tapi kalau lebih dari satu parameter wajib menggunakan tanda kurung, berikut contohnya :
// Contoh 3 Arrow Function tanpa tanda kurung karena hanya memiliki sau parameter :
// const mhs = nama => {
//   return `Halo, ${nama}`;
// };

// console.log(mhs("Erick"));

// Contoh 4, Implisit Return :
// const tampilNama = nama => `Halo, ${nama}`;

// console.log(tampilNama("Andre"));
// Note : Implisit Return adalah kamu tidak perlu menuliskan return pada arrow function

// Contoh 5, Jika tidak ada parameter nya, wajib menggunakan tanda kurung kosong :
// const tampilNama = () => `Halo, Andhika`;
// console.log(tampilNama());

// Contoh 6, arrow function pada array :
// 6.1 Contoh function expression :
// mahasiswa = ["Mochammad Fahmi", "Ilham Kurniawan", "Satria"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// 6.2 contoh arrow function :
// mahasiswa = ["Mochammad Fahmi", "Ilham Kurniawan", "Satria"];

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// 6.3 Contoh Arrow function mengembalikan nilai dalam bentuk object :
// let mhs = ["Satria Aji", "Muhammad Iqbal", "Mochammad Fahmi Kurnia Sandi"];
// let jumlahHuruf = mhs.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);

// Konsep this pada arrow function

// Contoh 1, Constructor Function :
// untuk membuat object gunakan nama function nya menggunakan huruf besar agar bisa diketahui bahwa kita ingin membuat sebuah object
// let Mahasiswa = function() {
//     this.nama = "Mochammad Fahmi";
//     this.umur = 24;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
//     }
//     console.log(this);
// }

// let fahmi = new Mahasiswa();

// contoh 1.1, ubah kode diatas menjadi arrow function :
// Note : Tidak bisa constructor Function diubah menjadi arrow function maka akan menghasilkan output error
// let Mahasiswa = function() {
//     this.nama = "Muhammad Ikhbal";
//     this.umur = 22;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
//     }
//     console.log(this);
// }
// let ikhbal = new Mahasiswa();
// Note : arrow function sebenarnya tidak menyimpan konteks this

// Contoh 1.2, object literal :
// const mhs = {
//     nama: "Mochammad Fahmi",
//     umur: 22,
//     sayHello: function() {
//         console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun.`);
//     },
// };

// console.log(mhs);

// Contoh 1.3 :
// let Mahasiswa = function() {
//         this.nama = "Mochammad Fahmi";
//         this.umur = 24;
//         this.sayHello = function() {
//             console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`);
//         }
//         setInterval(() => {
//             console.log(this.umur++);
//         }, 500);
//     }

//     let fahmi = new Mahasiswa();

// contoh 1.4, contoh arrow function dalam DOM :
// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   let satu = "size";
//   let dua = "caption";
//   if (this.classList.contains(satu)) {
//     [satu, dua] = [dua, satu];
//   }
//   this.classList.toggle(satu);
//   setTimeout(() => {
//     this.classList.toggle(dua);
//   }, 600);
// });

//* Higher Order Function
//* Adalah function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value.
//? Contoh higher order function :
//* 1. array.prototype.map()
// Contoh kalikan angka dengan 2 menggunakan map() :
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.map((a) => {
//   return a * 2;
// });
// console.log(newAngka);

//* 2. array.prototype.filter()
// Contoh mencari angka lebih dari 3 dengan menggunakan for :
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// Contoh mencari angka lebih dari 3 menggunakan filter :
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.filter((a) => {
//   return a >= 3;
// });
// console.log(newAngka);

//* 3. array.prototype.reduce()
// Contoh jumlahkan seluruh elemen pada array menggunakan reduce() :
// Note : Default dari reduce() memiliki nilai awal angka 0 dan itu bisa kita ubah
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 5);
// console.log(newAngka);

// 4. method chaining
// Untuk menggabungkan fungsi fungsi pada higher order function dalam satu kali eksekusi
// Contoh mencari angka lebih dari 5 lalu setelah ketemu, kalikan dengan angka 3 setelah dikalikan lalu jumlahkan :
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const hasil = angka
//   .filter((a) => {
//     return a > 5;
//   })
//   .map((a) => {
//     return a * 3;
//   })
//   .reduce((acc, curr) => {
//     return acc + curr;
//   });
// console.log(hasil);

// Template Literal / Template String
// Template Literal adalah string literal yang memungkinkan adanya expression di dalamnya. -MDN Web Docs
// 1. String Literal    -> bisa menggunakan kutip satu seperti tanda (') atau bisa menggunakan kutip dua seperti tanda (")
// 2. Template Literal  -> bisa menggunakan tanda back tick seperti tanda berikut (`) yang memungkinkan kita untuk membuat template literal
// Note : Dengan menggunakan back tick kita bisa melakukan banyak hal seperti :
//            1. Kita bisa melakukan Multi-line String
//               Contoh :
// `String text baris 1
//  String text baris 2
//  String text baris 3`

//            2. Kita bisa melakukan Embedded Expression
//               Contoh :
// `String ${expression} string text`

//            3. Kita bisa melakukan HTML Fragments (Saat ini sering digunakan saat ingin menggunakan frontend framework)
//            4. Kita bisa melakukan Expression Interpolation (mirip tanda kutip dua pada bahasa pemroraman PHP)
//            5. Kita bisa melakukan Tagged Template
//               Contoh :
// tagHTML `String text ${expression} string text`

// Contoh detail :
// 1. Multi-line string
// Contoh string literal :
// console.log("string 1\n string 2"); // Ini menggunakan string literal

// Contoh Template Literal :
// console.log(`string 1
// string 2`); // Ini menggunakan Template Literal

// 2. HTML Fragments
// const mhs = {
//   nama: "Ilhamil Huda",
//   umur: 22,
//   nrp: "22346678",
//   email: "ilhamilhuda@gmail.com",
// };

// Contoh String Literal :
// let el = '';
// el += '<div class="mhs">';
// el += '<h2>' + mhs.nama + '</h2>';
// el += '<span class="nrp">' + mhs.nrp + '</span>';
// el += '</div>';

// console.log(el); // Ini menggunakan String Literal, penulisan seperti ini terkesan ribet dan harus mengetikan kode yang begitu banyak

// Contoh Template Literal :
// let el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el); // Ini menggunakan template literal, penulisan kode nya terkesan rapi dan tidak perlu membuat tanda kutip baru

// 3. Embedded Expression
// Contoh Embedded Expression :
// const nama = "Mochammad Fahmi";
// let umur = 24;
// console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);

// let a = 10;
// let b = 15;
// console.log("jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : " + (a + b) + ", bukan " + (2 * a + b));

// Contoh Expression Interpolation (string literal) :
// let a = 10;
// let b = 15;
// console.log("jika a = 10 dan b = 15, maka hasil penjumlahannya adalah :" + (a + b) + ", bukan " + (2 * a + b));

// Contoh Expression Interpolation (template literal) :
// let a = 10;
// let b = 15;
// console.log(`jika = a dan b = 15, maka hasil penjumlahanna adalah : ${a + b}, bukan ${2 * a + b}`);

// Contoh code :
// 1. Template literals / template string :
// const nama = "Mochammad Fahmmi";
// const umur = 24;
// console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun.`);

// 1.1 Embedded expression :
// contoh 1 :
// console.log(`${1 + 1}`);

// Conth 2 :
// console.log(`${alert("halo")}`);

// Contoh 3 :
// const x = 10;
// console.log(`${x % 2 == 0 ? "Genap" : "Ganjil"}`);

// 1.2. HTML Fragments :
// const mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
//   nrp: "86677322",
//   email: "mochammadfahmiks@gmail.com",
// };

// const body = document.querySelector("body");

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`;
// body.innerHTML = el;

// 1.3. Tagged Template Literals
// Contoh :
// const nama = "Mochammad Fahmi Kurnia Sandi";
// const umur = 24;

// // Note : Gunakan titik 3 kali untuk menampilkan expression yang ada di dalam template literals
// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce((result, str, i) => {
//     return `${result}${str}${values[i] || ""}`;
//   }, "");
// }

// const str = coba`Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);

// 1.4. Highlight
// Contoh :
// const nama = "Mochammad Fahmi Kurnia Sandi";
// const umur = 18;
// const email = "mochammadfahmi17@gmail.com";

// // Note : Gunakan titik 3 kali untuk menampilkan expression yang ada di dalam template literals
// function highlight(strings, ...values) {
//   return strings.reduce((result, str, i) => {
//     return `${result}${str}<span class="hl">${values[i] || ""}</span>`;
//   }, "");
// }

// const str = highlight`Halo, nama saya ${nama}, umur saya ${umur} tahun. Dan email saya adalah : ${email}`;
// document.body.innerHTML = str;
// Note : Penggunaan lain dari tagged template adalah =
//                                                      1. Escaping HTML Tags
//                                                      2. Translation & Internationalization
//                                                      3. Styled Components

//* 4. Destructuring Variable / Assignment
// Adalah Expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variabel yang terpisah. -MDN Web Docs

//? 1.1. Contoh Destructuring Array :
// const perkenalan = ['Halo','nama','saya','Mochammad Fahmi'];
// const [salam, satu, dua, tiga] = perkenalan;

//? 1.2. Skipping Items, perhatikan contoh berikut dibawah :
// const [salam, , , tiga] = perkenalan;
// Note : Jika ingin mengambil hanya sebagian array saja gunakan tanda (koma) saja seperti kode diatas.
// console.log(tiga);

//? 1.3. Swap Items, perhatikan contoh berikut dibawah :
// let a = 1;
// let b = 2;
//! sebelum swap
// console.log(a);
// console.log(b);

//! code swap
// [a, b] = [b, a];

//! setelah swap
// console.log(a);
// console.log(b);

//? 1.4. return value pada function, perhatikan contoh berikut dibawah :
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

//? 1.5. Rest Parameter pada array, perhatikan contoh berikut dibawah :
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

//? 2.1. Contoh Destructuring Object :
// const mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
// };

// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

//? 2.2. Assignment tanpa deklarasi object, perhatikan contoh berikut dibawah :
// Note : Kerennya kita tidak perlu const, tapi syaratnya harus diberikan tanda () sebagai pengganti const.
// ({ nama, umur } = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
// });

// console.log(nama);
// console.log(umur);

//? 2.3. Assign ke variabel baru, perhatikan contoh berikut dibawah :
// const mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);
// console.log(u);

//? 2.4. Memberikan default value, perhatikan contoh berikut dibawah :
// const mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
//   email: "mochammadfahmiks@gmail.com",
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// Note : 'email = "email@default.com"'. Ini akan memberikan nilai sementara apabila object mhs.email tidak ada.
// console.log(email);

//? 2.5. Memberi nilai default & assign ke variabel baru, perhatikan contoh berikut dibawah :
// const mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
//   email: "mochammadfahmiks@gmail.com",
// };

// const { nama: n, umur: u, email: e } = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

//? 2.6. Rest Parameter pada object, perhatikan contoh berikut dibawah:
// const mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
//   email: "mochammadfahmiks@gmail.com",
// };

// const { nama, ...values } = mhs;
// console.log(nama);
// console.log(values);

//? 2.7. Mengambil field pada object, setelah dikirim sebagai parameter untuk function, perhatikan contoh berikut dibawah :
// const mhs = {
//   id: 123,
//   nama: "Mochammad Fahmi",
//   umur: 24,
//   email: "mochammadfahmiks@gmail.com",
// };

// function getIdMhs({ id, nama }) {
//   return `${id} ${nama}`;
// }

// console.log(getIdMhs(mhs));

//* 5. Destructuring Function
//? 1.1. Destructuring Function return value, perhatikan contoh berikut dibawah :
//? Contoh code :
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);

// const [tambah, kurang, kali, bagi = `tidak ada`] = kalkulasi(10, 2);
// console.log(bagi);

//? Contoh 1.2 :
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 5);
// console.log(bagi);

//? 1.2. Destructuring Function Arguments, perhatikan contoh berikut dibawah :
// Contoh tanpa menggunakan destructuring :
// const mhs1 = {
//   nama: "Mochammad fahmi",
//   umur: 24,
//   email: "mochammadfahmiks@gmail.com",
// };

// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

//? Contoh menggunakan Destruturing :
// const mhs1 = {
//   nama: "Mochammad fahmi",
//   umur: 24,
//   email: "mochammadfahmiks@gmail.com",
//   nilai: {
//     tugas: 80,
//     uts: 85,
//     uas: 75,
//   },
// };

// function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
// }

// console.log(cetakMhs(mhs1));

//* 6. Looping baru dalam javascript
//* 1.1. For...of
//* for..of adalah sebuah looping yang bisa menghilang atau menelusuri object-object yang iterable. Berikut adalah object-object yang iterable :

//*        1. String
//?           Contoh penulisan codenya :
//           const nama = "Mochammad Fahmi";
//           for (const name of nama) {
//           console.log(name);
//           }

//*        2. Array
//?           Contoh penulisan codenya :
//           Note : penggunaan for..of tidak bisa mengambil index nya. Sebenarnya bisa menggunakan for..of tapi harus menggunakan method .entries
//           const mhs = ["Fahmi", "Ilham", "Rizky"];
//           for (const [i, m] of mhs.entries()) {
//           console.log(`${m} adalah  mahasiswa ke-${i + 1}`);
//           }

//*        3. Arguments / NodeList
//?           Contoh 3.1 penulisa codenya untuk NodeList :
//           const liNama = document.querySelectorAll(".nama");
//           for (n of liNama) {
//           console.log(n.innerHTML);
//           }

//?           Contoh 3.2 penulisan codenya untuk Arguments :
//           function jumlahkanAngka() {
//           let jumlah = 0;
//           for(a of arguments) {
//               jumlah += a;
//           }
//           return jumlah;
//           }
//           console.log(jumlahkanAngka(1, 2, 3, 4, 5));

//*        4. Typed Array
//*        5. Map
//*        6. Set
//*        7. User-defined Iterables

//* perbedaan penulisan looping
//? Contoh penggunaan for :
// const mhs = ["Mochammad Fahmi", "Ilham Kurniawan", "Rizky Nanda"];
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

//? Contoh 1.1 penulisan foreach :
// const mhs = ["Mochammad Fahmi", "Ilham Kurniawan", "Rizky Nanda"];
// mhs.forEach((m) => {
//   return console.log(m);
// });

//? Contoh 1.2 penulisan foreach dalam mengambil nilai index :
// Note : foreach bisa diberikan 2 parameter. parameter pertama untuk merepresentasikan array nya dan parameter kedua untuk menampung nilai indexnya
// const mhs = ["Fahmi", "Ilham", "Rizky"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i}`);
// });

//? Contoh 1.1 penulisan for..of :
// const mhs = ["Mochammad Fahmi", "Ilham Kurniawan", "Rizky Nanda"];
// for (const m of mhs) {
//   console.log(m);
// }

//? Contoh 1.2 :
// const mhs = ["Fahmi", "Ilham", "Rizky"];
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah  mahasiswa ke-${i + 1}`);
// }

//* 1.2. For..in
//* For..in adalah membuat sebuah pengulangan hanya untuk enumerable. enumerable yang dimaksud adalah object.
//* Note : Object atau isi dari sebuah object hanya bisa di looping menggunakan for..in
//? Contoh penulisan codenya :
// const mhs = {
//   nama: "Mochammad Fahmi Kurnia Sandi",
//   umur: 24,
//   email: "mochammadfahmiks@gmail.com",
// };

// for (data in mhs) {
//   console.log(mhs[data]);
// }

//* 7. Spread Operator vs. Rest Parameter
//* Spread Operator dan Rest Parameter ini di representasikan dengan tanda dengan karakter ... (3titik).
//* Note : Meskipun notasinya sama menggunakan ... (3 titik), namun sebenarnya keduanya itu berbeda.

//* 1.1. Spread Operator
//* Spread Operator adalah Memecah (expand / unpack) iterables menjadi single element.

//? Contoh penulisan Spread Operator :
// const mhs = ["Fahmi", "Ilham", "Ucup"];
// console.log(...mhs[0]);

// Kapan sih kita bisa menggunakan spread operator ?
// Jawabannya :
// - Saat kita ingin menggabungkan 2 array

//? Contoh penulisan code menggabungkan 2 atau lebih pada array :
// const mhs = ["Fahmi", "Ilham", "Ucup"];
// const dosen = ["Dea", "Fitri", "Danu"];

//? Dibawah ini cara menggunakan spread operator :
// const orang = [...mhs, "Aji", ...dosen];

// Kita bisa menggunakan method concat
//? Dibawah ini cara menggunakan method concat :
// const orang = mhs.concat(dosen);

// console.log(orang);
//* Node : Dengan menggunakan spread operator, kita bisa lebih flexible jika ingin menambahkan elemen array di tengah seperti code berikut : const orang = [...mhs, 'Aji', ...dosen];

// - Saat kita ingin melakukan meng-copy nilai pada array

//? Contoh 1 :
// const mhs = ["Fahmi", "Ilham", "Erwin"];
// const mhs1 = [...mhs];
// mhs1[0] = "Andik";
// console.log(mhs1);

//? Contoh 2 :
// Menggunakan for
// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// Menggunakan Map
// const liMhs = document.querySelectorAll("li");
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

// Menggunakan DOM
// const nama = document.querySelector(".saya");
// const huruf = [...nama.textContent].map((m) => `<span>${m}</span>`).join("");
// nama.innerHTML = huruf;

//* 8. Rest Parameter
//* Rest Parameter adalah sesuatu yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array.
//? 1.1. Contoh penulisannya :
//* Note : Didalam function memiliki varible default yang bernama arguments
// function myFunc() {
//   return `a = ${a}, b = ${b}, myArgs = ${myArg}`;
//   return Array.from(arguments);                      <=  Ini mengubah arguments menjadi array.
//   return [...arguments];                             <=  Atau bisa menggunakan seperti ini.
// }
// console.log(myFunc(1, 2, 3, 4, 5));

//? 1.2. Contoh penulisannya dalam contoh kasus menjumlahkan sebuah array :
// function jumlahkan(...myArgs) {
// Menggunakan reduce()
//   const a = myArgs.reduce((acc, curr) => {
//     return acc + curr;
//   });
//   return a;

//   Mengunakan for..of
//   let total = 0;
//   for (const angka of myArgs) {
//     total += angka;
//   }
//   return total;
// };

// console.log(jumlahkan(1, 2, 3, 4, 5));

//? 1.3. Contoh penulisan dalam contoh kasus saat kita ingin melakukan array destructuring :
// const kelompok1 = ["Fahmi", "Ilham", "Rizky", "Indra", "Fauzi"];
// const [ketua, wakilKetua, ...anggota] = kelompok1;
// console.log(anggota);

//? 1.4. Contoh penulisan dalam contoh kasus saat kita ingin melakukan object destructuring :
// const tim = {
//   pm: "Fahmi",
//   frontEnd1: "Ilham",
//   frontEnd2: "Rizky",
//   backEnd: "Indra",
//   ux: "fauzi",
//   devOps: "Arifin",
// };

// const { pm, ...myTeam } = tim;
// console.log(myTeam);

//? 1.5. Contoh penulisan dalam contoh kasus filtering :
// function filterBy(type, ...values) {
//   return values.filter((a) => typeof a === type);
// }
// console.log(filterBy("boolean", 1, 2, "Fahmi", false, 10, true, "Ilham"));

//* 9. Konsep Asychronous Programming
//* Pemahaman tentang Javascript : 1. Javascript adalah bahasa pemrograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser.
//*                                2. Javascript adalah sebuah single-thread, non-blocking, asynchronous dan concurrent language.

//* 10. Callbacks
//* Callbacks adalah sebuah function yang dikirim sebagai parameter pada function yang lain.
//* ada lagi yang menyebutkan bahwa callback adalah fuunction yang dieksekusi setelah fingsui lain selesai dijalankan.
//? 1.1. Contoh penulisannya dalam kasus Synchronous Callback :
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt(`Masukkan Nama : `);
//   callback(nama);
// }

// tampilkanPesan(halo);

//? 1.2. Contoh penulisannya dalam kasus Anonymous Function :
// function tampilkanPesan(cuculacu) {
//   const nama = prompt(`Masukkan nama : `);
//   cuculacu(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

//? 1.3. Contoh penulisannya dalam kasus Asynchronous Callback :
//? Perbedaan tanpa Asynchronous dan menggunakan Asychronous Callback :
//? Contoh tanpa Asynchronous Callback :
//* Note : kode tersebut akan menunggu untuk dijalankan.
// const mhs = [
//   {
//     nama: "Mochammad Fahmi Kurnia Sandi",
//     nrp: "34562213",
//     email: "mochammadfahmiks@gmail.com",
//     jurusan: "Rekayasa Perangkat Lunak",
//     idSiswa: 1,
//   },
//   {
//     nama: "Ilham Kurniawan",
//     nrp: "88760041",
//     email: "ilhamkurniawan@gmail.com",
//     jurusan: "Desain Grafis",
//     idSiswa: 2,
//   },
//   {
//     nama: "Putri Silviana",
//     nrp: "87326654",
//     email: "putrisilviana@gmail.com",
//     jurusan: "Perhotelan",
//     idSiswa: 3,
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

//? Contoh menggunakan Asynchronous callback dengan AJAX versi vanilla javascript :
// function getDataSiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataSiswa(
//   "data/mahasiswa.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );

// console.log("selesai");

//? Contoh menggunakan Asynchronous Callback menggunakan JQuery :
// console.log("Mulai");
// $.ajax({
//   url: "data/mahasiswa.json",
//   success: (mhs) => {
//     mhs.forEach((m) => {
//       return console.log(m.nama);
//     });
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log("Selesai");

//? Contoh 1.1. asynchronous from dea afrizal :
// function satu() {
//   console.log("Satu");
// }

// function dua() {
//* setTimeout ini berjalan secara asynchronous
//   setTimeout(() => {
//     console.log("dua");
//   }, 3000);
// }

// function tiga() {
//   console.log("tiga");
// }

// satu();
// dua();
// tiga();

//? Contoh 1.2. callback from dea afrizal :
// const token = ~~[Math.random() * 12345678];
// const pictures = ["i.jpg", "2.jpg", "3.jpg"];

// function login(username, callback) {
//   console.log("processingtoken user now...");
//   setTimeout(() => {
//     callback({ token, username });
//   }, 3000);
// }

// function getUser(token, callback) {
//   console.log("Proseccing apikey now...");
//   if (token) {
//     setTimeout(() => {
//       callback({ apikey: "xkey123" });
//     }, 5000);
//   }
// }

// function getPictures(apiKey, callback) {
//   console.log("Proseccing pictures now...");
//   if (apiKey) {
//     setTimeout(() => {
//       callback(pictures);
//     }, 7000);
//   }
// }

// const user = login("fahmi_art17", function (response) {
//   const token = response.token;
//   getUser(token, function (response) {
//     const apikey = response.apikey;
//     console.log(apikey);
//     getPictures(apikey, function (response) {
//       const pics = response;
//       console.log(pics);
//     });
//   });
// });

//* 11. Promise / janji
//* Promise adalah sebuah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous yang akan terjadi di masa yang akan datang.
//* Note : Yang namanya janji(terpenuhi / ingkar), jika di javascript promise ini di artikan states(jika terpenuhi disebut fulfilled / jika ingkar itu disebut dengan rejected / pending <= ini adalah waktu tunggunya sebelum promise tersebut terpenuhi atau tidak). dan untuk  menjalankan keadaan ini ada 3 fungsi callback(resolve <= ini akan kita buat saat janjinya terpenuhi / reject <= ini kita buat ketika janjinya tidak ierpenuhi / finally <= ini ketika waktu tunggunya selesai baik itu janjinya terpenuhi atau tidak terpenuhi). Dan didalam promise ini ada aksi yang kita lakukan ketika janjinya terpenuhi atau tidak terpenuhi seperti, aksi(then <= jika janjinya terpenuhi / catch <= jika janjinya tidak terpenuhi).
//? Contoh preview menggunakan JQuery :
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
// });

//? Contoh preview menggunakan AJAX versi vanilla javascript :
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

//? Contoh menggunakan AJAX versi vanilla javascript tapi penggunakan fetch() yang mengembalikan promise :
// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

//? Contoh 1.1. promise :
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Ingkar janji..");
//   }
// });

// janji1.then((response) => console.log(`OK! : ${response}`)).catch((response) => console.log(`NOT OK! : ${response}`));

//? Contoh 1.2. promise yang janjinya tidak ditepati / ditepati :
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });
// console.log("Mulai");
// console.log(
//   janji2.then(() => {
//     console.log(janji2);
//   })
// );
// janji2
//   .finally(() => {
//     return console.log("Selesai menunggu!");
//   })
//   .then((response) => {
//     return console.log(`OK : ${response}`);
//   })
//   .catch((response) => {
//     return console.log(`NOT OK! : ${response}`);
//   });
// console.log("Selesai");

//? Contoh 1.3. Promise.all() :
// const film = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         judul: "Spider-Man : Home Comming",
//         sutradara: "Mochammad Fahmi",
//         pemeran: "Tom Holland, Zendaya",
//       },
//     ]);
//   }, 1000);
// });

// const cuaca = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([
//       {
//         kota: "Surabaya",
//         temp: 26,
//         kondisi: "Cerah Berawan",
//       },
//     ]);
//   }, 500);
// });

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

//* Note : Untuk menjalankan promise sekaligus gunakan promise.all().
// Promise.all([film, cuaca]).then((response) => console.log(response));

//* Note : Jika ingin menampilkan promise tersebut tapi terpisan dan tidak ingin berada di dalam array yang sama maka gunakan operator spread.
// Promise.all([film, cuaca]).then((response) => {
//   const [film, cuaca] = response;
//   console.log(film);
//   console.log(cuaca);
// });

//* Penjelasan : Dengan menggunakan promise, kita bisa menyelesaikan callback hell atau callback yang terlalu banyak.

//* 12. Fetch
//* Fetch adalah sebuah API pada javascript modern yang tugasnya untuk mengambil data secara asynchronous.
//* Fetch adalah sebuah fungsi yang ada di javascript yang mengembalikan promise
//* Note : Yang namanya promise harus kita kasih method untuk menangani ketika datanya sudah fulfilled atau datanya sudah di kembalikan.

//* Definisi fetch dari resource nya : fetch adalah sebuah method pada API javascript untuk mengambil resources dari jaringan, dan mengmbalikan promise yang selesai (fullfilled) ketika ada response yang tersedia.

//* Sytax fetch itu seperti ini => fetch(resource, init);
//* Resource nya itu ada 2, yaitu :
//* 1. URL
//* Alamat dari sumber yang kita akan ambil

//* 2. Request Object
//* Representasi permintaan sumber

//* Sedangkan init itu (Optional) yang didalamnya kita bisa beri konfigurasi tambahan pada sebuah request berbentuk object, yaitu :
//* 1. method
//* 2. headers
//* 3. body
//* 4. mode
//* 5. cache
//* 6. referrer
//* 7.referrerPolicy
//* 8. integrity
//* 9. keepalive
//* 10. signal

//* response nya sendiri itu adalah hasil dari fetch, yang berupa promise
//* kita bisa memberikan 2 parameter di dalam response(property, method)
//* property di dalam response itu ada banyak, berikut propertynya :
//* 1. headers
//* 2. ok
//* 3. redirected
//* 4. status
//* 5. statusText
//* 6. type
//* 7. url
//* 8. body

//* method di dalam response itu ada banyak juga, berikut methodnya :
//* 1. clone()
//* 2. error()
//* 3. redirect()
//* 4. blob()
//* 5. formData()
//* 6. json()
//* 7. text()
//* Note : Contoh code ada di file fetch.js

//* 13. fetch (Refactor)
//* fetch (refactor) ini adalah untuk istilah untuk membuat kode kita lebih rapi, terstruktur dan lebih mudah dibaca.
//* Note : Contoh code ada di file fetch.js

//* 14.Async Await
//* Async / Asyncronous Function adalah sebuah function yang bekerja secara asyncronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang syncronous (standard).

//* Asycronous Function
//* Asyncronous Function adalah sebuah async function itu dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai.
//*Contoh penulisan codenya :
//* Contoh tanpa async dan await :
// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 3000);
// });
// coba.then(() => console.log(coba));

//* Contoh dengan menggunakan async dan await :
// function cobaPromise() {
//   return new Promise((resolve, reject) => {
//     const waktu = 6000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve("Selesai!");
//       }, waktu);
//     } else {
//       reject("Kelamaan!");
//     }
//   });
// }
//* Note : Jika kita ingin menggunakan promise(resolve / reject), resolve itu bisa ditangkap menggunakan method then() jika gagal kita bisa ditangkap menggunakan method catch().

// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

//* Note : Jika kita ingin menangkap then & catch di dalam async await, maka gunakan try sebagai then & catch sebagai catch untuk pengganti then & catch.
// async function cobaAsync() {
//   try {
//     const coba = await cobaPromise();
//     console.log(coba);
//   } catch (err) {
//     console.error(err);
//   }
// }

// cobaAsync();

//* 15. Error Handling
//* method yang digunakan sebagai error handling itu ada 2 :
//* 1.1. then()
//* 1.2. catch()

//* Note : Jika error handlingnya menggunakan async await itu kita menggunakan try & catch().
