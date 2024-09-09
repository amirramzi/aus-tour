import React from "react";
import styles from "./page.module.scss";
import { antonio, inter } from "../fonts";
const RulesPage = () => {
  const contents: {
    title: string;
    body: string;
  }[] = [
    {
      title: "Modus",
      body: ` Gespielt 5+1. Ein Team besteht aus maximal 10 Spielern. Die Gruppen
          bestehen aus 4 Mannschaften. Die besten zwei Teams steigen in die KO
          Runde auf. Ein Event besteht aus einem Vormittagsturnier und einem
          Nachmittagsturnier. Am Abend findet dann das Finale zwischen den
          beiden Siegern stat. Bei Unentschieden in der KO Runde wird per Sudden
          Death weitergespielt. Eine Minute Spielzeit wobei jede Minute ein Mann
          das Spielfeld verlassen muss. Spielerwechsel sind dann nicht mehr
          möglich.`,
    },
    {
      title: "Kosten",
      body: `Das Nenngeld des Events beträgt einmalig 130€. Für das Finalevent ist keine Zahlung nötig. Sollte ein Event ausfallen wird das bezahlte Nenngeld zurück überwiesen.`,
    },
    {
      title: "Spielzeit",
      body: `Der Spielzeit beträgt 10 Minuten in der Vorrunde und KO Runde und 15 Minuten beim Finale.`,
    },
    {
      title: "Regeln",
      body: `Es wird Hallenfußball mit Bande gespielt. Das Feld ist mit Banden umrandet. Der Belag ist PVC oder Parkett. Out und Ecken werden mit dem Fuß gespielt. Es ist somit indirekter Freistoß. Gelbe Karte: Verwarnung. Dritte gelbe Karte in der Qualifikation bedeutet ein Spiel Sperre. Gelb-Rote Karte: Der Spieler kann am Spiel nicht mehr teilnehmen. Sein Team muss das Spiel in Unterzahl beenden. Am Finaltag werden die gelben Karten gestrichen. Rote Karte: Der Spieler ist für das Spiel in dem er die Karte bekommen hat, sowie mindestens ein weiteres Spiel gesperrt.Karte: Der Spieler ist für das Spiel in dem er die Karte bekommen hat, sowie mindestens ein weiteres Spiel gesperrt.`,
    },
    {
      title: "Wechsel",
      body: `Der Wechsel ist fliegend. Möchte man den gesamten Block wechseln, ist das nur bei eigenem Ballbesitz und Spielunterbrechung möglich.`,
    },
    {
      title: "Ausschluss",
      body: `Bei Schiedsrichterbeleidigung oder Beleidigung der Organisatoren wird der Spieler oder die betroffenen Personen aus dem Turnier ausgeschlossen. Bei Raufhandel, Schlägerei oder versuchter Rudelbildung wird das Team aus dem Event suspendiert.`,
    },
    {
      title: "Hauptpreis",
      body: `Der Hauptpreis wird an Spieler des Siegerteams ausgehändigt. Der Preis kann nicht an Dritte weitergegeben werden. Es dürfen nur Spieler des Siegerteams, welche am Kader stehen zur Reise antreten. Trainer oder Betreuer sind ausgenommen. Die Mannschaft kann zusätzliche Plätze kaufen. Jedoch nur nach Verfügbarkeit.`,
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h1 className={antonio.className}>Rules</h1>
      {contents.map((item, index) => (
        <div key={index} className={styles.content}>
          <h3 className={inter.className}>{item.title} </h3>
          <p className={inter.className}>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default RulesPage;
