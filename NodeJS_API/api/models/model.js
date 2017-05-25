'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CaseSchema = new Schema({
  _id: {
    type: String,
  },
  compnos: {
    type: Number,
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
    type: Number,
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
    type: Number,
  },
  month: {
    type: Number,
  },
  day_week: {
    type: String,
  },
  ucrpart: {
    type: String,
  },
  x: {
    type: Number,
  },
  y: {
    type: Number,
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
    collection: 'things'
  }
);

module.exports = mongoose.model('Case', CaseSchema);
