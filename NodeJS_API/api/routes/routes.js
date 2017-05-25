'use strict';
module.exports = function(app) {
  var handler = require('../controllers/controller');

  app.route('/cases/:cases_informations')
    .get(handler.get_cases)
};
