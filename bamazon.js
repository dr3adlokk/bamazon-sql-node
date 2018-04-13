var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});
// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "view or Order",
            type: "rawlist",
            message: "Would you like to [View] items [Order] place an order ?",
            choices: ["View", "Order"]
        })
        .then(function (answer) {
         
            if (answer.VieworOrder.toUpperCase() === "View") {
                viewSelection();
            } else {
                orderSelection();
            }
        });
}