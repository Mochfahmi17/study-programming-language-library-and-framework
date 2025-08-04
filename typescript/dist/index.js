"use strict";
// var nama = "ilham";
// var umur = 18;
// umur = 20;
// console.log(umur);
//* Annotation data primitive
// let nama: string = "Ilham";
// console.log(nama);
// let umur: number = 18;
// console.log(umur);
// let isProgrammmer: boolean = true;
// console.log(isProgrammmer);
// let isCakep: any = 11;
// console.log(isCakep);
//* Annotation data array
// let array_nama: string[] = ["ilham", "budi", "susi"];
// console.log(array_nama);
// let array_umur: number[] = [17, 23, 20];
// console.log(array_umur);
// let array_isProgrammer: boolean[] = [true, false, true];
// console.log(array_isProgrammer);
// let array_level: (string | number)[];
// array_level = ["juara 1", 3];
// console.log(array_level);
// let array_any: any[] = ["aku string", 10, true];
// // array_any = 3; //* akan error karena any[] hanya meperbolehka tipe data apapun yang berada didalam array
// console.log(array_any);
//* Tuple
// let tuple: [string, number, boolean] = ["2", 2, true];
// console.log(tuple);
//* Object
// let mahasiswa: object[] = [
//   {
//     nim: 123,
//     nama: "ilham",
//   },
//   {
//     nim: 456,
//     nama: "budi",
//   },
// ];
// console.log(typeof mahasiswa);
// function
// function tambah(nilai1: number, nilai2: number): void {
//   let hasil = nilai1 + nilai2;
//   console.log(hasil);
// }
// tambah(1, 2);
// function halo(pesan: string): string {
//   return pesan;
// }
// console.log(halo("halooo"));
//* Interface
// interface MahasiswaInterface {
//   nim: number;
//   nama: string;
// }
// let mahasiswa = {
//   nim: 123,
//   nama: "eko",
// };
// let mahasiswa_eko: MahasiswaInterface = {
//   nim: 123,
//   nama: "eko",
// };
// console.log(mahasiswa_eko);
// let mahasiswa_joko: MahasiswaInterface = {
//   nim: 456,
//   nama: "Joko",
// };
// console.log(mahasiswa_joko);
//* Intersection
// interface MahasiswaInterface {
//   nim: number;
//   nama: string;
// }
// interface DosenInterface {
//   nidn: number | string;
//   nama_dosen: string;
// }
// type dpa = MahasiswaInterface & DosenInterface;
// let dpa1: dpa = {
//   nim: 123,
//   nama: "Ilham",
//   nidn: 456,
//   nama_dosen: "Suyono",
// };
// console.log(dpa1);
//* Class
// class Mahasiswa {
//   nim: number | string;
//   nama: string;
//   constructor(param_nim: number | string, param_nama: string) {
//     this.nim = param_nim;
//     this.nama = param_nama;
//     console.log(this.nim, this.nama);
//   }
//   halo(): string {
//     return `halo ${this.nama} NIM kamu adalah ${this.nim}`;
//   }
// }
// const joko = new Mahasiswa(123, "joko");
// console.log(joko.halo());
// const ilham = new Mahasiswa(123, "Ilham");
// console.log(ilham.halo());
//* Enum
// enum StatusMahasiswa {
//   lulus = "L",
//   aktif = "A",
//   cuti = "C",
// }
// function displayStatus(status: string): void {
//   if (status == StatusMahasiswa.lulus) {
//     console.log("mahasiswa sudah lulus");
//   } else if (status === StatusMahasiswa.aktif) {
//     console.log("mahasiswa masih aktif");
//   } else if (status === StatusMahasiswa.cuti) {
//     console.log("mahasiswa sedang cuti");
//   }
// }
// displayStatus("A");
//* Generic
function getFirstElement(param) {
    return param[0];
}
const array = ["a", "b", "c"];
let hasil;
hasil = getFirstElement(array);
console.log(hasil);
