const express = require('express');
const path = require('path');
const helmet = require('helmet');
const http = require('http');
const https = require('https');
const fs = require('fs');
const compression = require('compression');


const app = express();

//apply modules to improve security and compress response bodies. (= safer & quicker.)
app.use(helmet());
app.use(compression());

//direct all requests to the build directory
app.use(express.static(path.join(__dirname, 'appleBuild', 'build')));

//create http app to handle verification challenges and redirect other requests to https
const httpApp = express();

httpApp.use("/.well-known", express.static(path.join(__dirname, 'appleBuild', 'build', '.well-known'), {
    dotfiles: "allow"
}));

httpApp.use((req, res) => {
    res.redirect("https://" + req.hostname + req.url);
});

// set up ssl config for https
let sslConfig = {
	key: fs.readFileSync("/etc/letsencrypt/live/phq9.uplift.app/privkey.pem"),
	cert: fs.readFileSync("/etc/letsencrypt/live/phq9.uplift.app/fullchain.pem"),
};

// serve http and https on 80/443
http.createServer(httpApp).listen(80);
https.createServer(sslConfig, app).listen(443)


