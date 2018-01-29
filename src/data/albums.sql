INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
;

INSERT INTO
  users (name, email, password)
VALUES
  ('bob', 'bob@b.com', 'lol'),
  ('joe', 'joe@j.com', 'lol')
;


INSERT INTO
  reviews (user_id, album_id, title, body)
VALUES
  ('1', '1', 'bob's review title', 'bob's review'),
  ('2', '2', 'joe's review title', 'joe's review')
;
