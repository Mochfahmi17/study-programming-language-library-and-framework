// HTML Fragments
// const mhs = {
//   nama: "Mochammad Fahmi",
//   umur: 24,
//   nrp: "23348721",
//   email: "mochammadfahmiks@gmail.com",
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Mochammad Fahmi",
//     email: "mochammafahmiks@gmail.com",
//   },
//   {
//     nama: "Ilham Maulana",
//     email: "ilhammaulana@gmail.com",
//   },
//   {
//     nama: "Muhammad Riskiansyah",
//     email: "mohammadriskiansyah45@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//     ${mhs
//       .map((m) => {
//         return `<ul>
//             <li>${m.nama}</li>
//             <li>${m.email}</li>
//       </ul>`;
//       })
//       .join("")}
// </div>`;

// 3. Conditionals
// Kita juga bisa menggunakan ternary
// Contoh :
// const lagu = {
//   judul: "Walau Habis Terang",
//   penyanyi: "Peterpan",
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
//     </ul>
// </div>`;

// 4. nested
// HTML Fragments bersarang
// const siswa = {
//   nama: "Mochammad Fahmi",
//   kelas: 12,
//   mataPelajaran: ["Ilmu Pengetahuan Alam", "Matematika", "Bahasa Indonesia", "Bahasa Inggris"],
// };

// function cetakMataPelajaran(mataPelajaran) {
//   return `
//     <ol>
//         ${mataPelajaran
//           .map((mp) => {
//             return `<li>${mp}</li>`;
//           })
//           .join("")}
//     </ol>
//     `;
// }

// const el = `<div class="siswa">
//     <h2>${siswa.nama}</h2>
//     <span class="kelas">Kelas : ${siswa.kelas}</span>
//     <h4>Mata Pelajaran :</h4>
//     ${cetakMataPelajaran(siswa.mataPelajaran)}
// </div>`;

// document.body.innerHTML = el;
