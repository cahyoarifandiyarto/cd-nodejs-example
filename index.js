const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Logos ID Development Testing CD");
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Running on port 8080");
});