

const mysql = require ("mysql");
const { response } = require("../../server");

const database = require ("../connectdatabase.js");

module.exports = {
    get : function(req, res){
        var sql = 'SELECT * FROM biqtzwqiihjmw2npadtd.UserName '
    database.query(sql , (err, response) => {
        if (err) {
            console.log("khong the lay du lieu");
        }
        res.json(response);
    }
    )
},
  update : function(req, res) {
        var data = req.body
        console.log(data)
    var sql = 'UPDATE account SET Role = \'3\' where UserName = \'Huong\''
        console.log('HFfhsf');
        database.query(sql, [data, 'Role_ID' ], (err, response) => {
            if (err) throw err
            console.log("message: 'Update success!'");
    })
    res.json(response);
  }

}