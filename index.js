var express = require("express");
var path = require('path');
var app = express();

// serve static files
app.use('/', express.static(path.join(__dirname, 'public')))

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function(){
	console.log("Listening on " + app.get("port"));
})

module.exports = app;