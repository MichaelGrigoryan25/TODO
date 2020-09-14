const router = require("express").Router();
const mySQL = require("mysql");

router.get("/", (req, res) => {

    var mysqlHost = process.env.MYSQL_HOST || "localhost";
    var mysqlPort = process.env.MYSQL_PORT || "3306";
    var mysqlUser = process.env.MYSQL_USER || "root";
    var mysqlPass = process.env.MYSQL_PASS || "root";
    var mysqlDB = process.env.MYSQL_DB || "node_db";
    var connectionOptions = {
        host: mysqlHost,
        port: mysqlPort,
        user: mysqlUser,
        password: mysqlPass,
        database: mysqlDB
    };
    var connection = mySQL.createConnection(connectionOptions)
    connection.on("error", (e) => {
        console.log(e);
    });
    connection.on("connect", () => {
        console.log("Connected Successfully to the DB");
    })
    console.log(connectionOptions);
    
    
    res.render("index");
})

module.exports = router;