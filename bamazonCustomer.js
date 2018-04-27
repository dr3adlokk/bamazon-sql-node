var inq = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon_db',
    port: '3306'
})

function iWork (value) {
    var integer = Number.isInteger(parseFloat(value))
    var sign = Math.sign(value)


if (integer && (sign ===1)){
    return true
} else {
    return 'Error/404/You suck.'
}
}

function selectInventory() {
  config.query("SELECT * FROM product_query", function(e, res) {
    if (e) throw e;
    console.log("Hi I'm a terminal. I am a terminal component of terminal ordering. Basically, I Will be your terminal to Bamazon!");
    console.log("-------------------------------------------------------\n");
    for (var i = 0; i < res.length; i++) {
      console.log(
        "ID: " +
          res[i].item_id +
          " | " +
          "PRODUCT: " +
          res[i].product_name +
          " | " +
          "DEPARTMENT: " +
          res[i].department_name +
          " | " +
          "PRICE: " +
          res[i].price +
          " | " +
          "QTY: " +
          res[i].stock_quantity +
          "\n"
      );
    }

    console.log("-------------------------------------------------------\n");
    inquirePurchase();
  });
}
 function terminalPurchase(){
     inquire.prompt([{
         
          type: 'input',
              name: 'id',
              message: 'Input product ID number to place order.',
              validate: iWork,
              filter: Number
     },
     {
          type: 'input',
              name: 'quantity',
              message: 'did you say 5,000,000? J.K. How much?  ',
              validate: iWork,
              filter: Number
     }
    ])
     .then(function (input){
         var howMuch = input.quantity
         var item = input.id
         makePurchase(item, quantityDesired)
     })
       function makePurchase(id, quantityNeeded) {
           config.query('SELECT * FROM product_query WHERE item_id = ' + id, function (e, res) {
               if (e) throw e

               if (quantityNeeded <= res[0].stock_quantity) {
                   var total = res[0].price * quantityNeeded
                   console.log('Thank you for the order. We will be sure to alert all your neighbors in advance so they do not steal it.')
                   console.log("Your total cost for " + quantityNeeded + " " + res[0].product_name + " is " + total + ".")
                   config.query("UPDATE products SET stock_quantity = stock_quantity - " + quantityNeeded + " WHERE item_id = " + id)
                   config.end()
               } else {
                   console.log('How did you screw that up?')
                   selectInventory()
               }
           })
       }
       }

       function start() {
           selectInventory()
       }

       start()


