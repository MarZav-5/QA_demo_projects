
# Snake Game – Testovacie prípady

## Business požiadavky (BR)

1. Had sa po konzumácii jedla zväčší.
2. Rýchlosť hada sa postupne zvyšuje s počtom skonzumovaného jedla.
3. Hráč stratí 1 život, ak had narazí do seba.
4. Hráč stratí 1 život, ak had narazí do okraja hernej plochy.
5. Po strate života sa veľkosť hada vráti na počiatočnú dĺžku.

---

## Testovací prípad TC01 – Had sa po konzumácii jedla zväčší

**Súvisiaca BR:** BR-1  
**Priorita:** Vysoká  

**PRE-REQ:**  
- Herná stránka je otvorená v prehliadači  
- Hra je spustená a beží  

**Kroky:**  
1. Naviguj hada k jedlu  
2. Nechaj hada zjesť jedlo  

**Očakávaný výsledok:**  
- Had by sa mal zväčšiť o jeden blok  

**Skutočný výsledok:**  
- Had sa po konzumácii jedla zväčšil o jeden blok

**Stav:**  
Passed

---

## Testovací Prípad TC02 – Rýchlosť hada sa postupne zvyšuje s počtom skonzumovaného jedla.

**Súvisiaca BR:** BR-2  
**Priorita:** Stredná  

**PRE-REQ:**  
- Herná stránka je otvorená v prehliadači  
- Hra je spustená a beží  

**Kroky:**  
1. Naviguj hada k jedlu a nechaj ho zjesť  
2. Opakuj krok 1 viackrát (aspoň 5–10x)  
3. Sleduj rýchlosť hada po každom skonzumovanom jedle  

**Očakávaný výsledok:**  
- Konzumáciou jedla by sa mala rýchlosť hada postupne zvyšovať  

**Skutočný výsledok:**  
- Rýchlosť hada sa konzumáciou jedla nezvyšuje 

**Referencia na bug:**  
[BUG_TC02 – Rýchlosť hada sa nezvyšuje](./Bug_Report.md#bug_tc02--rýchlosť-hada-sa-nezvyšuje-po-konzumácii-jedla)

**Stav:**  
Failed

---

## Testovací Prípad TC03 – Hráč stratí život, keď had narazí do seba

**Súvisiaca BR:** BR-3  
**Priorita:** Vysoká  

**PRE-REQ:** 
- Herná stránka je otvorená v prehliadači  
- Hra je spustená a beží  

**Kroky:**  
1. Naviguj hada tak, aby hlavou narazil do vlastného tela  

**Očakávaný výsledok:**  
- Hráčovi by sa mal odpočítať jeden život  

**Skutočný výsledok:**  
- Po narazení do vlastného tela sa hráčovi odpočíta 1 život 

**Stav:**  
Passed

---

## Testovací Prípad TC04 – Hráč stratí život, keď had narazí do okraja hernej plochy

**Súvisiaca BR:** BR-4  
**Priorita:** Vysoká  

**PRE-REQ:**  
- Herná stránka je otvorená v prehliadači  
- Hra je spustená a beží  

**Kroky:**  
1. Naviguj hada priamo k okraju hernej plochy  

**Očakávaný výsledok:**  
- Hráčovi by sa mal odpočítať jeden život  

**Skutočný výsledok:**  
- Hráčovi sa odpočítajú všetky životy a hra sa končí 

**Referencia na bug:**  
[BUG_TC04 – Hráč stratí všetky životy](./Bug_Report.md#bug_tc04--hráč-stratí-všetky-životy-po-kolízii-s-okrajom-hernej-plochy)

**Stav:**  
Failed

---

## Testovací Prípad TC05 – Had sa po strate života resetuje na pôvodnú veľkosť

**Súvisiaca BR:** BR-5  
**Priorita:** Vysoká  

**PRE-REQ:**  
- Herná stránka je otvorená v prehliadači  
- Hra je spustená a beží  
- Had už narástol po konzumácii jedla  

**Kroky:**  
1. Naviguj hada tak, aby narazil do seba alebo do okraja  
2. Sleduj veľkosť hada po strate 1 života  

**Očakávaný výsledok:**  
- Had by sa mal vrátiť na počiatočnú dĺžku

**Skutočný výsledok:**  
- Had sa nevráti na počiatočnú dĺžku, pokračuje v už nadobudnutej

**Referencia na bug:**   
[BUG_TC05 – Had sa nevráti do pôvodnej veľkosti](./Bug_Report.md#bug_tc05--had-sa-po-strate-života-nevráti-do-pôvodnej-veľkosti)

**Stav:**  
Failed

**Príloha:**
![Screenshot: Jira Test Case TC05](./screenshots/ss_Snake_Game_TC05_Jira.png)
