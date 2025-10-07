# Smoke Test Suite

| ID  | Názov testu | PRE-REQ | Kroky | Očakávaný výsledok |
|-----|-------------|----------------|-------|--------------------|
| SM-01 | Načítanie zoznamu barov | Spustená aplikácia | Otvor index stránku | Zobrazí sa zoznam barov podľa `bars.json` |
| SM-02 | Výber baru a otvorenie mapy | Zoznam barov je načítaný | Klik na ľubovoľný bar | Zobrazí sa mapa s markerom baru a bankomatu |
| SM-03 | Zobrazenie trasy | Screen s mapou je otvorený | Vyber bar so správnym ATM | Na mape sa zobrazí trasa, v paneli sa zobrazí čas a vzdialenosť |
| SM-04 | Fallback výpočet | Google Directions API nedostupné | Vyber bar | Zobrazí sa hláška o zlyhaní API, trasa sa dopočíta odhadom |
| SM-05 | Deep link do Google Maps | Screen s mapou je otvorený | Klik na tlačidlo „Otvoriť v Google Maps“ | Otvorí sa nová karta s trasou v Google Maps |
| SM-06 | Návrat na zoznam barov | Používateľ vidí screen s mapou | Klik na tlačidlo „← späť“ | Zobrazí sa znova zoznam barov |
| SM-07 | Responsivita | Aplikácia beží v prehliadači | Otvor aplikáciu na mobilnom zariadení | Zobrazenie je čitateľné, toolbar sa prispôsobí šírke |
| SM-08 | Chyba pri načítaní dát | Stav offline alebo zmena cesty k JSON | Refresh stránky | Zobrazí sa hláška „Chyba pri načítaní dát“ |
| SM-09 | Reštrikcia API kľúča | API kľuč je rezervovaný len pre demo doménu (Netlify) | Otvor aplikáciu na inej doméne | Zlyhanie Directions, chybová hláška, fallback  |

