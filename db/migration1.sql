-- DROP DATABASE reactshare_dev;
CREATE DATABASE test_dev;
 \c test_dev;




-- DROP TABLE users;
CREATE TABLE  testingUsers (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  token VARCHAR NOT NULL
);