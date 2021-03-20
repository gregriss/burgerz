DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(30),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

-- SELECT * FROM burgers;