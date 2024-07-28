const fs = require('fs');

const filePath = 'message.txt';
const message = 'Hello World';

// Função para escrever no arquivo
function escreverNovoArquivo() {
    fs.writeFile(filePath, message, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo:', err);
            return;
        }
        console.log('O arquivo foi salvo com sucesso!');
    });
}

// Verificar se o arquivo existe
fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
        // Arquivo existe, então deleta
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Erro ao deletar o arquivo:', err);
                return;
            }
            console.log('Arquivo deletado com sucesso.');

            // Após deletar, escreve no arquivo novamente
            escreverNovoArquivo();
        });
    } else {
        // Arquivo não existe ou ocorreu um erro ao verificar
        if (err && err.code === 'ENOENT') {
            // Arquivo não existe
            console.log('O arquivo não existe. Criando um novo arquivo...');
        } else {
            // Outro erro
            console.error('Erro ao verificar o arquivo:', err);
        }

        // Escreve no arquivo pela primeira vez
        escreverNovoArquivo();
    }
});


