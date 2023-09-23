const validator = require ('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('saskiakarmilaa@gmail.com'));
// console.log(validator.isMobilePhone('0812345678', "id-ID"));
// console.log(validator.isNumeric('0812345678'));

// console.log(chalk.italic.bgBlue.black('hello world!'));
const nama = 'saskia';
const pesan =  chalk`lorem, ipsum dolor {bgGreen.black.striketrough sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Nama Saya : ${nama}`;
console.log(pesan);
