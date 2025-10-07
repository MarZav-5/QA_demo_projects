# Traceability Matrix (BR + Smoke testy)

| BR ID | Názov/Obsah požiadavky | Smoke test | Coverage |
|------|-------------------------|--------------------|----------------------|
| **BR-01** | **Cieľ aplikácie** – nájsť najbližší ATM k baru a zobraziť trasu pešo. | SM-02, SM-03, SM-05 | Cieľ je pokrytý výberom baru→mapa, zobrazením trasy a deeplinkom do Google Maps. |
| **BR-02** | **Zoznam barov** – prehľadný zoznam; kliknutím na bar sa otvorí mapa s trasou. | SM-01, SM-02, SM-06 | SM-01 validuje načítanie zoznamu; SM-02 prechod na mapu; SM-06 návrat späť na zoznam. |
| **BR-03** | **Mapa a navigácia** – zobraziť bar+ATM na mape, trasu, vzdialenosť a čas; možnosť otvoriť v Google Maps. | SM-02, SM-03, SM-05 | Markery a mapa (SM-02), metriky trasy (SM-03), deeplink (SM-05). |
| **BR-04** | **Chybové spracovanie** – hláška pri chybe dát; ak zlyhá Directions, použiť fallback. | SM-04, SM-08 | SM-04 pokrýva zlyhanie Directions → fallback; SM-08 pokrýva chybu načítania dát (JSON/offline). |
| **BR-05** | **Používateľská skúsenosť** – responzívne a čitateľné na mobile/desktope. | SM-07 | Overenie responzivity|
| **BR-06** | **Bezpečnosť API** – API kľúč obmedzený na demo doménu |SM-09|Pokus o použitie na inej doméne, API kľuč rezervovaný len pre demo doménu

---


