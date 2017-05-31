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
    cases[0].unIndex(function(err) {
      console.log("laaaaa from the cluster");
    });
    res.statusCode = 200;
    res.json(cases);
    })
};


exports.delete_case = function(req, res)
{
  Case.find({_id: ObjectId(req.params.case_id)}, function(err, cases) {
    if (err)
      res.send(err)
    cases[0].unIndex(function(err) {
      console.log("removed from elasticsearch");
    });
    cases[0].remove(function(err) {
      console.log("removed from mongodb");
    });
    res.statusCode = 200;
    res.json({ message :'Case successfully deleted' });
    });
};
