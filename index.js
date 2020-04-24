let express = require("express")
let path = require("path");
app = express()
app.use("/.well-known", express.static(path.join(__dirname, ".well-known"), {
    dotfiles: "allow"
}))
app.use(express.static(path.join(__dirname, "text.txt")));

app.listen(80)