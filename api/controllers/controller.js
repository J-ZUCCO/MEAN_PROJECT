'use strict';

var mongoose = require('mongoose'),
    Case = mongoose.model('Case');
var url = require('url');
var ObjectId = require('mongodb').ObjectID;
var http = require('http');

function check_auth(method_level, user_level) {
  if (user_level >= method_level) {
    return true;
  } else {
    return false;
  }
}

exports.test = function(req, res)
{
const body = {
    "query": {
      "query_string": {
        "query" : req.params.term
      }
    }
  };
const options = {
  hostname: 'localhost',
  port: 9200,
  path: '/cases/_search',
  method: 'POST',
};

const request = http.request(options, (result) => {
  console.log(`STATUS: ${result.statuscode}`);
  console.log(`HEADERS: ${JSON.stringify(result.headers)}`);
  result.setEncoding('utf8');
  result.on('data', (chunk) => {
    res.setHeader('content-type', 'application/json');
    res.send(chunk);
  });
  result.on('end', () => {
    console.log('No more data in response.');
  });
});
req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
request.write(JSON.stringify(body));
console.log("aaaaaaa")
request.end();
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
