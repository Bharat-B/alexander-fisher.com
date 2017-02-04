"use strict";
var path = require("path");
var http = require("http");
var Express = require("express");
var React = require("react");
var server_1 = require("react-dom/server");
var app = Express();
var server = http.createServer(app);
app.use(Express.static(path.join(__dirname, '')));
app.get('*', function (req, res) {
    var app = (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            React.createElement("title", null, "Alexander Fisher - Portfolio Site")),
        React.createElement("body", null,
            React.createElement("div", { id: "root" }),
            React.createElement("script", { src: "/client.js" }))));
    return res.send(server_1.renderToString(app));
});
// start the server
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
server.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    console.info("Server running on http://localhost:" + port + " [" + env + "]");
});
