'use strict';

var mongoose = require('mongoose'),
    Case = mongoose.model('Case');
var url = require('url');
var ObjectId = require('mongodb').ObjectID;
var http = require('http');
var 

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
    const options = {
  hostname: 'localhost',
  port: 9200,
  path: '/cases/_get',
  method: 'GET',
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

exports.update_case = function(req, res)
{
  Case.update({_id: ObjectId(req.params.case_id)}, {$set: {Case.reptdistrict: req.body.reptdistrict.name, Case.reportingarea: req.body.reportingarea.name, Case.fromdate: req.body.fromdate.name, Case.weapontype: req.body.weapontype.name, Case.shooting: req.body.shooting.name, Case.domestic: req.body.domestic.name, Case.shift: req.body.shift.name, Case.year: req.body.year.name, Case.month: req.body.month.name, Case.day_week: req.body.day_week.name, Case.ucrpart: req.body.ucrpart.name, Case.type: req.body.type.name, Case.typename: req.body.typename.name, Case.xstreetname: req.body.xstreetname.name, Case.location: req.body.location.name}, function(req, res) {
  //if check_auth(2, role)
  contact.save(function(req){
    if(!err) {
                console.log("Case updated");
            }
            else {
                console.log("Error: unable to update case");
            }
    });
  }
  res.send(item);
)};

exports.create_case = function(req, res)
{
  let case = new Case();
  case.compnos =  req.body.compnos
  case.naturecode = req.body.naturecode
  case.incident_type_description = req.body.incident_type_description
  case.[name] = value;.main_crimecode = req.body.main_crimecode
  case.reptdistrict = req.body.reptdistrict
  case.reportingarea = req.body.reportingarea
  case.fromdate = req.body.fromdate
  case.weapontype = req.body.weapontype
  case.shooting = req.body.shooting
  case.domestic = req.body.domestic
  case.shift = req.body.shift
  case.year = req.body.year
  case.month = req.body.month
  case.day_week = req.body.day_week
  case.ucrpart = req.body.ucrpart
  case.type = req.body.type
  case.typename = req.body.typename
  case.xstreetname = req.body.xstreetname
  case.location = req.body.location
},
    Case.put(function(err, cases) {0
    }
}



