DROP DATABASE IF EXISTS closetdb;
CREATE DATABASE closetdb;

USE closetdb;

CREATE TABLE clothes (
    id INT NOT NULL AUTO_INCREMENT,
    brand_name VARCHAR(255) NOT NULL,
    item_type VARCHAR(255) NOT NULL,
    item_color VARCHAR(255) NOT NULL,
    item_style VARCHAR(255) NOT NULL, 
    price DECIMAL(10,2) NOT NULL,
    last_worn DATE NULL,
    times_worn INT NOT NULL,
    clothing_image VARCHAR(1024) NULL,
    PRIMARY KEY (id)
);