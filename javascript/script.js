// let variable = "Hello World!";
// let name = "Ilham";
// let age = 30;
// let status = "single";

// let output = `${variable.replace("World", "there")} Nama Saya ${name} umur saya ${age} status saya masih ${status}.`;
// console.log(output);

// let wadah = null;
// console.log(typeof wadah);

// if
// Contoh 1 :
// console.log("Sebelum pembanding");
// if (1 + 1 == 3) {
//   console.log("Didalam pembanding");
// }
// console.log("Setelah pembanding");

// Contoh 2 :
// let angka = Math.random();
// if (angka >= 0.5) {
//   console.log(angka + " Lebih besar dari 0.5");
// }
// if (angka <= 0.5) {
//   console.log(angka + " Lebih kecil dar 0.5");
// }

// else if
// Contoh 1 :
// let hariIni = prompt("Masukkan hari ini : ").toLowerCase();
// let hari = ["senin", "selasa", "rabu", "kamis", "jumat"];
// let hariLibur = ["sabtu", "minggu"];
// if (hariIni == hari[0]) {
//   console.log(alert("hari " + hariIni + " adalah hari kerja!"));
// } else if (hariIni == hari[1]) {
//   console.log(alert("hari " + hariIni + " adalah hari kerja!"));
// } else if (hariIni == hari[2]) {
//   console.log(alert("hari " + hariIni + " adalah hari kerja!"));
// } else if (hariIni == hari[3]) {
//   console.log(alert("hari " + hariIni + " adalah hari kerja!"));
// } else if (hariIni == hari[4]) {
//   console.log(alert("hari " + hariIni + " adalah hari kerja!"));
// } else if (hariIni == hariLibur[0]) {
//   console.log(alert("hari " + hariIni + " adalah hari libur!"));
// } else if (hariIni == hariLibur[1]) {
//   console.log(alert("hari " + hariIni + " adalah hari libur!"));
// } else {
//   console.log(alert("anda memasukkan data yang salah"));
// }

// Contoh 2 :
// let angka = 75;
// if (angka <= 50) {
//   console.log("E");
// } else if (angka <= 60) {
//   console.log("D");
// } else if (angka <= 70) {
//   console.log("C");
// } else if (angka <= 80) {
//   console.log("B");
// } else if (angka <= 100) {
//   console.log("A");
// }

// if bersarang
// const password = prompt("Masukkan password : ");
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     alert("Password valid");
//   } else {
//     alert("Password tidak boleh mengandung spasi");
//   }
// } else {
//   alert("Password minimal 6 kharakter");
// }

// Operator logika
// &&, ||, !!
// Contoh && (dan):
// const password = prompt("Masukkan password : ");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   alert("Password valid");
// } else {
//   alert("Password tidak valid");
// }

// Contoh || (or):
// let role = prompt("Masukkan role akun");
// if (role === "admin" || role === "spv") {
//   alert("Anda boleh mengaksesnya!");
// } else {
//   alert("Anda tidak dapat mengaksesnya");
// }

// Contoh ! (not):
// let role = prompt("Masukkan role akun");
// if (role !== "admin") {
//   alert("Anda tidak dapat mengaksesnya");
// } else {
//   alert("Anda boleh mengaksesnya");
// }

// Switch
// contoh switch :
// let balon = prompt("Masukkan warna balon");
// switch (balon) {
//   case "merah":
//     alert("balon kamu berwarna merah");
//     break;
//   case "biru":
//     alert("balon kamu berwarna biru");
//     break;
//   case "kuning":
//     alert("balon kamu berwarna hijau");
//     break;
//   default:
//     alert("balon kamu belum terdaftar");
// }

// Array
// Mengubah Nilai Array
// Contoh :
// let warna = ["hijau", "kuning", "kelab", "bu"];
// warna[2] = "kelabu";
// warna[3] = "merah muda";
// warna[9] = "hitam";
// console.log(warna);

// Method pada array
// - Push & Pop
// 1. push adalah menambahkan item pada akhir array
// 2. pop adalah menghapus item dari paling akhir array
// Contoh push :
// let beratBarbel = [];
// beratBarbel.push(20, 15, 10, 5, 2.5);
// console.log(beratBarbel);

// Contoh pop :
// let beratBarbel = [20, 15, 10, 5, 2.5];
// beratBarbel.pop();
// console.log(beratBarbel);

// shift & unshift
// Note :
// 1. shift adalah menghapus item dari paling awal array
// 2. unshift adalah menambahkan item pada awal array
// 3. concat adalah menggabungkan array
// 4. includes adalah mencari suatu nilai di dalam array
// 5. indexOf adalah sama kaya string.indexOf
// 6. join adalah membuat suatu string dari sebuah array
// 7. reverse adalah membalikan urutan nilai dari array
// 8. slice adalah menyalin sebagaian nilai dari array
// 9. splice adalah menghapus atau mengubah element
// 10. sort adalah mengurutkan nilai pada array
// contoh shift :
// let student = ["Ilham Kurniawan", "Iqbal Maulana"];
// student.shift();
// console.log(student);

// contoh unshift :
// let student = [];
// student.unshift("Ilham Kurniawan", "Iqbal Maulana");
// console.log(student);

// contoh concat :
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// console.log(array3);

// contoh includes :
// let pet = ["cat", "dog", "bat"];
// console.log(pet.includes("dog"));

// contoh indexOf :
// let animal = ["unta", "ayam", "sapi", "kucing", "anjing"];
// console.log(animal.indexOf("kucing"));

// contoh join :
// let elements = ["Fire", "Air", "Water"];
// let join = elements.join(" - ");
// console.log(join);

// contoh reverse :
// let array = ["One", "Two", "three"];
// let reversed = "reversed : " + array.reverse();
// console.log(reversed);

// contoh slice :
// let animals = ["ant", "bison", "camel", "duck", "elephant"];
// let animals1 = animals.slice(2, 4);
// console.log(animals1);

// contoh splice :
// let month = ["Jan", "March", "April", "June", "July", "Aug"];
// month.splice(1, 0, "Feb");
// month.splice(4, 2, "May");
// console.log(month);

// contoh sort :
// let month = ["March", "Jan", "Feb", "Dec"];
// console.log(month.sort());

// const and array
// const kumpulanWarna = ["Merah", "Kuning", "Hijau"];
// const tambahWarna = kumpulanWarna.push("Biru", "Pink");
// console.log(kumpulanWarna);

// Array Multidimensi (Nested Array)
// Contoh :
// const board = [
//   [null, null, "O"],
//   ["X", "O", null],
//   ["O", null, "X"],
// ];
// console.log(board[0][2]);

// Objek
// Contoh :
const fitnessData = {
  totalSteps: 123456,
  totalMiles: 119.2,
  avgCaloriesburn: 6654,
};
console.log(fitnessData);
