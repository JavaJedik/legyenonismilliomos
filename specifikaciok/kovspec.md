# Követelmény specifikáció

### 1. Jelenlegi helyzet

Vágó István szeretne Legyen ön is milliomos játékot online játszani a Covid miatt, mert nem tudnak bemenni a stúdióba.
Javascript nyelven szeretné lefejleszteni egy webes felületet, ahol az emberek tudnak játszani.
Mivel ez egy nagyon közkedvelt játék, ami látszik abból is, hogy milyen sok ember jelentkezik a tévés vetélkedőkbe, ezért úgy gondoljuk, hogy érdemes befektetni a fejlesztésbe, és arra számítunk, hogy széles közönséghez fog majd eljutni a szoftver.


### 2. Vágyálom rendszer

A cél egy webes felület létrehozása Javascript segítségével, ami a kvízjátékot megvalósítva kommunikál a felhasználóval, 
ahol meg tud jelölni válaszokat, és visszajelzést kapni, hogy jó volt-e, mennyi választ adott.

Játék izgalmasabbá tétele: 
- Minél nehezebb kérdésnél jár a játékos, annál gyorsabb hanghatás bejátszása.
- Háttérnek egy környezetbe illő kép.
- Gombok színének a változtatása attól függően, hogy a játékos jó vagy rossz választ adott-e meg. 
- Esetleges időzítő hozzáadása, ha szükséges, hogy stresszesebb legyen
- Visszajelzés küldése arról, hogy milyen jól teljesítettünk

### 3. Jelenlegi üzleti folyamatok

- Helyes válasz esetén: feljebb lép a játékos a nyereményben.
- Rossz válasz esetén: elveszti a játékos a játékot.
- Adott pontokon a játékos megállhat és elviheti a megnyert pénzt.
- Válasz megjelölése.
- Visszajelzés adása a válasz helyességéről.
- Kliens-szerver modell összehangolt működése.

### 4. Igényelt üzleti folyamatok

- Kérdések és a hozzájuk tartozó válaszok összegyűjtése, feldolgozása.
- Játékon belüli segítségek implementálása.


### 5. A rendszerre vonatkozó szabályok

- A webes felület szabványos eszközökkel készüljön (html / css / javascript).
- Egy játékon belül minden segítséget egyszer lehessen felhasználni.
- Nem megengedett eszközök használatának tiltása, amellyel a segítségkérést meg lehetne kerülni.
- Ha a játékos megáll a játékban, akkor az adott nyereményt elviheti, de a játékot nem folytathatja.


### 6. Követelménylista

- A felület reszponzív legyen.
- Nyelvválasztás lehetősége (angol / magyar).
- Külső fenyegetettségek elől védett legyen a rendszer.


### 7. Fogalomszótár

GDPR: Minden adat és kérdés bizalmas kezelése, ne férhessen hozzá idegen személy.

Segítség:

telefonálás - a játékos 20 másodperc erejéig felhívhat egy külső személyt
nézői vélemény - a nézőtéren elhelyezkedő nézők által adott választ megtekintheti a játékos, válaszonként százalékos formában felezés
