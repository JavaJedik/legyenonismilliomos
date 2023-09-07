### Áttekintés

Vágó István szeretne Legyen ön is milliomos játékot online játszani a Covid miatt, mert nem tudnak bemenni a stúdióba. Javascript nyelven szeretné lefejleszteni egy webes felületet, ahol az emberek tudnak játszani. A játékosoknak lehetőségük lesz kérdésekre választ adni egy előre megadott felsorolásból. Ha helyesen válaszolnak, akkor nyereményük növekszik, és egy következő kérdésre léphetnek. A játékos megállhat a játék bármelyik pontján, és akkor a jelenlegi nyereményt elviheti. A játékban 5 kérdésenként fix nyeremény van, amelyet a játékos akkor vihet el, ha rosszul válaszol, vagy ha épp ott áll meg és rendelkezik az adott fix nyereménnyel. A játékosnak lehetősége van a játék során segítségeket igényelnie (telefonos, nézői, kérdés felezés), de ezeket egy játék során összesen egyszer használhatja fel.


### Jelenlegi helyzet

15 kérdésre kell a játékosnak válaszolni a 40 millió forintos főnyeremény megszerzéséhez.

A pénznyeremények sorrendben a következők:
- 5.000 ft
- 10.000 ft
- 25.000 ft
- 50.000 ft
- 100.000 ft
- 200.000 ft
- 300.000 ft
- 500.000 ft
- 800.000 ft
- 1.500.000 ft
- 3.000.000 ft
- 5.000.000 ft
- 10.000.000 ft
- 20.000.000 ft
- 40.000.000 ft

A játék szakaszkérdéseiért járó jutalom:
100.000 ft (5.), 1.500.000 ft (10.)

Ha a játékos eléri ezeket a pontokat, akkor utána a játékos hiába ad rossz választ egy kérdésre, akkor az elért határért járó összeget viszi haza magával.
A játékos bármikor kiszállhat a játékból és elviheti az adott összeget, de ilyenkor nem tudja a játékos, hogy mi lesz a következő kérdése.

### Követelménylista

- Egy adatbázis, amiből konzisztensen lehet írni és olvasni
- Egy grafikus felület, ami interakciót hajthat végre a felhasználóval
- Angol és magyar nyelv

### Jelenlegi üzleti folyamatok modellje

A nézők a tévében látott Legyen Ön is Milliomos műsor után szívesen játszanának maguk is egy ilyen játékon. Mivel a műsorba a bejutás ritka, ezért szeretnénk elkészíteni egy mindenki számára elérhető Legyen Ön is Milliomos játékot, melyet bármely böngésző segítségével könnyen el tud érni a játékos.

### Igényelt üzleti folyamatok modellje

- Felhasználók nyomon követése
- Kérdések kiolvasása az adatbázisből
- Néző interakciói a grafikus felülettel
- MVC (modell view controller) model megvalósítása
- Váltás a kérdések között
- Játék szakaszainak implementálása

### Használati esetek

### Képernyő tervek

Számítógépes megjelenés:
![](../kepek/Milliomos-pc.png)

Mobilos megjelenés:
![](../kepek/Milliomos-mobil.png)

### Forgatókönyv

A játékos elindítja a játékot, és kap egy kérdést 4 válaszlehetőséggel. Igényelhet 3 segítséges bármikor. A játékos megjelöl egy kérdést, ha jól válaszol, továbbjut, és ez addig folytatódik, amíg ki nem száll vagy elront egy kérdést, ilyenkor a legelső fix jutalmat kapja meg. Csalás azonnali kizárást eredményez.

### Funkció - követelmény megfeleltetés

### Fogalomszótár

- [MVC modell:](https://hu.wikipedia.org/wiki/Modell-n%C3%A9zet-vez%C3%A9rl%C5%91)  Összetett, sok adatot a felhasználó elé táró számítógépes alkalmazásokban gyakori fejlesztői kívánalom az adathoz (modell) és a felhasználói felülethez (nézet) tartozó dolgok szétválasztása, hogy a felhasználói felület ne befolyásolja az adatkezelést, és az adatok átszervezhetők legyenek a felhasználói felület változtatása nélkül. A modell-nézet-vezérlő ezt úgy éri el, hogy elkülöníti az adatok elérését és az üzleti logikát az adatok megjelenítésétől és a felhasználói interakciótól egy közbülső összetevő, a vezérlő bevezetésével.