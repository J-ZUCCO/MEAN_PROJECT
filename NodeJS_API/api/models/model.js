'use strict';
var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;

var CaseSchema = new Schema({
  compnos: {
    type: String,
  },
  naturecode: {
    type: String
  },
  incident_type_description: {
    type: String
  },
  main_crimecode: {
    type: String
  },
  reptdistrict: {
    type: String
  },
  reportingarea: {
    type: Number
  },
  fromdate: {
    type: String,
  },
  weapontype: {
    type: String,
  },
  shooting: {
    type: String,
  },
  domestic: {
    type: String,
  },
  shift: {
    type: String,
  },
  year: {
    type: String,
  },
  month: {
    type: String,
  },
  day_week: {
    type: String,
  },
  ucrpart: {
    type: String,
  },
  x: {
    type: String,
  },
  y: {
    type: String,
  },
  streetname: {
    type: String,
  },
  xstreetname: {
    type: String,
  },
  location: {
    type: String,
  }
},
  {
    collection: 'cases'
  }
);

CaseSchema.plugin(mongoosastic);

var Case = mongoose.model('Case', CaseSchema)
  , stream = Case.synchronize()
  , count = 0;

stream.on('data', function(err, doc){
  count++;
});
stream.on('close', function(){
  console.log('indexed ' + count + ' documents!');
});
stream.on('error', function(err){
  console.log(count);
  console.log(err);
});

module.exports = mongoose.model('Case', CaseSchema);
