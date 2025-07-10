# QA Demo Projects – Portfólio manuálneho testovania

Vitajte v mojom repozitári s ukážkovými QA projektmi, ktoré som vytvoril ako súčasť môjho záujmu o oblasť softvérového testovania. Každý projekt vznikol ako samostatné cvičenie v manuálnom testovaní – od návrhu testovacích prípadov až po ich exekúciu a reportovanie chýb v JIRA/Xray.

Tieto projekty demonštrujú môj praktický prístup k testovaniu a dôraz na systematickosť, dokumentáciu a kontext. Niektoré aplikácie vznikli pôvodne ako reálne nástroje na praktické využitie, iné ako cielené cvičenia v oblasti QA.

**Každý projekt obsahuje kompletnú dokumentáciu vo forme samostatných súborov s testovacími prípadmi a bug reportami vo formáte Markdown, doplnený o dôkazový materiál (screenshoty, prípadne video).**

---

## Prehľad projektov

### 1. WEB Výsledky hodnotenia

Webová aplikácia, ktorá umožňuje študentom po zadaní emailu zobraziť výsledky semestrálneho testu a stiahnuť jeho scan. Projekt pôvodne slúžil ako nástroj pre mojich študentov kurzu *Solfeggio* na Vysokej škole múzických umení, neskôr som ho adaptoval ako QA demoprojekt.

- **Testovanie:** verifikácia emailov, reakcie systému na vstupy, funkčnosť sťahovania
- **Testovacích prípadov:** 5
- **Stav:** všetky testy prešli

- [README projektu](./WEB Výsledky hodnotenia/README.md)


**Ukážka testovacieho prípadu**

```plaintext
Testovací Prípad TC03 – Neplatný formát emailu zobrazí chybové hlásenie

Súvisiaca BR: BR-1  
Priorita: Vysoká  

Popis:
- Po zadaní emailovej adresy v neplatnom formáte sa zobrazí chybové hlásenie

PRE-REQ:
- Stránka je načítaná

Data:  
- abc@.com

Kroky:  
1. Zadaj do email inputu "ab@.com"
2. Klikni na button "Zobraz výsledky"  

Očakávaný výsledok:  
- Zobrazí sa chybové hlásenie "Nesprávny email. Skús znova."  

Skutočný výsledok:
- Zobrazil sa chybové hlásenie "Nesprávny email. Skús znova."  

Stav:
Passed  

```

**Ukážka práce v JIRA/Xray:**

![Test case TC03](./WEB_Výsledky_hodnotenia/screenshots/jira/ss_WEB_TC03_Jira.png)

![All work](./WEB_Výsledky_hodnotenia/screenshots/jira/ss_WEB_All_work_Jira.png)

---

### 2. Kalkulačka percent

Jednoduchá aplikácia na výpočet percenta. Vytvorená s úmyselnými chybami, ktoré som následne testoval a dokumentoval v rámci QA scenárov.

- **Testovanie:** výpočtová logika, chybové vstupy, UI/UX správanie
- **Testovacích prípadov:** 6
- **Bug reporty:** 4

- [README projektu](./Kalkulačka percent/README.md)


**Ukážka bug reportu**

```plaintext

[BUG] – Príliš veľa desatinných miest vo výsledku

Súvisiaci test: TC_06  
Priorita: Nízka  
Závažnosť: Stredná

Popis:
- Výsledok s desatinnými číslami nie je nastavený na zaokrúhľovanie a obsahuje viac ako 10 desatinných miest.

Očakávaný výsledok:  
- Zobrazí sa zaokrúhlený výsledok na 2 desatiné miesta (napr. 3.33%)

Skutočný výsledok:  
- Zobrazí sa výsledok s nadbytočným množstvom desatinných miest (napr. 33.33333333333333%)

Kroky na reprodukciu:  

  1. Spustíme webovú aplikáciu kalkulačky  
  2. Do poľa "Part" napíšeme 3  
  3. Do poľa "Whole" napíšeme 9  
  4. Stlačíme tlačidlo "Calculate"

Navrhované riešenie:
  - Odporúčam doplniť funkciu toFixed(2).

Environment:

- OS: MacOs Sierra 10.12.6
- Prehliadač: Firefox Browser 15.24.0esr (64-bit)

Dôkaz:  
  (./screenshots/KALK_Bug_desatine_miesta.png)
  
```

**Ukážka práce v JIRA/Xray:**

![Bug – desatinné miesta](./Kalkulačka_percent/screenshots/jira/ss_KALK_TC06_Jira.png)

![All work](./Kalkulačka_percent/screenshots/jira/ss_KALK_All_work_Jira.png)

---

### 3. Snake Game – testovanie interaktívneho správania

Webová verzia klasickej hry Snake s nasimulovanými chybami. Slúži ako cvičenie z testovania UI, kolízií, pohybu a reakcií systému. Obsahuje aj video dôkaz bugu.

- **Testovanie:** logika hry, kolízie, vizuálna odozva
- **Testovacích prípadov:** 6
- **Bug reporty:** 5

- [README projektu](./Snake game/README.md)

**Ukážka bud reportu**

```plaintext
[BUG_TC04] – Hráč stratí všetky životy po kolízii s okrajom hernej plochy

Súvisiaci test: TC04  
Súvisiaca požiadavka: BR-4  
Priorita: Vysoká  
Závažnosť: Vysoká

Popis:
- Had sa po strate života nevráti do svojej pôvodnej veľkosti 3 blokov a pokračuje ďalej v nadobudnutej veľkosti.

Očakávaný výsledok:
- Hráč by mal stratiť 1 život

Skutočný výsledok:
- Hráčovi sa odpočítajú všetky životy a hra sa končí

Kroky na reprodukciu:
  1. Spustíme webovú aplikáciu Snake Game
  2. Navigujeme hada na okraj hernej plochy tak, aby sa jej dotkol
  3. Sledujeme počet životov 

Dôkaz:
  [Video MOV](./screenshots/Snake_Game_BUG_TC04.mov)
```

**Ukážka práce v JIRA/Xray:**

![Bug – TC04](./Snake_game/screenshots/jira/ss_Snake_Game_BUG_TC04_Jira.png)

![All work](./Snake_game/screenshots/jira/ss_Snake_Game_All_work_Jira.png)

---
---

## Použité nástroje a technológie

- **Test management:** JIRA + Xray  
- **Bug tracking:** Screenshoty, video, komentáre  
- **Formát:** Markdown, manuálne testovanie  
- **Testovacie prostredie:** macOS Sierra, Firefox ESR  
- **Editácia kódu:** Visual Studio Code  

---


## Cieľ repozitára

Tento repozitár dokumentuje moje prvé QA projekty. Demonštruje schopnosť navrhovať testy, odhaľovať chyby a pracovať s nástrojmi ako JIRA/Xray v rámci systematického prístupu k testovaniu.


---

## Autor

**Marián Zavarský**  
GitHub: [github.com/MarZav-5](https://github.com/MarZav-5)  
LinkedIn: [linkedin.com/in/marian-zavarsky-13128a1ab](https://www.linkedin.com/in/marian-zavarsky-13128a1ab/)
