const validator = require("validator");
const chalk = require("chalk");

// const email = validator.isEmail("mochammadfahmiks@gmail.com");
// const numberPhone = validator.isMobilePhone("082143092412", ["id-ID"]);
// const number = validator.isNumeric("08214s3092412");
const blueText = chalk.blue.italic("Hello World");
const pesan = chalk`lorem1sjld kjiuwoin {bgRed.italic kjaskda} jla {bgGreen.bold.black asduw} jhgjhags jkuuix`;
console.log(pesan);
