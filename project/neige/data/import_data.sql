DROP TABLE IF EXISTS "product";
DROP TABLE IF EXISTS "user";


CREATE TABLE IF NOT EXISTS "product" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "description" TEXT,
  "price" REAL NOT NULL,
  "quantity" TEXT,
  "picture_name" TEXT,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
  );
CREATE TABLE IF NOT EXISTS "user" (
  "id" serial PRIMARY KEY,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "firstname" text NULL,
  "lastname" text NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

INSERT INTO "product"("id","name", "description", "price", "quantity", "picture_name") VALUES
(1,'Balade en raquette', 'Envie de découvrir les paysages fantastiques de la pierre saint martin? enfilez vos raquettes et venez nous rejoindre.',35,'/h', 'raquette'),
(2,'Cours de snowboard', 'Du plus confirmé, au moins confirmé, la pierre saint martin dispose de plusieurs pistes reconnues mondialement.',50,'/h', 'snowboard'),
(3,'Cours de ski alpin', 'Envie de sensation forte? de la piste verte à la piste noir, le domaine à de quoi nourrir vos envies.',40,'/J', 'skialpin'),
(4,'Forfait remontée', 'Vous pensez avoir toutes les connaissances? alors ce forfait est fait pour vous.',40,'/J', 'remonte'),
(5,'Patinoire', 'Quoi de mieux après une bonne journée de sensation que de finir en beauté avec la patinoire?',8,'/h', 'patinoire'),
(6,'Initiation ski Enfant', 'Vous souhaitez que vos enfant apprenne en toute sécurité? vous pouvez compter sur nos écoles partenaire',50,'/h', 'skienfant'),
(7,'Randonée pédestre', 'La pierre saint martin dispose de nombreuses balades en forêt entre neige et montagne.',25,'/j', 'randonee');

INSERT INTO "user" ("id", "firstname", "lastname", "email", "password") VALUES
(1, 'Philippe', 'Candille', 'philippe@oclock.io', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG'),
(3, 'Chuck', 'Norris', 'chuck@oclock.io', '$2b$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG');

