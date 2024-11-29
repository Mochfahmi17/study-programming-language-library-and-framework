import validator from "validator";
import chalk from "chalk";

// Validator
// const emailValidated = validator.isEmail("ilhamgamin@gmail.com");
// const mobilePhoneValidated = validator.isMobilePhone("082143092412", "id-ID");
// const numericValidated = validator.isNumeric("asu");

// console.log(emailValidated);
// console.log(mobilePhoneValidated);
// console.log(numericValidated);

// Chalk
const cetakWarna = chalk.bgBlue.italic("Hello World!");
console.log(cetakWarna);
const nama = "Ilham gaming";
const pesan = chalk`Lorem ipsum dolor {bgBlue.italic sit amet} consectetur {bgGreen adipisicing} elit. Possimus, repellat. Halo nama saya : {bgRed ${nama}}`;
console.log(pesan);
