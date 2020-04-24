let express = require("express")
let serveStatic = require("serve-static");
app = express()

app.use("/.well-known", serveStatic("./.well-known/", {
	dotfiles: "allow",
}));

app.use(serveStatic("./text.txt"));

app.listen(80)