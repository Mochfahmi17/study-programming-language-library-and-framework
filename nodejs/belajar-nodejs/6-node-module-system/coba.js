const cetakNama = (nama) => `Hi, nama saya ${nama}`;

const PI = 3.14;

const mahasiswa = {
  nama: "Mochammad Fahmi",
  umur: 24,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {
  cetakNama: cetakNama,
  PI: PI,
  mahasiswa: mahasiswa,
  Orang: Orang,
};
