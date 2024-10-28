const tombol = document.getElementById("tUbahWarna");
tombol.onclick = function () {
  //   document.body.style.backgroundColor = "salmon";
  document.body.classList.toggle("biru-muda");
};

const tombolBaru = document.createElement("button");
const text = document.createTextNode("Acak warna");
tombolBaru.appendChild(text);
tombolBaru.setAttribute("type", "button");
tombol.after(tombolBaru);

tombolBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sliderRed = document.querySelector("input[name=sMerah]");
const sliderGreen = document.querySelector("input[name=sHijau]");
const sliderBlue = document.querySelector("input[name=sBiru]");

sliderRed.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sliderGreen.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sliderBlue.addEventListener("input", function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  // posisi mouse
  // event.clientX
  // event.clientY
  // console.log(window.innerWidth);
  // Note : browser ada didalam objek window sedangkan halaman putih pada website ada didalam objek document
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
