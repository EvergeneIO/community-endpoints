module.exports = {
    type: "get",
    execute: async (req, res, endpoint, tools) => {
        function makeid(length) {
            var result = '';
            var characters = '-ABCDEFGHIJKLMNOPQRSTUVWXYZ.0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }

        let output = makeid(5)
        res.header("Content-Type", "application/json");
        res.send(JSON.stringify({ url: output }, null, 3));
    }
}