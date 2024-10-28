// DOM adalah antarmuka pemrograman untuk HTML yang merepresentasikan halaman web, sehingga program dapat mengubah dan memanipulasi strukturnya

// DOM Selection
// document.getElementById()
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Mochammad Fahmi";

// document.getElementsByTagName()
// mengembalikan -> HTMLCollection
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// document.getElementsByClassName()
// mengembalikan -> HTMLCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "Sub Judul";

// document.querySelector()
// mengembalikan -> satu element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("li:nth-child(2)");
// li2.style.backgroundColor = "green";

// const p = document.querySelector("p");
// p.innerHTML = "Ini saya yang mengubah";

// document.querySelectorAll()
// mengembalikan -> nodelist
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "orange";
// }

// Manipulasi Element
// element.innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Mochammad Fahmi</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><p>Paragraf 1</p></div>";

// element.style.<propertiCSS>
// const judul = document.querySelector("#judul");
// judul.style.backgroundColor = "salmon";
// judul.style.color = "lightblue";

// mengelola attribute
// element.getAttribute()
// mengembalikan isi dari nilai attribute
// const a = document.querySelector("section#a a");
// a.getAttribute("href");

// element.setAttribute()
// untuk menambahkan attribute
// const judul = document.getElementsByTagName("h1");
// judul[0].setAttribute("name", "fahmi");

// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");

// element.removeAttribute()
// untuk menghapus attribute
// const a = document.getElementsByTagName("a");
// a[0].removeAttribute("href");

// Mengelola class
// element.classList.add()
// untuk menambahkan class
// const p2 = document.querySelector(".p2");
// p2.classList.add("label");

// element.classList.remove()
// untuk menghapus class
// const p2 = document.querySelector(".p2");
// p2.classList.remove("p2");

// element.classList.toggle()
// mengecek jika tidak ada class tersebut maka tambahkan, jika ada maka dihapus
// const p2 = document.getElementsByTagName("p");
// p2[1].classList.add("label");
// p2[1].classList.toggle("ilham"); // hasil tersebut akan bernilai true yang artinya menambahkan class dengan nilai ilham

// element.classList.item()
// untuk mengetahui nama class pada sebuah element
// const p2 = document.querySelector(".p2");
// p2.classList.item(0) // output tersebut adalah tag p dengan class p2

// element.classList.cotains()
// const p2 = document.querySelector(".p2");
// p2.classList.contains("p2"); // output tersebut adalah true, karena class dengan nama p2 itu ada

// element.classList.replace()
// untuk mengganti nilai class
// p2.classList.replace("p2", "paragraf");

// Manipulasi node
// document.createElement()
// Untuk membuat elemen baru
// const pBaru = document.createElement("p");

// document.createTextNode()
// Untuk membuat text
// const text = document.createTextNode("Paragraf Baru");

// node.appendChild()
// Untuk menyimpan tulisan di dalam tag p
// pBaru.appendChild(text);
// simpan pBaru di akhir element parent
// const sectionA = document.getElementById("a");
// sectionA.appendChild(pBaru);

// contoh penggunaan node.insertBefore() :
// Digunakan untuk menyimpan element setelah element parent
// const liBaru = document.createElement("li");
// const textLi = document.createTextNode("Item baru");
// liBaru.appendChild(textLi);
// const ul = document.querySelector("section#b ul");
// const li2 = ul.querySelector("li:nth-child(2)");
// ul.insertBefore(liBaru, li2);

// parentNode.removeChild()
// untuk menghapus element
// const sectionA = document.getElementById("a");
// const a = document.querySelector("section#a a");
// sectionA.removeChild(a);

// parentNode.replaceChild()
// untuk mengganti element
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// const h2 = document.createElement("h2");
// const text = document.createTextNode("Hello World!");
// h2.appendChild(text);
// sectionB.replaceChild(h2, p4);

// Events adalah merepresentasikan sebuah kejadian yang terjadi di dalam DOM dan kejadian tersebut bisa dilakukan oleh user (mouse event, keyboard event, dll) atau dilakukan secara otomatis oleh API (animasi setelah dijalankan, jalaman selesai di load, dll)

// Ada 2 cara 'mendengarkan' event
// 1. event handler bisa dilakukan 2 cara tersebut, yaitu : *inline HTML attribute & element method
// const p3 = document.getElementsByClassName("p3")[0];
// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }
// function ubahWarnaP3() {
//   p3.style.backgroundColor = "lightblue";
// }

// const p2 = document.getElementsByClassName("p2")[0];
// p2.onclick = ubahWarnaP2;

// 2. addEventListener()
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const liBaru = document.createElement("li");
//   const text = document.createTextNode("Item baru");
//   liBaru.appendChild(text);
//   const ul = document.querySelector("ul");
//   ul.appendChild(liBaru);
// });

// contoh perbedaan tersebut :
// contoh event handler :
// const p3 = document.getElementsByClassName("p3")[0];
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };

// p3.onclick = function () {
//   p3.style.color = "red";
// };
// Note : output tersebut menghasilkan teks berwarna merah dan backgroundColor dengan nilai 'lightblue' tidak akan dijalankan

// contoh addEventListener() :
// p3.addEventListener("mouseenter", function () {
//   p3.style.backgroundColor = "lightblue";
// });
// p3.addEventListener("mouseleave", function () {
//   p3.style.backgroundColor = "white";
// });
// Note : output tersebut menghasilkan teks berwarna merah dan background berwarna lightblue sehingga keduanya dilakukan

// PERLU KAMU KETAHUI :
// Daftar Event list :
// 1. Mouse Event
// 1.1. Click
// 1.2. dblclick
// 1.3. mouseover
// 1.4. mouseenter
// 1.5. mouseup
// 1.6. whell
// 1.7. mouseleave
// dll.
// 2. Keyboard Event
// 2.1. keydown
// 2.2. keypress
// 2.3. keyup
// 3. Resource Event
// 4. Focus Event
// 5. View Event
// 5.1. resize
// 5.2. scroll
// 6. Form Event
// 6.1. reset
// 6.2. submit
// 7. CSS Animation & transition Event
// 8. Drag & Drop Event
// dll.

// menghapus sebuah card method by me :
// const silang = document.getElementsByClassName("card")[0];
// silang.addEventListener("click", function () {
//   const parent = document.getElementsByClassName("container")[0];
//   parent.removeChild(silang);
// });

// menghapus sebuah card method by yt unpas :
// const close = document.querySelector(".close");
// close.addEventListener("click", function () {
//   const card = document.querySelector(".card");
//   card.style.display = "none";
// });

// DOM Traversal Method
// 1. parentNode              => Mengembalikan node
// 2. parentElement           => Mengembalikan element
// 3. nextSibling             => Mengembalikan node (mengambil node saudara kandung dalam satu parent element yang sama)
// 4. nexyElementSibling      => Mengembalikan element (mengambil element saudara kandung dalam satu parent element yang sama)
// 4. previousSibling         => Mengembalikan  node (mengambil node saudara kandung sebelumnya dalam satu parent element yang sama)
// 5. previousElementSibling  => Mengembalikan element (mengambil element saudara kandung sebelumnya dalam satu parent element yang sama)

// menggunakan metode DOM traversal (parentElement = menulusuri parent nya)
// const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) { // note : parameter (e) ini berisi event yang sedang terjadi untuk mengetahuinya silahkan ketik console.log(e)
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// masih menggunakan DOM traversal namun menggunakan method forEach()
// const close = document.querySelectorAll(".close");
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); // preventDefault() adalah Mencegah aksi defaultnya
//     e.stopPropagation();
//   });
// });

// const nama = document.getElementsByClassName("nama")[0];
// console.log(nama.previousElementSibling);

// Event bubbling (stopPropagation())
// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault(); // preventDefault adalah Mencegah aksi defaultnya seperti link
  }
});
