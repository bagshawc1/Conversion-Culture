const express = require("express")
const PORT = process.env.PORT || 3001

const app = express()

app.get("/api", (req, res) => {
    res.json({ msg: "server says hi"});
});

// 159 Endpoint
app.get("/api/c2fe07ac", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/v43QWAXbiqD1",
            "https://moxie-ctcstores.clicdata.com/v/544LY6ofges4",
            "https://moxie-ctcstores.clicdata.com/v/8JmAbwzyPuw6"
        ]
    });
    console.log("responded with 159 url's")
});

// 071 Endpoint
app.get("/api/ffd1872b", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/9rQEOvK6soiR",
            "https://moxie-ctcstores.clicdata.com/v/NzT80yp1sOT3",
            "https://moxie-ctcstores.clicdata.com/v/X7nFJWgXh4Lu"
        ]
    });
    console.log("responded with 071 url's")
});

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
