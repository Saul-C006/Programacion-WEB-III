CREATE DATABASE bdpractica2;

USE bdpractica2;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(100) NOT NULL, 
    descripcion VARCHAR(255), 
    createdAt DATETIME NOT NULL DEFAULT current_timestamp(), 
    updatedAt DATETIME NOT NULL DEFAULT current_timestamp() 
); 
INSERT INTO categorias (nombre, descripcion)  VALUES ('Electrónica', 'Dispositivos electrónicos y gadgets'), ('Oficina', 'Material y accesorios de oficina'); 

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoriaId INT,
    
    FOREIGN KEY (categoriaId) REFERENCES categorias(id) /*ON DELETE CASCADE*/
);
INSERT INTO productos(nombre, precio, categoriaId) VALUES
('Laptop', 5000, 1),
('Mouse', 150, 1),
('Cuaderno', 20, 2),
('Lapiz', 5, 2);