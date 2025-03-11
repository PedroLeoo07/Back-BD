CREATE DATABASE cadastro;

\c cadastro

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (name, email) VALUES 
    ('Sofia Cintra', 'sofia.cintra@email.com'),
    ('Camila Cintra', 'camila.cintra@email.com'),
    ('Vitor Silvério', 'vitor.silveiro@email.com'),
    ('Leonardo Oliveira', 'leonardo.oliveira@email.com');
