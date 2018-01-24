CREATE EXTENSION IF NOT EXISTS CITEXT;

DROP TABLE IF EXISTS albums CASCADE;
CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email CITEXT NOT NULL,
  password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS reviews CASCADE;
CREATE TABLE reviews (
  user_id INT REFERENCES users(id),
  album_id INT REFERENCES albums(id),
  title VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL
);
