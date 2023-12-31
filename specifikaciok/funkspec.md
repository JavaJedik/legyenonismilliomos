# Funkcionális specifikáció

### 1. Áttekintés

Vágó István szeretne __Legyen Ön is milliomos__ játékot online játszani a Covid miatt, mert nem tudnak bemenni a stúdióba.
*Javascript* nyelven szeretné lefejleszteni egy webes felületet, ahol az emberek tudnak játszani. 
A játékosoknak lehetőségük lesz kérdésekre választ adni egy előre megadott felsorolásból.
Ha helyesen válaszolnak, akkor nyereményük növekszik, és a következő kérdésre léphetnek. 
A játékos megállhat a játék bármelyik pontján, és akkor a jelenlegi nyereményt elviheti. 
A játékban 5 kérdésenként fix nyeremény van, amelyet a játékos akkor vihet el, ha egy későbbi kérdésre rosszul válaszol.
A játékosnak lehetősége van a játék során segítségeket igényelnie (telefonos, nézői, felezés), 
de ezeket egy játék során segítségenként egyszer használhatja fel.
Mivel ez egy nagyon közkedvelt játék, ami látszik abból is, 
hogy milyen sok ember jelentkezik a tévés vetélkedőkbe, ezért úgy gondoljuk, 
hogy érdemes befektetni a fejlesztésbe, és arra számítunk, 
hogy széles közönséghez fog majd eljutni a szoftver.


### 2. Jelenlegi helyzet

15 kérdésre kell a játékosnak válaszolni a __*40 millió forintos főnyeremény*__ megszerzéséhez.

A pénznyeremények sorrendben a következők:
- *5.000 ft*
- *10.000 ft*
- *25.000 ft*
- *50.000 ft*
- *100.000 ft*
- *200.000 ft*
- *300.000 ft*
- *500.000 ft*
- *800.000 ft*
- *1.500.000 ft*
- *3.000.000 ft*
- *5.000.000 ft*
- *10.000.000 ft*
- *20.000.000 ft*
- *40.000.000 ft*

A játék szakaszkérdéseiért járó jutalom:
*100.000 ft* (5.), *1.500.000 ft* (10.)

Ha a játékos eléri ezeket a pontokat, akkor utána a játékos hiába ad rossz választ egy kérdésre, 
akkor az elért határért járó összeget viszi haza magával.
A játékos bármikor kiszállhat a játékból és elviheti az adott összeget, de ilyenkor nem tudja a játékos, hogy mi lesz a következő kérdése.

### 3. Követelménylista

- Egy adatbázis, amit konzisztensen lehet írni és olvasni.
- Egy grafikus felület, amin interakciót hajthat végre a felhasználó.
- Angol és magyar nyelv.

### 4. Jelenlegi üzleti folyamatok modellje

A nézők a tévében látott __Legyen Ön is milliomos__ műsor után szívesen játszanának maguk is egy ilyen játékon. 
Mivel a műsorba a bejutás ritka, ezért szeretnénk elkészíteni egy mindenki számára elérhető __Legyen Ön is milliomos__ játékot, 
melyet bármely böngésző segítségével könnyen el tud érni a játékos.

Ezen kívül a kérdéseknek különböző nehézségi szintekkel kell rendelkezniük, 
hogy a nagyobb nyereményekhez bonyolultabb kérdések megválaszolása legyen szükséges. 
Így adott nyereményszinteket elkülönítve fogunk az adott nehézséghez tartozó kérdések közül random választani. 
A kérdésen belüli válaszok is random sorrendben jellennek meg, hogy ne legyen szabályszerűség arra, 
hogy melyik választ érdemes megjelölni vagy ha netán máshonnan emlékszik rá a versenyző.

### 5. Igényelt üzleti folyamatok modellje

- Felhasználók nyomon követése.
- Kérdések kiolvasása az adatbázisből.
- Néző interakciói a grafikus felülettel.
- MVC (modell view controller) model megvalósítása.
- Váltás a kérdések között.
- Játék szakaszainak implementálása.

### 6. Használati esetek

- Magyar vagy angol nyelven.
- Telefonról vagy PC-ről.

#### 6.1. Játékos jó választ ad meg

- A játékos látja, hogy a pénznyeremény mutatója feljebb megy.
- Dönthet, hogy elviszi a nyereményt, vagy tovább megy.
- Automatikusan elviszi a pénzt, ha az utolsó kérdésre helyesen 
adja meg a választ, illetve automatikusan tovább megy, 
ha szakaszkérdést válaszolt meg helyesen.

#### 6.2. Játékos rossz választ ad meg

- A játékos látja, hogy mennyi pénzt visz el.
- A játék kiírja a statisztikákat.
- A játék főmenüjébe visszadobja a játékost.

#### 6.3. Játékos megnyeri a játékot

- Valami ünnepélyes felület, gratulációval.
- Ha ezen túllép a játékos, akkor visszadobja a játékost a főmenübe.



### 7. Képernyő tervek

#### 7.1. Számítógépes megjelenés

![](../kepek/Milliomos-pc.png)

#### 7.2. Mobilos megjelenés

![](../kepek/milliomos-mobil.png)

### 8. Forgatókönyv

A játékos elindítja a játékot, és kap egy kérdést 4 válaszlehetőséggel. 
Igényelhet 3 segítséges bármikor. 
A játékos megjelöl egy kérdést, ha jól válaszol, továbbjut, és ez addig folytatódik, 
amíg ki nem száll vagy elront egy kérdést, ilyenkor a legelső fix jutalmat kapja meg. 
Csalás azonnali kizárást eredményez.

### 9. Funkció - követelmény megfeleltetés

Az elkészült program a megrendelő minden igényét kielégíti.


### 10. Fogalomszótár

#### 10.1. [MVC modell:](https://hu.wikipedia.org/wiki/Modell-n%C3%A9zet-vez%C3%A9rl%C5%91) 

Összetett, sok adatot a felhasználó elé táró számítógépes alkalmazásokban gyakori fejlesztői kívánalom az adathoz (modell) és a felhasználói felülethez (nézet) tartozó dolgok szétválasztása, 
hogy a felhasználói felület ne befolyásolja az adatkezelést, és az adatok átszervezhetők legyenek a felhasználói felület változtatása nélkül. 
A modell-nézet-vezérlő ezt úgy éri el, hogy elkülöníti az adatok elérését és az üzleti logikát az adatok 
megjelenítésétől és a felhasználói interakciótól egy közbülső összetevő, a vezérlő bevezetésével.

#### 10.2. Szakaszkérdés: 

Amikor a játékos megválaszolja ezt a kérdést, akkor attól a ponttól kezdve ez lesz az az összeg, 
amit haza visz, ha a továbbiakban helytelenül válaszol.
