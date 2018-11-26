# Bamazon

Welcome to Bamazon. An application using MySQL and node.js to create the experience of purchasing items online. 

### Technologies
- node.js
- npm packages: mysql, inquirer
- MySQL

## How to use the application: 
1. First the use must install the proper libraries using:
```bash
$ npm install 
```

2. Start **LIRI** by typing:
```bash
$ node bamazonCustomer.js
```
3. Bamazon will show you the list of product that are for sale. (Example below).
```bash
Hello Welcome to BAMAZON
Check out our selection:

______________

Number of Items of Sale: 10
Product: Slinky | Price: $ 6.99
Department: Toys | Qty: 80
Item Number: 1
______________
```
4. Enter the unique ID number to chose the desired item wanted. (Example Below).

```bash
 ? Enter the ID number of the product you would like to buy.   1

You have chosen: 

Product: Slinky | Price: $6.99
Department: Toys | Qty: 80
Item Number: 1
______________

```
5. Enter the quanity you would like. Only a valid number will allow you to continue. Any number larger that the stated available quantity will give you a warning message.
```bash

? How many would you like to buy?  |  Qty Available: 80  :   10

Updating...

```
6. On the last screen a total will appear based on your chosen item and quantity.
```bash
______________

1 record updated

Product: Slinky | Price: $6.99
Item Number: 1

Your Total: 
Qty: 10 X $6.99
Grand Total: $69.90

______________

```

<hr>

