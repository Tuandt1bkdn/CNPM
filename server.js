const express = require("express");
const body_parser = require("body-parser");

const app = express();

app.use(body_parser.json())

app.use(body_parser.urlencoded({
    extended : true
}))

module.exports = app

const port = process.env.PORT || 3000 ;

app.listen(port, () => console.log(`Server running on port ${port}`));

const connect = require("./API/connectdatabase");

connect.connect(function(err)  {
if (err) throw err;
console.log("ket noi thanh cong");
}) ;

const route = require("./API/route");
route(app);
