var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var api = require("./api");
var routeMw = require("./server/middleware/routing.mw");
//var configurePassport = require("./server/config/passport");
//var nodemailer = require("./server/services/email.svc");
var mysql = require('mysql');


var app = express();


app.use(express.static(path.join(__dirname, "../lawncaresite/client")));
app.use(bodyParser.json());
app.use(cookieParser());


//configurePassport(app);

app.use('/api', api);

app.get('*', function(req, res, next){
    if(routeMw.isAsset(req.url)){
        next();
    } else{
        res.sendFile(path.join(__dirname,"./index.html"))
    }
})

app.listen(process.env.PORT || 3000);