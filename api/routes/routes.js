'use strict';
module.exports = function(app) {
    var handler = require('../controllers/controller');
    
    app.route('/cases/simple_search')
	.get(handler.get_cases)
    
    
    app.route('/cases/search')
	.get(handler.simple_get_cases)
    
    
    app.route('/test/:term')
	.get(handler.test)
    
    app.route('/cases/:case_id')
	.delete(handler.delete_case)
    
    app.route('/cases/:case_id')
	.get(handler.update_case)

    app.route('/cases/:term')
	.put(handler.create_case)
};
