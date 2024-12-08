//? Path
//* Path merupakan standard library yang bisa kita gunakan untuk bekerja dengan lokasi file dan directory/folder.

//* Contoh code :
import path from "path";

const file = "C:/Users/user/Documents/2024-coding-challenge/1-grow.js";

console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
console.log(path.sep);
