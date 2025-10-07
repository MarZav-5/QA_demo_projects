# PUTICA$H

Tento projekt demonštruje manuálne testovanie jednoduchej webovej aplikácie, ktorá umožňuje používateľovi vybrať bar/podnik, zobraziť najbližší bankomat (ATM) na mape a prostredníctvom Google Directions API získať pešiu trasu vrátane vzdialenosti a odhadovaného času. Aplikácia podporuje aj otvorenie trasy v Google Maps.

Aplikácia vznikla ako reakcia na dlhodobý problém nemožnosti platiť kartou v obľúbenom bratislavskom podniku a na časté situácie, keď si zákazník až pri platení uvedomí, že nemá hotovosť, a musí hľadať bankomat. Aplikácia preto zobrazuje najbližšie miesto na výber hotovosti v okolí daného podniku.

---

## Zhrnutie projektu

- **Zameranie:** funkčné smoke testovanie webovej aplikácie (zoznam barov, mapa, trasa, deeplink, fallback pri zlyhaní Directions, responzivita, API test)

- **Smoke suite:** 9 manuálnych testovacích prípadov

- **Nájdené chyby:** bude doplnené po exekúcii testov

- **Použité nástroje:** Google Cloud Console, Visual Studio Code, Netlify, GitHub

- **Testovacie prostredie:** macOS Sierra, Chrome / Firefox, localhost

- **Priložené súbory:**
  - [Business Requirements](./business_requirements_list.md)
  - [Smoke Test Suite](./smoke_test_suite.md)
  - [Traceability Matrix](./traceability_matrix.md)

---

## Odkaz na aplikáciu

Testovaná webová aplikácia bola dostupná na:  
https://puticash.netlify.app/

---

## Ukážka testovacieho prípadu

```plaintext
Testovací Prípad SM-03 – Zobrazenie trasy (čas + vzdialenosť)

Súvisiaca BR: BR-3  
Priorita: Vysoká  

Popis:
- Po výbere baru sa na mape zobrazí trasa k prislúchajúcemu bankomatu (pešo) a v paneli metriky (čas, vzdialenosť).

PRE-REQ: 
- Zoznam barov je načítaný
- Directions API je dostupné (pozitívny scenár)

Data:  
- Bar: „ľubovoľný“ s pripojeným ATM

Kroky:
1. Na úvodnom zozname klikni na bar.
2. Po načítaní mapy over zobrazenie oboch markerov.
3. Over vykreslenie trasy (polyline).
4. Over zobrazenie metrík (čas v min., vzdialenosť v m/ km).

Očakávaný výsledok:
- Mapa zobrazuje oba markery (bar a ATM).
- Trasa je vykreslená (polyline).
- Panel metrík zobrazuje čas a vzdialenosť (číselné hodnoty).

Skutočný výsledok:
- Bude doplnené po exekúcii testu.

Stav:
Not Executed
```

---

## Business požiadavky (BR)

1. **Cieľ aplikácie**  
   Umožniť používateľovi rýchlo nájsť najbližší bankomat k vybranému baru/podniku a zobraziť trasu pešo.

2. **Zoznam barov**  
   - Používateľ vidí prehľadný zoznam barov.  
   - Kliknutím na bar sa otvorí mapa s trasou na prislúchajúci bankomat.

3. **Mapa a navigácia**  
   - Mapa sa otvorí so zobrazením baru aj bankomatu.  
   - Zobrazí sa pešia trasa medzi nimi, vrátane odhadu vzdialenosti a času.  
   - Používateľ má možnosť otvoriť trasu priamo v Google Maps.

4. **Chybové spracovanie**  
   - Ak sa nepodarí načítať dáta (bar/ATM), aplikácia má zobraziť jasnú hlášku.  
   - Ak zlyhá Google Directions API, aplikácia použije fallback výpočet vzdialenosti a času.

5. **Používateľská skúsenosť**  
   - Aplikácia musí byť responzívna a čitateľná na mobile aj desktopoch.  

6. **Bezpečnosť a dáta**  
   - API kľúč Google Maps je obmedzený len na danú doménu.  
   


---

## Odkazy

- [Business Requirements (Markdown)](./business_requirements_list.md)
- [Smoke Test Suite (Markdown)](./smoke_test_suite.md)
- [Traceability Matrix (Markdown)](./traceability_matrix.md)

---

## Autor

**Marián Zavarský**  
GitHub: [github.com/MarZav-5](https://github.com/MarZav-5)

