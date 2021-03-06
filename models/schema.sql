DROP DATABASE IF EXISTS closetdb;
CREATE DATABASE closetdb;

USE closetdb;

CREATE TABLE Example (
    id INT NOT NULL AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    seasonality VARCHAR(50) NOT NULL,
    style VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    lastwore DATE NULL,
    timesworn INT NOT NULL,
    imagelink VARCHAR(1024) NULL,
    description VARCHAR(1024) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE clothes (
    id INT NOT NULL AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    seasonality VARCHAR(255) NOT NULL, 
    style VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    lastwore DATE NULL,
    timesworn INT NOT NULL,
    imagelink VARCHAR(1024) NULL,
    description VARCHAR(1024) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    -- last_login_date DATE NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE outfit (
    outfit_id INT NOT NULL AUTO_INCREMENT,
    date DATE NULL,
    top_id INT NOT NULL,
    bottom_id INT NOT NULL,
    accessory_id INT NOT NULL,
    user_id INT NULL,
    PRIMARY KEY (outfit_id)
);