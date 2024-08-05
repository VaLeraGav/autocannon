const fs = require('fs');
const { join } = require('path');

function setLogs(result) {
    fs.writeFileSync(
        join(process.cwd(), 'results', Date.now() + '.json'),
        JSON.stringify(result, undefined, 2),
        { encoding: 'utf8' }
    );
}

module.exports = {
    setLogs
}
