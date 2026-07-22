USE aspnet07;
DELIMITER $$
CREATE PROCEDURE reset_database()
BEGIN
    TRUNCATE TABLE Products;
    INSERT INTO Products (Name, Price) VALUES
        ('Table', 120.98),
        ('Chaise', 89.56);
END $$
DELIMITER ;
