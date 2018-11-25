DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price_usd DECIMAL(10,2),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

SELECT * FROM bamazon_db.products;
-- departments include: Toys, Mens, Video Games, Womens, Home, Pets 
INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Slinky", "Toys", 6.99, 100);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Nike Air Force", "Mens", 10.99, 20);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("PlayStation 4", "Video Games", 299.00, 40);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Michael Kors Purse", "Womens", 159.99, 30);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Desk Lamp w/ usb port", "Home", 19.99, 100);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Dog Toy", "Pets", 6.99, 50);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Tomagachi", "Toys", 9.99, 30);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Basketball Shorts", "Mens", 16.99, 50);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Desk Chair", "Home", 159.99, 20);

INSERT INTO products (product_name, department_name, price_usd, stock_quantity)
VALUES ("Green Tea Mask", "Womens", 6.99, 40);
