### PUTICA$H


# SMOKE testovacie prípady


- [SM-01 Načítanie zoznamu barov](#testovací-prípad-sm-01)
- [SM-02 Výber baru a otvorenie mapy](#testovací-prípad-sm-02)
- [SM-03 Zobrazenie trasy](#testovací-prípad-sm-03)
- [SM-04 Fallback výpočet](#testovací-prípad-sm-04)
- [SM-05 Deep link do Google Maps](#testovací-prípad-sm-05)
- [SM-06 Návrat na zoznam barov](#testovací-prípad-sm-06)
- [SM-07 Responzivita](#testovací-prípad-sm-07)
- [SM-08 Chyba pri načítaní dát](#testovací-prípad-sm-08)
- [SM-09 Reštrikcia API kľúča](#testovací-prípad-sm-09)


---
---

## Testovací Prípad SM-01

**ID:** SM-01

**Názov:** Načítanie zoznamu barov

**Súvisiaca BR:** BR–02

**Priorita:** Vysoká

**Popis:** Po spustení aplikácie sa zobrazí úvodný screen (#pickerScreen) s načitaným zoznamom barov na výber podľa bars.json

**PRE-REQ:** 
- Aplikácia je spustená
- Čistá localStorage

**Test dáta:** 
- URL: https://puticash.netlify.app/
- bars.json (načítavanie z root webu)

**Kroky:**
1. Otvor aplikáciu na úvodnom screene
2. Sleduj zobrazenie počtu a názvov barov 
3. Porovnaj počet a názvy barov s hodnotami "name" v bars.json

**Očakávaný výsledok:**
- Aplikácia zobrazuje správny počet barov podľa bars.json
- Názvy v UI sa zhodujú 1:1 s hodnotami "name" v bars.json


**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed

---

## Testovací prípad SM-02

**ID:** SM-02
**Názov:** Výber baru a otvorenie mapy
**Súvisiaca BR:** BR-01, BR–02, BR-03
**Priorita:** Vysoká

**Popis:** Používateľ vyberie bar zo zoznamu na úvodnom screene (#pickerScreen). Aplikácia má prepnúť na mapový screen (#mapScreen) 
a zobraziť Leaflet mapu s markerom vybraného baru a jeho prislúchajúceho bankomatu (ATM).

**PRE-REQ:**
-  Zoznam barov na úvodnom screene je načítaný

**Test dáta:**
-  URL: https://puticash.netlify.app/
-  Ľubovoľný bar zo zoznamu

**Kroky:**
1. Na úvodnom screene klikni na ľubovoľný bar
2. Over zobrazenie Leaflet mapy
3. Over vykreslenie 2 markerov, jeden pre bar, druhý pre ATM
   -  marker pre bar má súradnice z bars.json
   -  marker pre ATM má súradnice z atms.json 

**Očakávaný výsledok:**

-  Po kliknutí na bar sa zobrazí Leaflet mapa
-  Na mape sa nachádzajú 2 markery – jeden označuje vybraný bar, druhý prislúchajúci bankomat (podľa dát v JSON)

**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed

---

## Testovací prípad SM-03

**ID:** SM-03
**Názov:** Zobrazenie trasy
**Súvisiaca BR:** BR=01, BR-03
**Priorita:** Vysoká

**Popis:** Na mapovom screene sa vykreslí pešia trasa medzi vybraným barom a prislúchajúcim ATM. Používateľ v paneli nad mapou vidí metriky vzdialenosť a čas. 
(Pre fallback prípad nedostupnosti Google Directions API, viď SM–O4 "Fallback výpočet")

**PRE-REQ:**
-  Vybraný ľubovoľný bar z úvodného screenu
-  Mapový screen s Leaflet mapou je zobrazený

**Test dáta:**
-  URL: https://puticash.netlify.app/

**Kroky:**
1. Over zobrazenie Leaflet mapy na #mapScreen
2. Over vykreslenie 2 markerov – jeden pre bar, druhý pre ATM
3. Over vykreslenie polyline trasy medzi barom a ATM
4. Over zobrazenie správnych metrík v toolbare nad mapou: vzdielenosť v m/km (napr. 220 m) a čas v minútach (napr. 2 minúty)

**Očakávaný výsledok:**
-  Na mape sa vykreslí polyline trasa medzi 2 markermi – barom a atm
-  Na paneli nad mapou sú zobrazené metriky: vzdialenosť (m/km) a čas (min)

Poznámka:
-  V prípade nedostupnosti Google Directions API, viď SM-04 "Fallback výpočet"


**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed

---

## Testovací prípad SM-04

**ID:** SM-04
**Názov:** Fallback výpočet
**Súvisiaca BR:** BR–04
**Priorita:** Vysoká

**Popis:** V prípade, že Google Directions API nie je dostupné alebo vráti chybu (napr. kvôli obmedzeniam API kľúča alebo blokovaniu požiadaviek), 
aplikácia zobrazí notice banner s chybovou hláškou a vypočíta vzdialenosť + čas pomocou fallback algoritmu (haversine pre vzdialenosť, 
priemerná rýchlosť chôdze pre čas).

**PRE-REQ:**
-  Vybraný ľubovoľný bar z úvodného screenu
-  Zobrazený mapový screen
-  Google Directions API nedostupné:
  
   -  DevTools → Network → Offline
   
   -  Pri lokálnom testovaní: odobrať localhost adresu vo Website restrictions (Google Cloud Console)

**Test dáta:**
-  URL: https://puticash.netlify.app/

**Kroky:**
1. Na úvodnom screene klikni na ľubovoľný bar
2. Over zobrazenie Leaflet mapy na #mapScreen
3. Over zobrazenie chybovej hlášky v notice banneri (napr. Trasa API zlyhala)
4. Over vykreslenie 2 markerov – jeden pre bar, druhý pre ATM
5. Over, že medzi markermi nie je vykreslená Directions polyline (trasa z API)
6. Over zobrazenie fallback metrík v toolbare nad mapou: vzdielenosť v m/km (napr. 220 m) a čas v minútach (napr. 2 min)

**Očakávaný výsledok:**
- V notice banneri pod mapou sa zobrazí chybová hláška (napr. "Trasa API zlyhala…")
-  Medzi barom a ATM nie je Directions polyline z Google API
-  Na paneli nad mapou sú zobrazené fallback hodnoty (haversine + odhad času chôdze): vzdialenosť (m/km) a čas (min)


**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed

---

## Testovací prípad SM-05

**ID:** SM-05
**Názov:** Deep link do Google Maps
**Súvisiaca BR:** BR–01, BR–03
**Priorita:** Vysoká

**Popis:** Na mapovom screene v toolbare má používateľ možnosť otvoriť trasu v Google Maps cez deeplink. 
Po kliknutí sa v novej karte otvorí Google Maps s nastaveným origin (bar), destination (ATM) a pešou navigáciou.

**PRE-REQ:**
-  Zobrazený mapový screen
-  Vybraný ľubovoľný bar z úvodného screenu

**Test dáta:**
-  URL: https://puticash.netlify.app/

**Kroky:**

1. Na úvodnom screene klikni na ľubovoľný bar
2. V toolbare nad mapou klikni na tlačidlo „Otvoriť v Google Maps“
3. Over, že sa otvorí nová karta s Google Maps
4. Over, že URL obsahuje origin a destination súradnice z aktuálne vybraných bodov (bar, ATM)
5. Over, že je nastavený walking režim (pešo)

**Očakávaný výsledok:**
-  Otvorí sa nová karta Google Maps s trasou od bar ku ATM
-  V URL sú vyplnené správne parametre (origin, destination, travelmode=walking)
-  Trasa v Google Maps zodpovedá vybraným bodom v aplikácii

**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed

---

## Testovací prípad SM-06

**ID:** SM-05
**Názov:** Návrat na zoznam barov
**Súvisiaca BR:** BR-02
**Priorita:** Stredná – Vysoká

**Popis:** Po zobrazení mapového screenu sa používateľ môže vrátiť na úvodný screen so zoznamom barov pomocou tlačidla „← späť“. 
Mapový screen sa skryje a opäť je viditeľný zoznam barov.

**PRE-REQ:**
-  Zobrazený mapový screen (bar už bol vybraný)

**Test dáta:**
-  URL: https://puticash.netlify.app/

**Kroky:**

1. Na mapovom screene klikni na tlačidlo „← späť“

2. Over, že sa skryje mapový screen a zobrazí sa úvodný screen so zoznamom barov

3. Over, že je zoznam barov opäť interaktívny (možné vybrať bar)

**Očakávaný výsledok:**
-  Aplikácia sa vráti na úvodný screen so zoznamom barov.
-  Mapový screen je skrytý; zoznam barov je zobrazený a funkčný.


**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed

---

## Testovací Prípad SM-07

**ID:** SM-07
**Názov:** Responzivita
**Súvisiaca BR:** BR–07
**Priorita:** Stredná

**Popis:** Overenie, že aplikácia je čitateľná a ovládateľná v mobilných a tabletových rozlíšeniach. 
UI prvky sa správne prispôsobujú šírke displeja a obsah zostáva dostupný bez horizontálneho scrollu.

**PRE-REQ:**
-  Otvorené DevTools → Device Toolbar (režim mobil/tablet)

**Test dáta:**
-  URL: https://puticash.netlify.app/

**Kroky:**

1. Otvor aplikáciu v DevTools s aktivovaným Device Toolbar

2. Otestuj minimálne tieto breakpointy:
   -  Mobil (360 × 640, napr. Galaxy S5)
   -  Tablet (768 × 1024, napr. iPad)
   -  Väčší mobil (414 × 896, napr. iPhone XR)

3. Sleduj, či sa úvodný screen (zoznam barov) správne prispôsobí – texty nepretečú, tlačidlá sú klikateľné

4. Vyber bar a prejdi na mapový screen:
   -  Over čitateľnosť panelu metrík nad mapou
   -  Over čitateľnosť notice banneru pri chybe
   -  Over, že tlačidlá ("späť", "otvoriť v Google Maps") sú dostupné a čitateľné

5. Pri zmenšovaní/zväčšovaní šírky displeja sleduj, či nedochádza k horizontálnemu scrollu ani k rozbitiu layoutu


**Očakávaný výsledok:**
-  UI je správne prispôsobené na mobilných a tabletových rozlíšeniach
-  Texty a tlačidlá sú čitateľné a klikateľné
-  Panel metrík a notice banner sú viditeľné a nezakrývajú mapu
-  Žiadny horizontálny scroll, layout sa neláme


**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed

---

## Testovací Prípad SM-08

**ID:** SM-08
**Názov:** Chyba pri načítaní dát
**Súvisiaca BR:** BR–04
**Priorita:** Vysoká

**Popis:** Ak sa nepodarí načítať dáta (bars.json/atms.json), aplikácia zobrazí jasnú chybovú hlášku a nespustí sa výber barov.

**PRE-REQ:**
-  Simulovaná nedostupnosť dát
  
   -  Možnosti:
   -  DevTools → Network → Offline
   -  (Lokálne prostredie) Zmena cesty k JSON (aby vzniklo 404)

**Test dáta:**
-  URL: https://puticash.netlify.app/

**Kroky:**

1. Otvor aplikáciu so zapnutou simuláciou chyby načítania dát

2. Sleduj úvodnú obrazovku

3. Over, že sa nezobrazí zoznam barov

4. Over, že sa zobrazí chybová hláška typu „Chyba pri načítaní dát“

**Očakávaný výsledok:**
-  Zoznam barov sa nezobrazí.
-  Aplikácia zobrazí chybové hlásenie o zlyhaní načítania dát.

**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed

---

## Testovací Prípad SM-09

**ID:** SM-09
**Názov:** Reštrikcia API kľúča
**Súvisiaca BR:** BR–06
**Priorita:** Stredná 


**Popis:** Overenie, že Google Directions API kľúč je správne obmedzený iba na demo doménu (Netlify). Pri spustení aplikácie na inej doméne alebo v lokálnom prostredí (localhost) prestane Directions API fungovať. 
Aplikácia zobrazí chybové hlásenie a automaticky použije fallback výpočet vzdialenosti a času (haversine + odhad).

(Súvisiaci test: SM-04 – Fallback výpočet)

**PRE-REQ:**
-  V Google Could Console je API kľuč Website restriction iba pre doménu Netlify 
-  Aplikácia je spustená na inej/nepovolenej doméne, príp. cez lokálne prostredie (localhost).

**Test dáta:**
-  aplikácia na nepovolenej doméne / localhost

**Kroky:**

1. Spusť aplikáciu na nepovolenej doméne

2. Na úvodnom screene vyber ľubovoľný bar 

3. Na mapovom screene over načítanie Leaflet mapy

4. Over zobrazenie chybovej hlášky v notice banneri (napr. Trasa API zlyhala…)

5. Over, že Directions polyline nie je vykreslená na mape 

6. Over zobrazenie fallback výpočtu vzdialenosti (m/km) a času (min) v toolbare 

**Očakávaný výsledok:**
-  Aplikácia zobrazí chybové hlásenie v notice banneri (napr. Trasa Api zlyhala…)
-  Na mape Leaflet sa nezobrazí Directions polyline z Google API
-  Metriky v toolbare zobrazujú fallback výpočet (haversine + odhad času chôdze)

**Skutočný výsledok:**
*(doplniť počas testu)*

**Stav:**
Not Executed
