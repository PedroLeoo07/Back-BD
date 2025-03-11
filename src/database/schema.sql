CREATE DATABASE cadastro;

\c cadastro

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    likes INT NOT NULL
);

INSERT INTO users (name, email) VALUES 
    ('Sofia Cintra', 'sofia.cintra@email.com'),
    ('Camila Cintra', 'camila.cintra@email.com'),
    ('Vitor Silvério', 'vitor.silveiro@email.com'),
    ('Leonardo Oliveira', 'leonardo.oliveira@email.com');

INSERT INTO posts (title, likes) VALUES 
    ('Como funciona o sistema?', 34000),
    ('O que é o Node.js?', 100000),
    ('O que é o Express.js?', 111111),
    ('O que é o PostgreSQL?', 222222);
