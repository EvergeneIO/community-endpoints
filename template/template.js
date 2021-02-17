// endpoint = filename


module.exports = {
    type: "get",
    execute: async (req, res, endpoint, tools) => {
        // Your Functions

        let output = 'Your Outpud'
        res.header("Content-Type", "application/json");
        res.send(JSON.stringify({ url: output }, null, 3));
    }
}