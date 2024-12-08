//? Debugger
//* NodeJS memiliki fitur debugger, dimana kita bisa mengikuti tahapan eksekusi program di NodeJS.
//* Hal ini sangat cocok ketika kita melakukan proses debugging, mencari sebab masalah yang terjadi di aplikasi kita.

//? Breakpoint
//* Dalam debugging, terdapat istilah breakpoint, yaitu lokasi dimana kita ingin menghentikan sementara eksekusi kode program.
//* Biasanya ini dilakukan untuk mengawasi data-data di sekitar lokasi berhentinya tersebut.
//* Untuk menambahkan breakpoint, kita bisa menggunakan kata kunci: debugger.

//? Menjalankan Mode Debug
//* Jika kita menjalankan file JavaScript hanya dengan menggunakan perintah node namafile.js, maka secara default dia tidak akan dalam mode debug.
//* Agar jalan dalam mode debug, kita harus menambahkan perintah inspect:
//* node inspect namafile.js

//? perintah Debugger
//* Saat masuk ke mode debug, ada beberapa perintah yang bisa kita gunakan dalam melakukan debugging :
//* cont, c: Continue execution
//* next, n: Step next
//* step, s: Step in
//* out, o: Step out
//* pause: Pause running code

//* Contoh code :
function sayHello(name) {
  debugger;
  return `Jello ${name}`;
}

const firstName = "Ilham";

console.log(sayHello(firstName));
