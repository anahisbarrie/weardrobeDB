DROP DATABASE IF EXISTS closetdb;
CREATE DATABASE closetdb;

USE closetdb;

CREATE TABLE example (
    id INT NOT NULL AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    style VARCHAR(255) NOT NULL, 
    price DECIMAL(10,2) NOT NULL,
    last_wore DATE NULL,
    imagelink VARCHAR(1024) NULL,
    description VARCHAR(2000) NULL,
    times_worn INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(30) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_pw VARCHAR(50) NOT NULL,
    last_login_date DATE NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE daily (
    outfit_id INT NOT NULL AUTO_INCREMENT,
    date DATE NOT NULL,
    outfit_combo VARCHAR(150) NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (outfit_id)
);