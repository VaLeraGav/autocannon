const fs = require('fs');

function setLogs(path, result) {
    fs.mkdir(path, { recursive: true }, (err) => {
        if (err) throw err;

        const contents = JSON.stringify(result, undefined, 2)
        const nameFile = path + '/' + Date.now() + '.json';

        fs.writeFile(nameFile, contents, err => {
            if (err) throw err;
            console.log('Данные успешно записаны в файл: ', nameFile);
        });
    });
}

module.exports = {
    setLogs
};
