const medical_controller = require ("./controller/medical_controller.js")

const Role = require("./controller/medical_controller.js")

module.exports = function(app) {

    app.route("/Account").get(medical_controller.get);
    
    app.route('/Role/:Role_ID').put(Role.update);

    app.route("/Accounts").post(medical_controller.postAccount);
        
    };

