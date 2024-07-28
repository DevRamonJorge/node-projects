const fs = require('fs');

var filePath = 'message.txt';
var saudacao = 'Hello World';

fs.writeFile(filePath, saudacao, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log('salvo');
});
