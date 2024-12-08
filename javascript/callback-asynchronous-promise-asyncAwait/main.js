const tambah = (params1, params2) => {
  return params1 + params2;
};

const kurang = (params1, params2) => {
  return params1 - params2;
};

const hitung = (params1, params2, aksi) => {
  let hasil = 0;
  hasil = aksi(params1, params2);
  return hasil;
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let hasil = hitung(25, 5, kurang);
    resolve(hasil);
  }, 2000);
});
console.log(promise); // Ini akan menghasilkan pending

//* Menampilkan hasil dari
// promise
//   .then((result) => {
//     console.log("hasil pengurangan dari 25 - 5 adalah: ", result);
//     return result;
//   })
//   .then((value) => {
//     const hasil = tambah(value, 3);
//     console.log(hasil);
//     return hasil;
//   })
//   .then((value) => {
//     const hasil = tambah(value, 4);
//     console.log(hasil);
//     return hasil;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//* async
const fungsiku = async () => {
  const p = Promise.resolve("Hello World!");
  console.log(await p);
};

fungsiku();

// console.log(fungsiku()); // Jika kita tidak menggunakan then maka ini akan menghasilkan Promise

// fungsiku()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
