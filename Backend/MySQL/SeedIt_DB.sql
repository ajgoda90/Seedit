DROP DATABASE SeedIt;

CREATE DATABASE SeedIt;
USE SeedIt;

CREATE TABLE User (
  user_id CHAR(32) UNIQUE NOT NULL,
  first_name VARCHAR(32) NOT NULL,
  last_name VARCHAR(32) NOT NULL,
  email VARCHAR(256) UNIQUE NOT NULL,
  username VARCHAR(16) UNIQUE NOT NULL,
  pass CHAR(60) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE Idea (
  idea_id CHAR(32) UNIQUE NOT NULL,
  title VARCHAR(32) NOT NULL,
  blurb VARCHAR(256) NOT NULL,
  description TEXT NOT NULL,
  author_user_id CHAR(32) NOT NULL,
  time_created DATETIME NOT NULL,
  parent_idea_id CHAR(32) NULL,
  PRIMARY KEY(idea_id),
  FOREIGN KEY(author_user_id) REFERENCES User(user_id), 
  FOREIGN KEY(parent_idea_id) REFERENCES Idea(idea_id)
);

CREATE TABLE Up_Vote (
  up_vote_id CHAR(32) UNIQUE NOT NULL,
  idea_id CHAR(32) NOT NULL,
  voter_user_id CHAR(32) NOT NULL,
  time_created DATETIME NOT NULL,
  PRIMARY KEY(up_vote_id),
  FOREIGN KEY(idea_id) REFERENCES Idea(idea_id),
  FOREIGN KEY(voter_user_id) REFERENCES User(user_id),
  UNIQUE(idea_id, voter_user_id)
);

CREATE TABLE Tag (
  tag_id CHAR(32) UNIQUE NOT NULL,
  title VARCHAR(32) UNIQUE NOT NULL,
  PRIMARY KEY(tag_id)
);

CREATE TABLE Idea_Tag(
  idea_tag_id CHAR(32) UNIQUE NOT NULL,
  idea_id CHAR(32) UNIQUE NOT NULL,
  tag_id CHAR(32) UNIQUE NOT NULL,
  PRIMARY KEY(idea_tag_id),
  FOREIGN KEY(idea_id) REFERENCES Idea(idea_id),
  FOREIGN KEY(tag_id) REFERENCES Tag(tag_id),
  UNIQUE(idea_id, tag_id)
);

CREATE TABLE Image(
  image_id CHAR(32) UNIQUE NOT NULL,
  url CHAR(16) NOT NULL,
  time_created DATETIME NOT NULL,
  submitted_by_user_id CHAR(16) NOT NULL,
  PRIMARY KEY(image_id),
  FOREIGN KEY(submitted_by_user_id) REFERENCES User(user_id)
);

CREATE TABLE Idea_Main_Image(
  idea_main_image_id CHAR(32) UNIQUE NOT NULL,
  idea_id CHAR(32) UNIQUE NOT NULL,
  image_id CHAR(32) NOT NULL,
  PRIMARY KEY(idea_main_image_id),
  FOREIGN KEY(idea_id) REFERENCES Idea(idea_id),
  FOREIGN KEY(image_id) REFERENCES Image(image_id)
);



