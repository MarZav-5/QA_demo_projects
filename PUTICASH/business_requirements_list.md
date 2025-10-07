# Business požiadavky

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

   

