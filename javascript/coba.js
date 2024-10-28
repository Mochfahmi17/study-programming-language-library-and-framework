// let noAngkot = 1;
// let jmlAngkot = 10;
// let angkotBeroperasi = 6;
// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
//     console.log("Angkot no." + noAngkot + " sedang beroperasi.");
//   } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//     console.log("Angkot no." + noAngkot + " sedang lembur.");
//   } else {
//     console.log("Angkot no." + noAngkot + " sedang tidak beroperasi.");
//   }
// }

// for (let nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//   console.log("hello world! " + nilaiAwal + "x");
// }

// let angka = prompt("Masukkan angka :");
// if (angka % 2 == 0) {
//   alert(angka + " adalah bilangan GENAP");
// } else if (angka % 2 == 1) {
//   alert(angka + " adalah bilangan GANJIL");
// } else {
//   alert("yang anda masukkan bukan angka!");
// }

// let angka = parseInt(prompt("Masukkan angka : "));

// switch (angka) {
//   case 1:
//     alert("Anda memasukkan angka 1");
//     break;
//   case 2:
//     alert("Anda Memasukkan angka 2");
//     break;
//   case 3:
//     alert("Anda memasukkan angka 3");
//     break;
//   default:
//     alert("angka yang anda masukkan angka yang salah");
// }

// switch
// let item = prompt("Masukkan nama makanan / minuman : \n (cth: Nasi Goreng, Daging, Susu, Soda, Alkohol, Hamburger, Mie Instant)");

// switch (item) {
//   case "Nasi Goreng":
//   case "Daging":
//   case "Susu":
//     alert("Makanan/minuman SEHAT!");
//     break;
//   case "Soda":
//   case "Alkohol":
//   case "Hamburger":
//   case "Mie Instant":
//     alert("Makanan/minuman TIDAK SEHAT");
//     break;
//   default:
//     alert("Anda memasukkan nama makanan/minuman yang salah!");
// }

// (PR)
// let s = "";
// let r = "";

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += "*";
//   }
//   for (let m = 4; m > i; m--) {
//     r += "*";
//   }
//   r += "\n";
//   s += "\n";
// }
// console.log(s);
// console.log(r);

// suit jawa
// menangkap pilihan player
// let tanya = true;
// while (tanya) {
//   let p = prompt("Pilih : gajah, semut, orang");

//   // menangkap pilihan komputer
//   // membangkitkan bilangan random
//   let com = Math.random();

//   if (com < 0.34) {
//     com = "gajah";
//   } else if (com >= 0.34 && com < 0.67) {
//     com = "orang";
//   } else {
//     com = "semut";
//   }

//   // menentukan rules
//   let hasil = "";

//   if (p == com) {
//     hasil = "SERI!";
//   } else if (p == "gajah") {
//     if (com == "orang") {
//       hasil = "MENANG!";
//     } else {
//       hasil = "KALAH!";
//     }
//   } else if (p == "orang") {
//     if (com == "gajah") {
//       hasil = "KALAH!";
//     } else {
//       hasil = "MENANG";
//     }
//   } else if (p == "semut") {
//     if (com == "orang") {
//       hasil = "KALAH!";
//     } else {
//       hasil = "MENANG!";
//     }
//   } else {
//     hasil = "Memasukkan pilihan yang salah!";
//   }
//   // tampilkan hasilnya
//   alert("Kamu memilih : " + p + "\nkomputer memilih : " + com + "\nMaka hasilnya : Kamu " + hasil);
//   tanya = confirm("Ingin main lagi ?");
// }

// alert("Terima kasih sudah bermain");

// function
// function jumlah(a, b) {
//   let volumeKubus;
//   volumeKubus = a ** 3 + b ** 3;

//   return volumeKubus;
// }
// let hasil = jumlah(parseInt(prompt("Masukkan nilai 1 : ")), parseInt(prompt("Masukkan nilai 2 : ")));
// alert("hasil dari volume kubus adalah : " + hasil);

// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }
// let hasil = kali(tambah(1, 2), tambah(3, 4));
// alert(hasil);

// function tambah() {
//   let hasil = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     hasil = hasil + arguments[i];
//   }
//   return hasil;
// }

// let coba = tambah(1, 2, 3, 4);
// console.log(coba);

// let a = 1;
// function number() {
//   a = 2;
// }
// number();
// console.log(a);

// function tampilAngka(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   return tampilAngka(n - 1);
// }
// tampilAngka(10);

// function faktorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * faktorial(n - 1);
// }

// console.log(faktorial(5));

// array
// let binatang = ["Kucing", "Kelinci", "Monyet", "Panda", "Koala", "Sapi"];
// console.log(binatang.length);

// let myArr3 = ["teks", 2, false, [4, 5, 6]];
// console.log(myArr3[3][1]);

// menambah isi array
// let arr = ["a", 1, true];
// console.log(arr);

// menghapus isi array
// let arr = ["Fahmi", "Ilham", "putri", "fitri"];
// for (let i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }

// method pada array
// 1. Join
// let arr = ["fahmi", "ilham", "putri"];
// console.log(arr.join(" "));

// 2. push & pop
// let arr = ["fahmi", "ilham", "putri"];
// arr.push("fitri", "Doddy");
// arr.pop();
// console.log(arr);

// 3. Unshift & Shift
// let arr = ["fahmi", "ilham", "putri"];
// arr.unshift("Doddy");
// arr.shift();
// console.log(arr);

// 4. Splice
// Rumus splice
// splice(indexAwal1, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// let arr = ["fahmi", "ilham", "putri"];
// arr.splice(1, 2, "Dody", "Yanto");
// console.log(arr.join(" "));

// 5. Slice
// Rumus slice
// slice(indexAwal, indexAkhir);
// let arr = ["fahmi", "ilham", "putri", "Ucup", "Reyhan"];
// let arr2 = arr.slice(1, 3);
// console.log(arr2);

// 6. foreach
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let nama = ["fahmi", "ilham", "fitri"];
// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

// 7. map
// let angka = [1, 2, 5, 3, 6, 8, 4];
// let angka2 = angka.map(function (e) {
//   return e * 2;
// });

// console.log(angka2);

// 8. sort
// let angka = [1, 2, 5, 3, 6, 8, 10, 20, 4, 7];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka);

// 9. filter
// let angka = [1, 2, 5, 3, 6, 8, 10, 20, 4, 7];
// let angka2 = angka.filter(function (y) {
//   return y > 5;
// });
// console.log(angka2);

// 10. find
// let angka = [1, 2, 5, 3, 6, 8, 10, 20, 4, 7];
// let angka2 = angka.find(function (w) {
//   return w > 5;
// });
// console.log(angka2);

// tugas
// let penumpang = [];
// let tambahPenumpang = function (namaPenumpang, penumpang) {
// Jika angkot kosong
// if (penumpang.length == 0) {
// Tambah penumpang di awal array
// penumpang.push(namaPenumpang);
// kembalikan isi array & keluar dari function
//   return penumpang;
// } else {
// Telusuri seluruh kursi dari awal
// for (let i = 0; i < penumpang.length; i++) {
// Jika ada kursi kosong
// if (penumpang[i] == undefined) {
// Tambah penumpang di kursi tersebut
// penumpang[i] = namaPenumpang;
// Kembalikan isi array & keluar dari function
// return penumpang;
// jika sudah ada nama yang sama
// } else if (penumpang[i] == namaPenumpang) {
// tampilkan pesan kesalahannya
// console.log(namaPenumpang + " sudah ada di dalam angkot.");
// kembalikan isi array & keluar dari function
// return penumpang;
// Jika seluruh kursi terisi
// } else if (i == penumpang.length - 1) {
// Tambah penumpang di akhir array
// penumpang.push(namaPenumpang);
// Kembalikan isi array & keluar dari function
//         return penumpang;
//       }
//     }
//   }
// };

// let hapusPenumpang = function (namaPenumpang, penumpang) {
// Jika angkot kosong
// if (penumpang.length == 0) {
// Tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
//   console.log("Angkot masih kosong");
// } else {
// Telusuri kursi dari awal
// for (let i = 0; i < penumpang.length; i++) {
// Jika nama penumpang sesuai
// if (penumpang[i] == namaPenumpang) {
// Hapus penumpang dengan mengubah namanya menjadi undefined
// penumpang[i] = undefined;
// Kembalikan isi array & keluar dari function
// return penumpang;
// Jika tidak ada nama yang sesuai
// } else if (i == penumpang.length - 1) {
// Tampilkan pesan kesalahannya
// console.log(namaPenumpang + " Tidak ada didalam angkot.");
// kembalikan isi array & keluar dari function
//         return penumpang;
//       }
//     }
//   }
//   return penumpang;
// };

// Objek
// let mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
//   ips: [3.0, 2.5, 3.2],
//   alamat: {
//     jalan: "Jl. Gresik ppi 6 no. 23",
//     kota: "Surabaya",
//     provinsi: "Jawa Barat",
//   },
// };

// Membuat objek
// contoh membuat objek literal
// let mhs = {
//   nama: "Mochammad Fahmi Kurnia Sandi",
//   umur: 24,
//   jurusan: "Rekayasa Perangkat Lunak",
// };
// console.log(mhs);

// Contoh membuat objek function declaration
// let buatObjectMahasiswa = function (nama, umur, jurusan) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.umur = umur;
//   mhs.jurusan = jurusan;
//   return mhs;
// };
// let mhs3 = buatObjectMahasiswa("Ilham", "21", "Rekayasa Perangkat Lunak");
// console.log(mhs3);

// Contoh membuat object constructor :
// function Mahasiswa(nama, umur, jurusan) {
//   this.nama = nama;
//   this.ummur = umur;
//   this.jurusan = jurusan;
// }
// let mhs4 = new Mahasiswa("erick", 24, "alfonso");
// console.log(mhs4);

// Contoh 2 object constructor :
// function Halo() {
//   console.log("Hello World");
// }

// new Halo();

// This
// This adalah sebuah key spesial yang secara otomatis didefinisikan pada setiap function atau object
// Contoh 1 :
// menggunakan function declaration
// function halo() {
//   console.log(this);
//   console.log("helo");
// }
// this.halo();
// Note :
// Dalam khasus ini this ini berfungsi mengembalikan object global

// Contoh 2 :
// menggunakan object literal
// let obj = { nama: "Mochammad fahmi", umur: 24, alamat: "Jl. Gresik ppi 6 no. 22" };
// obj.halo = function () {
//   console.log(this);
//   console.log("Hello");
// };
// obj.halo();
// Dalam kasus ini this ini mengembalikan object yang bersangkutan

// Contoh 3 :
// menggunakan object constructor
// function Halo() {
//   console.log(this);
//   console.log("Hello");
// }
// new Halo();
// dalam kasus ini this ini berfungsi mengembalikan object yang baru dibuat

// looping / perulangan
// contoh for :
// for (i = 0; i <= 10; i++) {
//   console.log("Ini diulang sebanyak " + i + " kali");
// }

// contoh for 2 :
// for (i = 10; i >= 0; i--) {
//   console.log("permen ini tingaal " + i + " biji");
// }

// mengambil data dari array dengan looping
// let animals = ["Ayam", "Kucing", "Tikus", "Bebek"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i + 1, animals[i]);
// }

// perulangan bercabang / nested loop
// contoh 1 :
// let str = "LOL";
// for (let i = 0; i < 3; i++) {
//   console.log("outer : ", i + 1);
//   for (let j = 0; j < str.length; j++) {
//     console.log("   inner : " + str[j]);
//   }
// }

// contoh 2 :
let alphabet = "ABCD";
for (let i = 1; i <= 10; i++) {
  console.log(i + ". Soal nomor " + i + " :");
  for (let j = 0; j < alphabet.length; j++) {
    console.log("   " + alphabet[j] + ". Pilihan Jawaban");
  }
}
