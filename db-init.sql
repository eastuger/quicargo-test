-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.carrier
(
    id serial,
    name character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
                             PRIMARY KEY (id)
    );

CREATE TABLE IF NOT EXISTS public.truck
(
    id serial,
    lng double precision,
    lat double precision,
    license_plate character varying(12),
    max_weight double precision,
    current_weight double precision,
    max_pallets integer,
    current_pallets integer,
    carrier_id integer NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
                             PRIMARY KEY (id)
    );

ALTER TABLE IF EXISTS public.truck
    ADD FOREIGN KEY (carrier_id)
    REFERENCES public.carrier (id) MATCH SIMPLE
    ON UPDATE NO ACTION
       ON DELETE NO ACTION
    NOT VALID;

INSERT INTO carrier (name, created_at, updated_at)
VALUES
    ('testrona', current_timestamp, current_timestamp),
    ('tesy.io', current_timestamp, current_timestamp),
    ('testza', current_timestamp, current_timestamp),
    ('testish', current_timestamp, current_timestamp),
    ('revest', current_timestamp, current_timestamp),
    ('conesia', current_timestamp, current_timestamp);


INSERT INTO truck (lng, lat, license_plate, max_weight, current_weight, max_pallets, current_pallets, carrier_id, created_at, updated_at)
VALUES
    (52.370216, 4.895168, 'XF35AS', 40000, 10000, 200, 100, 1, current_timestamp, current_timestamp),
    (52.370216, 4.895168, 'XF35AS', 40000, 10000, 200, 100, 1, current_timestamp, current_timestamp),
    (52.370216, 4.895168, 'XF35AS', 40000, 10000, 200, 100, 1, current_timestamp, current_timestamp),
    (52.370216, 4.895168, 'XF35AS', 40000, 10000, 200, 100, 1, current_timestamp, current_timestamp),
    (52.370216, 4.895168, 'XF35AS', 40000, 10000, 200, 100, 1, current_timestamp, current_timestamp),
    (52.370216, 4.895168, 'XF35AS', 40000, 10000, 200, 100, 1, current_timestamp, current_timestamp),
    (52.370216, 4.895168, 'XF35AS', 40000, 10000, 200, 100, 1, current_timestamp, current_timestamp),
    (52.370216, 4.895168, 'XF35AS', 40000, 10000, 200, 100, 1, current_timestamp, current_timestamp);

END;