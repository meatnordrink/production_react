let express = require("express")
app = express()
app.use("/.well-known", express.static(path.join(__dirname, "appleBuild", "build")))
app.listen(80)