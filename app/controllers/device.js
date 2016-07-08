var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Device = mongoose.model('Device');
module.exports = function(app) {
  app.use('/api/device', router);
};

router.get('/', function(req, res, next) {
  Device.find({})
    .then(function(devices) {
      res.json(devices);
    });
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  console.log(req.query)

  var newdevice = new Device({
    title: req.body.title,
    token: req.body.token
  });
  newdevice.save(function(err) {
    if (err) console.log('Error on saving');
    res.send("Ok");
  });
});
