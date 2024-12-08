//? DNS
//* DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS (Domain Name Server)

//* Contoh code :
import dns from "dns/promises";

const address = await dns.lookup("www.programmerzamannow.com");

console.info(address.address);
console.info(address.family);
