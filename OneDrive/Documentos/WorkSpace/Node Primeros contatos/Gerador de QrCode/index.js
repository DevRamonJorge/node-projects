import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

//Gera um qr-code com base na URL
inquirer
  .prompt([{
    message: 'Type of you URL',
    name: "URL"
  }])
.then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image('https://' + url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
          console.log('The file has been saved!');
      });
})
.catch((error) => {
    if (error.isTtyError) {
        console.error('Prompt could not be rendered in the current environment.');
    } else {
        console.error('An error occurred:', error);
    }
});
