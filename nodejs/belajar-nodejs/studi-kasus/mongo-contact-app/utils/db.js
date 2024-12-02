import mongoose from "mongoose";

// Connect ke database
mongoose.connect("mongodb://127.0.0.1:27017/coba");

// // Menambahkan 1 data
// const contact1 = new contact({
//   nama: "Putri",
//   nohp: "082140312274",
//   email: "putri@gmail.com",
// });

// // Simpan kedalam collection
// contact1.save().then((contact) => console.log(contact));
