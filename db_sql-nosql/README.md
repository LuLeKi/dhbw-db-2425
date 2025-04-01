# 📘 Datenbankprojekt – Teil 1  
## Projekt: Fahrzeug-Telematikverwaltung  
**Modul:** Datenbanksysteme  
**Studiengang:** Technische Informatik  
**Dozent:** Prof. Karsten Keßler  
**Version:** 0.2.14  
**Abgabe:** 13.04.2025  
**Autor:** [Dein Name hier eintragen]

---

## ✅ Inhalt dieser Abgabe

Diese Abgabe umfasst die erste von zwei Projektphasen. Ziel ist es, die relationale Struktur eines Fahrzeug-Telematiksystems zu modellieren und in einem MySQL-kompatiblen SQL-Skript abzubilden.

### Enthaltene Dateien

| Datei                 | Beschreibung                                                   |
|-----------------------|----------------------------------------------------------------|
| `er_modell.pdf`       | Grafische Darstellung des relationalen Modells (ER-Diagramm)   |
| `create_schema.sql`   | Lauffähiges SQL-Skript zum Erstellen aller Datenbanktabellen   |
| `README.md`           | Diese Projektbeschreibung für Teil 1                           |

---

## 🧱 Übersicht des Datenmodells

Die MySQL-Datenbankstruktur bildet reale Entitäten aus einem Fahrzeug-Telematiksystem ab:

- Fahrer, Fahrzeuge, Telematikgeräte
- Fahrten und deren Messwerte
- Geräteinstallationen in Fahrzeugen
- Wartungen (an Geräten oder Fahrzeugen)
- Unfälle, die einzelnen Fahrten zugeordnet sind

Beziehungen und Fremdschlüssel gewährleisten die Integrität und Nachvollziehbarkeit der Daten.

---

## 🛠 Installation & Ausführung

1. SQL-Skript ausführen:
```bash
mysql -u root -p < create_schema.sql
