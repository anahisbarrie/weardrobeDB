DROP DATABASE IF EXISTS closetdb;
CREATE DATABASE closetdb;

USE closetdb;

CREATE TABLE example (
    id INT NOT NULL AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    item_type VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    seasonality VARCHAR(255) NOT NULL, 
    style VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    last_worn DATE NULL,
    times_worn INT NOT NULL,
    image_link VARCHAR(1024) NULL,
    item_description VARCHAR(1024) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE clothes (
    id INT NOT NULL AUTO_INCREMENT,
    brand VARCHAR(255) NOT NULL,
    item_type VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    seasonality VARCHAR(255) NOT NULL, 
    style VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    last_worn DATE NULL,
    times_worn INT NOT NULL,
    image_link VARCHAR(1024) NULL,
    item_description VARCHAR(1024) NULL,
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

-- CREATE TABLE daily (
--     date DATE NOT NULL,
--     outfit_id INT NOT NULL AUTO_INCREMENT,
--     -- outfit_combo <top_id, button_id, acc_id>
--     user_id INT NOT NULL,
--     PRIMARY KEY (date)
-- );