### Rendszer célja


### Projekt terv


### Üzleti folyamatok modellje


### Követelmények


### Funkcionális terv


### Fizikai környezet


### Absztrakt domain modell


### Architekturális terv


### Adatbázis terv

![](../kepek/tamaskisprojectadatb.png)

Az adatbázis esetében kiemelten fontosnak tartjuk, hogy zéró redundancia legyen az adatok között, növelve a megbízhatóságot és a hitelességet. Ezért egy játék táblában nem tárolhatom azt, hogy meddig jutott el az illető, mert a játékban végbemenő szintek lebonyolitása egy másik tábla feladata, az pedig, hogy mennyit nyert, szintén nem tárolhatom, mert redundanciát okozna, ami viszont az adott nehézségi szint kérdéséhez tartozik. 

Máshogy megfogalmazva arra vagyunk kíváncsiak, hogy adott játékos mennyi pénzt vitt haza az utolsó játékában. Ha a játékban tárolnám a nyereményt, akkor hibás lenne az adatbázis, mert ez az érték származtatható. Nézzük is meg.
A játékos táblában rákeresünk az adott játékosra, ezt összekötjük a játék táblával, és dátum alapján szűrűnk az adott játékoshoz tartozó időben legközelebbi játékra. Ha ez megvan, akkor összekötjük a játékot a játékbeli kérdések táblával, és játék id alapján rákeresünk, hogy milyen kérdések hangzottak el. Itt tovább megyünk a kérdések táblára, ahol szerepel egy kérdés nehézségi szintje és az, hogy a válaszunk jó-e. Így meg tudjuk nézni egy feltételben, hogy jó választ adunk-e a legmagasabb szintű kérdésében és logikai vagy-gyal összekötve mondjuk azt, hogy a válasz a legnehezebb kérdésre helytelen, ezt összekötve logikai és-el a legmagasabb fix nyeremény, amit a kérdés jutalom táblából tudhatunk meg.

Elsőre kicsit zavarosnak hangzik, de minden felesleges függőség és redundancia meg van szűntetve. Ez összességében bonyolultabbá teszi a lekérdezéseket, de sokkal biztonságosabbá, sokaldalúbbá, kevesebb adatot is igényel.

Ezzel az adatbázissal képesek leszünk egy teljes játékot naplózva eltárolni, egészen attól, hogy milyen sorrendben jöttek a kérdések, milyen választ adott rá az illető, mikor,- és ki játszott, mennyi pénzt nyert stb. anélkül, hogy erről hosszú naplóüzeneteket vezetnénk, és tárolnánk egy külön adatbázisban, mindent lehet kérdezni. További igények nem merültek fel. 

### Implementációs terv


### Teszt terv

Különböző böngészők tesztelése:

- *@veresviktor02* - Safari (WebKit)
- *@egyiptomi425* - Brave (Blink)
- *@pkristof1999* - Firefox (Gecko)

Különböző operációs rendszerek tesztelése:

- *@veresviktor02* - MacOS Ventura (13)
- *@egyiptomi425* - Ubuntu Linux 23.04
- *@pkristof1999* - Windows 11

Teszteléseknél törekszünk arra, hogy minél több rendszeren, 
és minél több fajta böngészővel próbáljuk ki a kész szoftvert, 
hogy a lehető legnagyobb tesztlefedettséggel tudjuk biztosítani a hibátlan szoftver működést.


#### Béta teszt:

A teszt célja a szoftver funkcióinak átfogó ellenőrzése különböző operációs rendszerek használatával és minél több fajta böngészővel.
Teszteléskor ellenőrzésre kerül továbbá, hogy a szoftver minden főbb felbontáson hibátlanul, 
jó láthatósággal működik-e (pl. 1280×720p [minimum támogatott felbontás], 1366×768p, 1920×1080p, 2560×1440p és 3840×2160p [maximum támogatott felbontás]).
A teszt tervezett időtartama egy hét.


### Telepítési terv

 - A szoftver webes felületéhez egy ajánlott böngésző telepítése szükséges (Google Chrome, Firefox, Opera, Safari), illetve egy olyan operációs rendszer használata, mely ezen böngészők legfrissebb verziójának futtatására képes. Ezen kívül egyéb szoftver nem szükséges a futtatáshoz.
 - A webszerverre közvetlenül az internetről kapcsolódnak rá a kliensek.

### Karbantartási terv

 - Új kérdések hozzáadása, hibás/elavult kérdések javítása.
 - Jövőben felmerülő biztonsági hibák javítása.
