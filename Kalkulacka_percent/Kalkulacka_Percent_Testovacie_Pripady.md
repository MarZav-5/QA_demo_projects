# Kalkulačka Percent – Testovacie prípady

## Business požiadavky (BR)

1. Kalkulačka správne vypočíta percento podielu (Part / Whole).
2. Kalkulačká správne počíta so zápornými číslami
3. Pri nečíselných vstupoch sa zobrazí chybové hlásenie.
4. Pri delení nulou sa zobrazí chybové hlásenie.
5. Prázdne vstupné polia spôsobia chybové hlásenie.
6. Výsledok má byť zaokrúhlený na max. 2 desatinné miesta.

---

## Testovací Prípad TC01 – Výpočet percenta z dvoch celých čísiel

**Súvisiaca BR:** BR-1  
**Priorita:** Vysoká  

**PRE-REQ:**  
- Webová aplikácia kalkulačky je otvorená v prehliadači  

**Data:**
- https://percentage-calculator-2.netlify.app/
- Part: 50
- Whole: 200

**Kroky:**  
1. Do poľa "Part" zadaj hodnotu 50  
2. Do poľa "Whole" zadaj hodnotu 200  
3. Klikni na tlačidlo "Calculate"

**Očakávaný výsledok:**  
- Zobrazí sa výsledok "25%"

**Skutočný výsledok:**  
- Zobrazí sa správny výsledok "25%"

**Stav:**  
Passed

**Príloha [JIRA / Xray]:**

![Screenshot: Jira Test Case TC01](./screenshots/jira/ss_KALK_TC01_Jira.png)


---

## Testovací Prípad TC02 – Výpočet so zápornými číslami

**Súvisiaca BR:** BR-2  
**Priorita:** Stredná  

**PRE-REQ:**  
- Webová aplikácia kalkulačky je otvorená v prehliadači  

**Data:**
- https://percentage-calculator-2.netlify.app/
- Part: -20
- Whole: -50

**Kroky:**  
1. Do poľa "Part" zadaj hodnotu -20  
2. Do poľa "Whole" zadaj hodnotu -50  
3. Klikni na tlačidlo "Calculate“

**Očakávaný výsledok:**  
- Zobrazí sa výsledok "40%"

**Skutočný výsledok:**  
- Zobrazil sa správny výsledok "40%"

**Stav:**  
Passed

---

## Testovací Prípad TC03 – Výpočet s nečíselnými vstupmi

**Súvisiaca BR:** BR-3  
**Priorita:** Stredná  

**PRE-REQ:**  
- Webová aplikácia kalkulačky je otvorená v prehliadači  

**Data:**
- https://percentage-calculator-2.netlify.app/
- Part: abc
- Whole: #

**Kroky:**  
1. Do poľa "Part" zadaj text "#_" 
2. Do poľa "Whole" zadaj znak "ab"  
3. Klikni na tlačidlo "Calculate“

**Očakávaný výsledok:**  
- Zobrazí sa chybové hlásenie "Prosím, zadajte číselné hodnoty"

**Skutočný výsledok:**  
- Zobrazí sa "NaN%"

**Stav:**  
Failed

**Referencia na bug:**  

[BUG – Kalkulačka zobrazuje "NaN%" pri nečíselných vstupoch](./Kalkulacka_Percent_Bug_Report.md#bug-kalkulačka-zobrazuje-nan-pri-nečíselných-vstupoch)

---

## Testovací Prípad TC04 – Delenie nulou

**Súvisiaca BR:** BR-4
**Priorita:** Vysoká  

**PRE-REQ:**  
- Webová aplikácia kalkulačky je otvorená v prehliadači  

**Data:**
- https://percentage-calculator-2.netlify.app/
- Part: 10
- Whole: 0

**Kroky:**  
1. Do poľa "Part" zadaj číslo 10  
2. Do poľa "Whole" zadaj číslo 0  
3. Klikni na tlačidlo "Calculate"

**Očakávaný výsledok:**  
- Zobrazí sa hlásenie "Delenie nulou nie je možné"

**Skutočný výsledok:**  
- Zobrazí sa "Infinity%"

**Stav:**  
Failed

**Referencia na bug:**  

[BUG: Infinity% pri delení nulou](./Kalkulacka_Percent_Bug_Report.md#bug--pri-delení-nulou-sa-zobrazuje-infinity-namiesto-chybového-hlásenia)

---

## Testovací Prípad TC05 – Výpočet s prázdnymi vstupmi

**Súvisiaca BR:** BR-5
**Priorita:** Stredná  

**PRE-REQ:**  
- Webová aplikácia kalkulačky je otvorená v prehliadači  

**Data:**
- https://percentage-calculator-2.netlify.app/

**Kroky:**  
1. Nezadaj žiadnu hodnotu do polí "Part“ a "Whole"
2. Klikni na tlačidlo "Calculate"

**Očakávaný výsledok:**  
- Zobrazí sa hlásenie "Vyplňte prosím všetky polia"

**Skutočný výsledok:**  
- Zobrazí sa "NaN%"

**Stav:**  
Failed

**Referencia na bug:**  

[BUG: NaN% pri prázdnych vstupoch](./Kalkulacka_Percent_Bug_Report.md#bug--kalkulačka-zobrazuje-nan-pri-prázdnych-vstupoch)

---

## Testovací Prípad TC06 – Zaokrúhlenie výsledku

**Súvisiaca BR:** BR-6
**Priorita:** Nízka  

**PRE-REQ:**  
- Webová aplikácia kalkulačky je otvorená v prehliadači  

**Data:**
- https://percentage-calculator-2.netlify.app/
- Part: 3
- Whole: 9

**Kroky:**  
1. Do poľa "Part" zadaj hodnotu 3  
2. Do poľa "Whole" zadaj hodnotu 9  
3. Klikni na tlačidlo "Calculate'

**Očakávaný výsledok:**  
- Zobrazí sa "33.33%"

**Skutočný výsledok:**  
- Zobrazí sa "33.33333333333333%"

**Stav:**  
Failed

**Referencia na bug:**  

[BUG: Príliš veľa desatinných miest](./Kalkulacka_Percent_Bug_Report.md#bug--príliš-veľa-desatinných-miest-vo-výsledku)

**Príloha [JIRA / Xray]:**

![Screenshot: Jira Test Case TC06](./screenshots/jira/ss_KALK_TC06_Jira.png)