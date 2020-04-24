let express = require("express")
let path = require("path");
app = express()
app.use("/.well-known", express.static(path.join(__dirname, "appleBuild", "build"), {
    dotfiles: "allow"
}))
app.use(express.static(path.join(__dirname, "appleBUild", "build")));

app.listen(80)