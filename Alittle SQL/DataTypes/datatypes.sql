-- Introduction to Databases and SQL
-- sql selector
-- sql selector is used to select data from a database
--below is an exmple of how to use sql selector

SELECT first_name, id_no
FROM Contacts

-- SQL SELECT ALL
-- To select all columns from a database table, we use the * character. For example,
SELECT *    
FROM Customer
-- this selects all data from the customer table.

--SQL WHERE CLOSE
-- Is used to select specific data from a database table.
 
--Example
SELECT * 
FROM Customer
WHERE last_name = "Otieno"
--This will display all records with the last name = otieno on the Customer table.


