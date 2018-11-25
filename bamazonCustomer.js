var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon_db"
  });


  connection.connect(function(err) {
    if (err) throw err;
    // console.log('Connection Working');
    displayAllItems();
    
  });

function displayAllItems() {
  connection.query("SELECT * FROM bamazon_db.products;",  function (error, results) {
    if (error) throw error;
    // console.log(results);
    //formating results
    console.log('\nHello Welcome to BAMAZON\nCheck out our selection:\n')
    console.log('______________\n')

    for (var i = 0; i < results.length; i++){
      var result = results[i];
      var itemNumber = result.item_id;
      var productName = result.product_name;
      var whichDepartment = result.department_name;
      var price = result.price_usd;
      var priceInUSD = ('$' + price);
      var quantity = result.stock_quantity;
      console.log('Product: ' + productName + ' | ' + 'Price: ' + priceInUSD);
      console.log('Department: ' + whichDepartment + ' | ' + 'Qty: ' + quantity);
      console.log('Item Number: ' + itemNumber);
      console.log('______________\n')

    }
    // connection.end();
  });
}

function askHowManyToBuy () {
  
}