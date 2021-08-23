const express = require("express")
const PORT = process.env.PORT || 3001

const app = express()

app.get("/api", (req, res) => {
    res.json({ msg: "server says hi"});
});

// CRC-32
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

// 021 Endpoint
app.get("/api/82a6736e", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/plyg4IR7j7Pi",
            "https://moxie-ctcstores.clicdata.com/v/UlgMmmn1i6nV",
            "https://moxie-ctcstores.clicdata.com/v/OKKx96YJr9jW"
        ]
    });
    console.log("responded with 021 url's")
});

// 090 Endpoint
app.get("/api/16559a33", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/hmaRD56e5C4u",
            "https://moxie-ctcstores.clicdata.com/v/T5Q9oLPCUa0r",
            "https://moxie-ctcstores.clicdata.com/v/7ujxIJywNdb3"
        ]
    });
    console.log("responded with 090 url's")
});

// 118 Endpoint
app.get("/api/d195f23e", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/GjLeRuzl4HaY",
            "https://moxie-ctcstores.clicdata.com/v/A0NtNpgrLpRh",
            "https://moxie-ctcstores.clicdata.com/v/YUB6vdUUe8xr"
        ]
    });
    console.log("responded with 118 url's")
});

// 124 Endpoint
app.get("/api/f30eedd6", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/afyhdIIh2mcm",
            "https://moxie-ctcstores.clicdata.com/v/Ko5eOkbSZEuD",
            "https://moxie-ctcstores.clicdata.com/v/D3YvHaZC3Ezv"
        ]
    });
    console.log("responded with 124 url's")
});

// 175 Endpoint
app.get("/api/f97e2905", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/xIwdKp8SVFb0",
            "https://moxie-ctcstores.clicdata.com/v/xnteRtDvM7lh",
            "https://moxie-ctcstores.clicdata.com/v/FR44njcAXxZF"
        ]
    });
    console.log("responded with 175 url's")
});

// 457 Endpoint
app.get("/api/238de840", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/UGzz28bVha23",
            "https://moxie-ctcstores.clicdata.com/v/QLXjDQsqdUw",
            "https://moxie-ctcstores.clicdata.com/v/XrPWLDA84FQv"
        ]
    });
    console.log("responded with 457 url's")
});

// 634 Endpoint
app.get("/api/ef5aca12", (req, res) => {
    res.json({
        'urls': [
            "https://moxie-ctcstores.clicdata.com/v/HcHQDuNHKv2f",
            "https://moxie-ctcstores.clicdata.com/v/e2nubMsMlsYs",
            "https://moxie-ctcstores.clicdata.com/v/p8jUf2DstErC"
        ]
    });
    console.log("responded with 634 url's")
});
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
