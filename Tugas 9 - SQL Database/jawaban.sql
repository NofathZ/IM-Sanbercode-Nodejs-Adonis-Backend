CREATE DATABASE myshop;

use myshop;

CREATE TABLE users(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE items(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price INTEGER,
    stock INTEGER,
    category INTEGER,
    FOREIGN KEY (category) REFERENCES categories(id)
);

CREATE TABLE categories(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255)
);

INSERT INTO users(name, email, password) VALUES ("John Doe", "john@doe.com", "john123");
INSERT INTO users(name, email, password) VALUES ("Jane Doe", "jane@doe.com", "jenita123");

INSERT INTO categories(name) VALUES ('gadget');
INSERT INTO categories(name) VALUES ('cloth');
INSERT INTO categories(name) VALUES ('men');
INSERT INTO categories(name) VALUES ('women');
INSERT INTO categories(name) VALUES ('branded');

INSERT INTO items(name, description, price, stock, category) VALUES ('Sumsang b50', 'hape keren dari merek sumsang', 4000000, 100, 1);
INSERT INTO items(name, description, price, stock, category) VALUES ('Unikloh', 'baju keren dari brand ternama', 500000, 50, 2);
INSERT INTO items(name, description, price, stock, category) VALUES ('IMHO Watch', 'jam tangan anak yang jujur banget', 2000000, 10, 1);

SELECT name, email FROM users;
SELECT * FROM  items;
SELECT * FROM items where name LIKE '%uniklo%' OR name LIKE '%watch%' OR name LIKE '%sang%';

SELECT items.name, items.description, items.price, items.stock, categories.id, categories.name as 'kategori' FROM items, categories WHERE items.id = categories.id;
SELECT items.name, items.description, items.price, items.stock, categories.id, categories.name as 'kategori' FROM items JOIN categories ON items.id = categories.id;

UPDATE items SET items.price = 2500000 where items.name = "Sumsang b50";