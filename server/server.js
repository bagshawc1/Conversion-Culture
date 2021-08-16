const express = require("express")
const PORT = process.env.PORT || 3001

const app = express()

app.get("/api", (req, res) => {
    res.json({ msg: "server says hi"});
});

app.get("/api/ctc159", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/v43QWAXbiqD1",
            "https://moxie-ctcstores.clicdata.com/v/544LY6ofges4",
            "https://moxie-ctcstores.clicdata.com/v/8JmAbwzyPuw6"
        ]
    });
    console.log("responded with url's")
});

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
