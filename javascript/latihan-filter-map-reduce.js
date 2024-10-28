// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos
  .filter((video) => {
    return video.textContent.includes("JAVASCRIPT LANJUTAN");
  })

  // Ambil durasi masing-masing video
  .map((item) => {
    return item.dataset.duration;
  })

  // Ubah durasi menjadi int(Integer), lalu ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 -> [10, 30] menggunakan split
    const parts = waktu.split(":").map((part) => {
      return parseInt(part);
    });
    return parts[0] * 60 + parts[1];
  })
  // Jumlahkan semua detiknya
  .reduce((acc, curr) => {
    return acc + curr;
  });

// ubah formatnya menjadi jam, menit, detik,
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter((video) => {
  return video.innerHTML.includes("JAVASCRIPT LANJUTAN");
}).length;
const pVideo = document.querySelector(".jumlah-video");
pVideo.innerHTML = `ada ${jmlVideo} total video.`;
