'use strict';
module.exports = function(app) {
  var handler = require('../controllers/controller');

  app.route('/cases/search')
    .get(handler.get_cases)


  app.route('/test/:term')
    .get(handler.test)

  app.route('/cases/:case_id')
    .delete(handler.delete_case)
};
