'use strict';

var mongoose = require('mongoose'),
    Case = mongoose.model('Case');
var url = require('url');

exports.get_cases = function(req, res)
{
  //Use querystrings with url.parse(...)
  Case.find(url.parse(req.url, true).query, function(err, cases) {
    if (err)
      res.send(err)
    res.statusCode = 200;
    res.json(cases);
    })
};
