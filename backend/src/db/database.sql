-- Creación de Base de Datos
CREATE DATABASE tecnorepuestos_db;
USE tecnorepuestos_db;

-- Tabla Usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'vendedor', 'bodega') DEFAULT 'vendedor',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cedula_ruc VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR(20)
);

-- Tabla Productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock_actual INT DEFAULT 0,
    stock_minimo INT DEFAULT 5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Ventas (Cabecera)
CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    usuario_id INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Datos Semilla (Para que no esté vacío al iniciar)
INSERT INTO usuarios (nombre, email, password, rol) VALUES 
('Admin Principal', 'admin@tecnorepuestos.com', 'Admin123', 'admin');

INSERT INTO productos (codigo, nombre, precio, stock_actual, stock_minimo) VALUES 
('CAB-HDMI', 'Cable HDMI 2m', 5.50, 100, 10),
('MOU-LOG', 'Mouse Logitech', 15.00, 4, 5);