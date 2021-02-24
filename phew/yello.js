const output = require('./inv/output.json');

module.exports = {
    execute: async (req, res, endpoint, tools) => {
        let randomOutput = output[Math.floor(Math.random() * output.length)];
        res.header("Content-Type", "application/json");
        res.send(randomOutput);
    }
}