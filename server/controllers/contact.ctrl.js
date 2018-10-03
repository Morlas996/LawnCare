var express = require('express');
var emailSvc = require('../services/email.svc');

var router = express.Router();

//setup for the contact us page - when someone completes a form

router.post('/', function (req, res, next) { 
        emailSvc.sendEmail(req.body.email, req.body.subject, req.body.message)
        .then(function(success){
            console.log("Success");
            res.sendStatus(204);
        }, function(err){
            console.log(err);
            res.status(500).send(err);
        })
});

// router.post("/contact_us", function(req, res){
//     emailSvc.sendEmail(req.body.toAddress)
// })

module.exports = router;