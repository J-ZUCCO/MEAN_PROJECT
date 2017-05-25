'use strict';

var mongoose = require('mongoose'),
    Case = mongoose.model('Case');

exports.get_cases = function(req, res)
{
  var json_cases_informations = JSON.parse(req.params.cases_informations);
  Case.find(json_cases_informations, function(err, cases) {
    if (err)
      res.send(err)
    res.statusCode = 200;
    res.json(cases);
    }).limit(5);
};
