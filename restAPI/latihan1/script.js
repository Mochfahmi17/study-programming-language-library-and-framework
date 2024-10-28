//* Mengubah object jadi json
// const mahasiswa = {
//   nama: "Mochammad Fahmi",
//   nrp: "09914387",
//   email: "mochammadfahmiks@gmail.com",
// };

// console.log(JSON.stringify(mahasiswa));

//* mengambil data json jadi object
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// };
// xhr.open("GET", "coba.json", true);
// xhr.send();

//* Menggunakan jQuery
$.getJSON("coba.json", function (data) {
  console.log(data);
});
