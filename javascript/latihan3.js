// Suwit Jawa v.2.0
// menangkap pilihan player
let tanya = true;
while (tanya) {
  let p = prompt("Silahkan pilih : gajah, semut atau orang");
  // menangkap pilihan komputer
  // membuat bilangan random
  let com = Math.random();
  if (com < 0.34) {
    com = "gajah";
  } else if (com >= 0.34 && com < 0.67) {
    com = "orang";
  } else {
    com = "semut";
  }
  //   Menentukan rules
  let hasil = "";
  if (p == com) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    if (com == "orang") {
      hasil = "MENANG!";
    } else {
      hasil = "KALAH!";
    }
  } else if (p == "semut") {
    if (com == "gajah") {
      hasil = "KALAH!";
    } else {
      hasil = "MENANG!";
    }
  } else if (p == "orang") {
    if (com == "semut") {
      hasil = "MENANG!";
    } else {
      hasil = "KALAH!";
    }
  } else {
    hasil = "Anda memasukkan pilihan yang salah!";
  }
  //   Menampilkan hasilnya
  alert("Kamu memilih : " + p + "\nKomputer memilih : " + com + "\nMaka hasilnya adalah : Kamu " + hasil);
  tanya = confirm("Ingin main lagi ?");
}
alert("Terima kasih sudah bermain");
