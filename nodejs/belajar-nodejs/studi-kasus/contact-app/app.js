const { simpanContact, listContact, detailContact, hapusContact } = require("./contacts");
const yargs = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Menambahkan kontak baru.",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      noHP: {
        describe: "Nomor Hp",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.noHP, argv.email);
    },
  })
  .demandCommand();

// Menampilkan daftar semua nama & no hp contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no hp yang ada di kontak.",
  handler() {
    listContact();
  },
});

// Menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "Menampilkan detail kontak berdasarkan nama.",
  builder: {
    nama: {
      describe: "Nama lengkap.",
      demmandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

// Menghapus sebuah contact
yargs.command({
  command: "delete",
  describe: "Menghapus kontak berdasarkan nama.",
  builder: {
    nama: {
      describe: "Nama lengkap.",
      demmandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    hapusContact(argv.nama);
  },
});

yargs.parse();

// const main = async () => {
//   const nama = await tulisPertanyaan("Masukkan nama : ");
//   const noHP = await tulisPertanyaan("Masukkan no HP : ");
//   const email = await tulisPertanyaan("Masukkan email : ");

//   simpanContact(nama, noHP, email);
// };

// main();
