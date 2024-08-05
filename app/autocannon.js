const autocannon = require('autocannon');
const { createTableConsole } = require('./createTableConsole.js');
const { setLogs } = require('./setLogs.js');
const { join } = require('path');

async function loadTest(hostname, option = {}) {
    let instance = autocannon(
        option,
        (err, result) => {
            if (err) {
                console.error(err);
            } else {
                console.log("\n============================================================================================\n");
                console.log(hostname);

                let pathLogs = join(process.cwd(), 'results');

                setLogs(pathLogs, result);
                createTableConsole(result);
            }
        }
    );
    process.once('SIGINT', () => {
        instance.stop();
    });
}

module.exports = {
    loadTest
};
