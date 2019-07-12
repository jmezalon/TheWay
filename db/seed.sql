DROP DATABASE IF EXISTS theway;
CREATE DATABASE theway;

\c theway;


CREATE TABLE churches (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  pastor VARCHAR NOT NULL,
  location VARCHAR NOT Null,
  zip_code INT NOT NULL,
  website VARCHAR
);


CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  profile_pic VARCHAR,
  church_id INT REFERENCES churches(id),
  links VARCHAR,
  bio VARCHAR,
  ministries VARCHAR
);


INSERT INTO churches (name, pastor, location, zip_code, website) VALUES
('FHMBC', 'Joseph N. Pierre', '1250 Rogers Ave', 11226, 'freehaitianmethodistchurch.org'),
('Maranatha', 'Albert Joseph', '1247 Rogers Ave', 11226, 'google.com/maranatha'),
('example church 1', 'John Doe', '1463 E 96th Street', 11236, 'examplewebsite.com'),
('example church 2', 'Job Laport', 'flatlands Ave', 11234, 'examplewebsite2.com'),
('example church 3', 'Jean Maximo', '2525 Church Ave', 11225, 'examplewebsite3.com');

INSERT INTO members (name, church_id) VALUES
('Angelor Nelzy', 1),
('Trina Bastien', 1),
('Max Mezalon', 1),
('Tania Nelzy', 1),
('Ruth Pierre', 1);

INSERT INTO members (name, church_id) VALUES
('Joshua Guerrier', 2);


INSERT INTO members (name, church_id) VALUES
('Marc Henry', 3),
('Kimberly Attilus', 3),
('user example', 3);

INSERT INTO members (name, church_id) VALUES
('member example 1', 4),
('member example 2', 4),
('new member', 4);

INSERT INTO members (name, church_id) VALUES
('Abid Hussain', 5);
