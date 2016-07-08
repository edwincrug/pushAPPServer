var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Device = mongoose.model('Device'),
  request = require('request');
module.exports = function(app) {
  app.use('/', router);
};

router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  Device.find({})
    .then(function(devices) {
      devices.forEach(function(d) {
        request({
          url: 'https://gcm-http.googleapis.com/gcm/send',
          headers: {
            'Authorization': 'key=AIzaSyA-31WiqgYc8q9FbUevWLcXwZ03UGpHL0s',
            'content-type': 'application/json',
          },
          json: true,
          method: 'post',
          body: {
            "to": d.token,
            "priority":"high",
            "notification": {
              "title":"My title",
              "body": req.body.text,
              "sound":"default"
            }
          }
        }, function(err, httpResponse, body) {

        })
      })
    });
    res.send("ok");
});
