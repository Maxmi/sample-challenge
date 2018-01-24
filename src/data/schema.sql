CREATE EXTENSION IF NOT EXISTS CITEXT;

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email CITEXT NOT NULL,
  password VARCHAR(255) NOT NULL
);
