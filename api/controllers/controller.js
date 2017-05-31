'use strict';

var mongoose = require('mongoose'),
    Case = mongoose.model('Case');
var url = require('url');
var ObjectId = require('mongodb').ObjectID;

function check_auth(method_level, user_level) {
  if (user_level >= method_level) {
    return true;
  } else {
    return false;
  }
}

exports.get_cases = function(req, res)
{
  Case.find(url.parse(req.url, true).query, function(err, cases) {
    //if check_auth(0, role)
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
    //if check_auth(2, role)
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
