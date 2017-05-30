'use strict';

var mongoose = require('mongoose'),
    Case = mongoose.model('Case');
var url = require('url');
var ObjectId = require('mongodb').ObjectID;

exports.get_cases = function(req, res)
{
  Case.find(url.parse(req.url, true).query, function(err, cases) {
    if (err)
      res.send(err)
    res.statusCode = 200;
    res.json(cases);
    })
};


exports.delete_case = function(req, res)
{
  Case.find({_id: ObjectId(req.params.case_id)}, function(err, cases) {
    if (err)
      res.send(err)
    res.statusCode = 200;
    console.log()
    res.json({ message :'Case successfully deleted' });
    }).remove().exec();
};
