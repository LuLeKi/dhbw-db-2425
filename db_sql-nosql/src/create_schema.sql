-- -----------------------------------------------------
-- Datenbankschema für das Telematik-Projekt
-- -----------------------------------------------------
DROP DATABASE IF EXISTS telematik;
CREATE DATABASE telematik;
USE telematik;

-- Fahrer
CREATE TABLE fahrer (
    fahrer_id INT PRIMARY KEY,
    name VARCHAR(100),
    vorname VARCHAR(100),
    geburtsdatum DATE
);

-- Fahrzeug
CREATE TABLE fahrzeug (
    fahrzeug_id INT PRIMARY KEY,
    hersteller VARCHAR(100),
    modell VARCHAR(100),
    kennzeichen VARCHAR(20)
);

-- Telematikgerät
CREATE TABLE telematikgeraet (
    geraet_id INT PRIMARY KEY,
    seriennummer VARCHAR(100),
    hersteller VARCHAR(100)
);

-- Gerät-Installation
CREATE TABLE geraet_installation (
    installation_id INT PRIMARY KEY,
    geraet_id INT,
    fahrzeug_id INT,
    von_datum DATE,
    bis_datum DATE,
    FOREIGN KEY (geraet_id) REFERENCES telematikgeraet(geraet_id),
    FOREIGN KEY (fahrzeug_id) REFERENCES fahrzeug(fahrzeug_id)
);

-- Wartung
CREATE TABLE wartung (
    wartung_id INT PRIMARY KEY,
    fahrzeug_id INT,
    geraet_id INT,
    datum DATE,
    beschreibung TEXT,
    FOREIGN KEY (fahrzeug_id) REFERENCES fahrzeug(fahrzeug_id),
    FOREIGN KEY (geraet_id) REFERENCES telematikgeraet(geraet_id)
);

-- Fahrt
CREATE TABLE fahrt (
    fahrt_id INT PRIMARY KEY,
    fahrer_id INT,
    fahrzeug_id INT,
    startzeit DATETIME,
    endzeit DATETIME,
    durchschnittsgeschwindigkeit FLOAT,
    FOREIGN KEY (fahrer_id) REFERENCES fahrer(fahrer_id),
    FOREIGN KEY (fahrzeug_id) REFERENCES fahrzeug(fahrzeug_id)
);

-- Messwert
CREATE TABLE messwert (
    messwert_id INT PRIMARY KEY,
    fahrt_id INT,
    timestamp DATETIME,
    geschwindigkeit FLOAT,
    beschleunigung FLOAT,
    motortemperatur FLOAT,
    fehlercode VARCHAR(50),
    FOREIGN KEY (fahrt_id) REFERENCES fahrt(fahrt_id)
);

-- Unfall
CREATE TABLE unfall (
    unfall_id INT PRIMARY KEY,
    fahrt_id INT,
    unfall_zeit DATETIME,
    unfall_ort VARCHAR(100),
    schaden FLOAT,
    unfall_ursache TEXT,
    FOREIGN KEY (fahrt_id) REFERENCES fahrt(fahrt_id)
);
