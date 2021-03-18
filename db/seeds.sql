DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

INSERT INTO burgers (burger_name, devoured) 
VALUES ("Classic", "1"),("Cheeseburger", "0"),("Mushroom Swiss","0"),("Bacon","0"),("Veggie","0");

SELECT * FROM burgers;