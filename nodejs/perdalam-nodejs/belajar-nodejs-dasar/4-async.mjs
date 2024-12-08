//? Global Async
//* Saat kita belajar JavaScript, untuk menggunakan Async Await, biasanya kita perlu membuat terlebih dahulu function yang kita tandai sebagai async.
//* Saat kita menggunakan Module, secara default, global code adalah Async, oleh karena itu kita bisa menggunakan Async Await.
//* Kecuali jika kita membuat function, maka function tersebut harus kita tandai sebagai Async jika ingin menggunakan Async Await.

//* Contoh code menggunakan Modules JavaScript:
function samplePromise() {
  return Promise.resolve("Ilham");
}

const data = await samplePromise();
console.log(data); //* Output : Ilham
