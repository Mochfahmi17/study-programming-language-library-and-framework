let ulangi = true;
while (ulangi) {
  let kesempatan = 3;
  while (kesempatan != 0) {
    let com = Math.floor(Math.random() * 10) + 1;
    let user = parseInt(prompt("Tebak angka!\nMasukkan angka 1 - 10\nKesempatan anda " + kesempatan + " kali"));
    let hasil = "";
    if (user == com) {
      alert("Selamat tebakan kamu benar");
    } else {
      alert("Sayang sekali tebakan kamu salah :(");
    }
    hasil = confirm("Coba lagi ?\nKesempatanmu tinggal " + kesempatan + " lagi");
    kesempatan--;
  }
  ulangi = confirm("Ingin coba lagi ?");
}
alert("Terima kasih sudah bermain :)");
