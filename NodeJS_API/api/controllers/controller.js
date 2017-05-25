//'use strict';

var mongoose = require('mongoose'),
    Case = mongoose.model('Case');

exports.get_cases = function(req, res)
{
  console.log("AAAAAAAAAAAAAAAAaa")
  json_cases_informations = JSON.parse(req.params.cases_informations)
  console.log("AAAAAAAAAAAAAAAAaa")
  Case.find(json_cases_informations, function(err, cases) {
    if (err)
      res.json(JSON.parse("{message: error}"));
    res.statusCode = 200;
    res.json(cases);
    });
};
