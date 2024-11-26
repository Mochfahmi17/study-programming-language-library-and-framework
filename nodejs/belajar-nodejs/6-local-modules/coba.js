const nama = "Mochammad Fahmi Kurnia Sandi";

const cetakNama = (nama) => `Hi, nama saya ${nama}.`;

const PI = 3.14;

const mahasiswa = {
  nama: "Ilham Gaming",
  umur: 20,
  cetakMhs() {
    return `Halo, nama saya ${this.nama}, saya berumur ${this.umur} tahun.`;
  },
};

class Orang {
  constructor() {
    console.log("Object orang telah dibuat!!");
  }
}

module.exports = { cetakNama, nama, PI, mahasiswa, Orang };
