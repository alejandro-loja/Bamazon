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


connection.connect(function (err) {
  if (err) throw err;
  // console.log('Connection Working');
  displayAllItems();
});

function displayAllItems() {
  connection.query("SELECT * FROM bamazon_db.products;", function (error, results) {
    if (error) throw error;
    // console.log(results);
    //formating results
    console.log('\nHello Welcome to BAMAZON\nCheck out our selection:\n')
    console.log('______________\n')
    var itemsInProducts = results.length;
    console.log('Number of Items of Sale: ' + itemsInProducts); // test number of items in table

    for (var i = 0; i < results.length; i++) {
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

    askHowManyToBuy(itemsInProducts);
    // connection.end();
  });
}

function askHowManyToBuy(numberOfItems) {
  console.log(numberOfItems);
  inquirer
    .prompt({
      name: "askForID",
      type: "input",
      message: "Enter the ID number of the product you would like to buy.",
      validate: function (isNumber) {
        var isNumberInt = parseInt(isNumber)
        if (Number.isInteger(isNumberInt)) {
          if (isNumberInt <= numberOfItems && isNumberInt >= 1){
            return true;
          } else {
            console.log('\n** Choose a valid Item ID **');
          }
        }
        else {
          console.log('\n** Choose a valid Item ID **');
        }
      }
    })
    .then(function (answers) {
      console.log('***********')
      var chosenItem = answers.askForID;
      console.log('You have chosen: \n');
      readThings(chosenItem);
    });
}

function readThings(chosenItemID) {
  connection.query("SELECT * FROM products WHERE item_id = ?", chosenItemID, function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    // console.log(res);
    var result = res[0];
    var productName = result.product_name;
    var whichDepartment = result.department_name;
    var price = result.price_usd;
    var priceInUSD = ('$' + price);
    var itemNumber = result.item_id;
    var quantity = result.stock_quantity;

    console.log('Product: ' + productName + ' | ' + 'Price: ' + priceInUSD);
    console.log('Department: ' + whichDepartment + ' | ' + 'Qty: ' + quantity);
    console.log('Item Number: ' + itemNumber);
    console.log('______________\n');

    inquireHowMany(itemNumber, quantity);
  });
}

function inquireHowMany(itemNumber, quantity) {
  // console.log(itemNumber,quantity); //test
  inquirer
    .prompt({
      name: "askHowMany",
      type: "input",
      message: ("How many would you like to buy?  |  Qty Available: " + quantity),
      validate: function (isNumber) {
        var isNumberInt = parseInt(isNumber)
        if (Number.isInteger(isNumberInt)) {
          if (isNumberInt <= quantity && isNumberInt >= 1){
            return true;
          } else {
            console.log('\n** Choose a valid Item ID **');

          }
        }
        else {
          console.log('\n** Choose a valid Item ID **');
        }
      }
    })
    .then(function (answers) {
      var chosenQuantity = parseInt(answers.askHowMany);
      console.log('Updating...');
      updateQty(itemNumber, quantity, chosenQuantity);
    });
}

function updateQty(itemNumber, quantity, chosenQuantity) {
  // console.log(itemNumber, quantity,chosenQuantity); //test
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: (quantity - chosenQuantity)
      },
      {
        item_id: itemNumber
      }
    ],
    function (err, res) {
      // console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      // deleteProduct();
    }
  );

  // logs the actual query being run
  // console.log(query.sql);
}