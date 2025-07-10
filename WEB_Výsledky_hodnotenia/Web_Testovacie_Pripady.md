# WEB Výsledky hodnotenia – Testovacie prípady

## Business požiadavky (BR)

1. Študenti si zobrazia výsledky semestrálneho testu po zadaní svojej emailovej adresy.
2. Študenti si stiahnu scan svojho semestrálneho testu.

---

## Testovací Prípad TC01 – Verifikácia existujúceho emailu – zobrazenie výsledkov

**Súvisiaca BR:** BR-1  
**Priorita:** Vysoká  

**Popis:**
- Po zadaní emailovej adresy, existujúcej v databáze sa zobrazia semestrálne výsledky študenta na ďalšej sekcii stránky, prerolovaním smerom dole.

**PRE-REQ:**  
- Email existuje v databáze  
- Stránka je načítaná

**Data:**  
- student1@example.com 
- student2@example.com

**Kroky:**  
1. Zadaj existujúci email "student1@example.com"
2. Klikni na button "Zobraz výsledky"  
3. Postup opakuj s druhým emailom "student2@example.com"

**Očakávaný výsledok:**  
- Dáta sa zobrazia na ďalšej sekcii stránky po prerolovaní smerom dole.  

**Skutočný výsledok:**  
- Dáta sú zobrazené na ďalšej sekcii stránky po prerolovaní smerom dole.  

**Stav:**  
Passed  

---

## Testovací Prípad TC02 – Verifikácia neexistujúceho emailu zobrazení chybové hlásenie

**Súvisiaca BR:** BR-1  
**Priorita:** Vysoká  

**Popis:**
- Po zadaní emailovej adresy, neexistujúcej v databáze sa zobrazí chybové hlásenie

**PRE-REQ:** 
- Stránka je načítaná

**Data:**  
- abc@43.com  

**Kroky:**  
1. Zadaj neexistujúci email v databáze "abc@43.com"  
2. Klikni na button "Zobraz výsledky"  

**Očakávaný výsledok:**  
- Zobrazí sa chybové hlásenie "Nesprávny email. Skús znova."  

**Skutočný výsledok:**  
- Zobrazil sa chybové hlásenie "Nesprávny email. Skús znova."  

**Stav:**  
Passed  

---

## Testovací Prípad TC03 – Neplatný formát emailu zobrazí chybové hlásenie
**Súvisiaca BR:** BR-1  
**Priorita:** Vysoká  

**Popis:**
- Po zadaní emailovej adresy v neplatnom formáte sa zobrazí chybové hlásenie

**PRE-REQ:** 
- Stránka je načítaná

**Data:**  
- abc@.com

**Kroky:**  
1. Zadaj do email inputu "ab@.com"
2. Klikni na button "Zobraz výsledky"  

**Očakávaný výsledok:**  
- Zobrazí sa chybové hlásenie "Nesprávny email. Skús znova."  

**Skutočný výsledok:**  
- Zobrazil sa chybové hlásenie "Nesprávny email. Skús znova."  

**Stav:**  
Passed  

---

## Testovací Prípad TC04 – Prázdny email input zobrazí chybové hlásenie

**Súvisiaca BR:** BR-1  
**Priorita:** Vysoká  

**Popis:**
- Pri ponechaní prázdneho email inputu sa po snahe zobraziť výsledky zobrazí chybové hlásenie

**Kroky:**  
1. Email input nechaj prázdny (zobrazený len placeholder)
2. Klikni na button "Zobraz výsledky"  

**Očakávaný výsledok:**  
- Zobrazí sa chybové hlásenie "Prosím zadaj email."  

**Skutočný výsledok:**  
- Zobrazil sa chybové hlásenie "Prosím zadaj email."  

**Stav:**  
Passed  

---

## Testovací Prípad TC05 – Scan testu sa stiahne po kliknutí na hypertext

**Súvisiaca BR:** BR-2  
**Priorita:** Vysoká  

**Popis:**
- Po úspešnej verifikácií emailovej adresy a zobrazení výsledkov na ďalšej sekcii stránky si študent môže stiahnuť svoj semestrálny test kliknutím na hypertext "Stiahni".

**PRE-REQ:**  
- Email existuje v databáze
- Stránka je načítaná

**Data:**  
- student1@example.com
- student2@example.com  

**Kroky:**  
1. Zadaj existujúci email v databáze  
2. Klikni na button "Zobraz výsledky"  
3. Klikni na hypertext "Stiahni" pri riadku "Scan môjho testu"  

**Očakávaný výsledok:**  
- V browseri začne sťahovanie súboru  

**Skutočný výsledok:**  
- V browseri sa začalo sťahovanie súboru  

**Stav:**  
Passed  
