## This is unfortunately only available in Swedish at the moment.

## Test av krav #1 - Testfall 1.1 
Mål: Att verifiera att spelets regler presenteras för användaren när när spelet startar.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer.

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator och är redo att spela spelet. Som användare vill jag förstå spelets regler innan jag börjar spela det.

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Observera applikationens utdata som presenteras i konsolen.

Förväntat resultat: Applikationen ska visa spelreglerna för användaren när när spelet startar. Detta bör innehålla instruktioner om hur man spelar spelet och de alternativ som är tillgängliga för användaren.

## Test av krav #2 - Testfall 2.1 

Mål: Att verifiera att användaren kan välja ett ämne från Wikipedia att hämta ord från.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer. Datorn har tillgång till internet för att kunna skrapa Wikipedia.

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator och är redo att spela spelet.

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Tryck på tangenten "P" och sedan "Enter" för att starta spelet.
4.	Mata in "Star Wars".
5.	Tryck på "Enter".
6.	Observera applikationens utdata som presenteras i konsolen.

Förväntat resultat: Applikationen ska be om ett Wikipedia-ämne från användaren och skrapa Wikipedia sidan för att hämta ett ord baserat på användarens val för att sedan presentera antalet bokstäver i ordet för användaren. 


## Test av krav #3 - Testfall 3.1 

Mål: Att verifiera att användaren kan se antalet bokstäver i det gömda ordet.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer. Datorn har tillgång till internet för att kunna skrapa Wikipedia. 

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator och är redo att spela spelet.

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Tryck på tangenten "P" och sedan "Enter" för att starta spelet.
4.	Mata in "Star Wars".
5.	Tryck på "Enter".
6.	Räkna antalet platser för bokstäver i det gömda ordet.
7.	Mata in ”i give up”.
8.	Tryck på "Enter".
9.	Räkna antalet bokstäver i ordet som spelet presenterar.
10.	Jämför antalen.

Förväntat resultat: Applikationen ska presentera antalet bokstäver i det gömda ordet för användaren. Det ska vara samma antal bokstäver i det gömda ordet som det presenterade ordet i slutet av ett spel. 

## Test av krav #4 - Testfall 4.1 

Mål: Att verifiera att en användare kan se om hon gissat rätt bokstav på rätt plats i det gömda ordet.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer. Datorn har tillgång till internet för att kunna skrapa Wikipedia. 

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator och gissar ett ord som innehåller samma bokstav på samma plats i det gömda ordet.

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Tryck på tangenten "P" och sedan "Enter" för att starta spelet.
4.	Mata in "Star Wars".
5.	Tryck på "Enter".
6.	Gissa bokstäver tills något är på rätt plats.
7.	Mata in ”i give up”.
8.	Tryck på "Enter".
9.	Kontrollera att rätt gissad bokstav matchar med det presenterade ordet.

Förväntat resultat: Applikationen ska presentera för användaren när den gissat rätt bokstav på rätt plats. 

## Test av krav #5 - Testfall 5.1 
Mål: Att verifiera att en användare kan se om hon gissat en rätt bokstav men på fel plats.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer. Datorn har tillgång till internet för att kunna skrapa Wikipedia. 

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator och gissar ett ord som innehåller en bokstav som det gömda ordet också innehåller men på fel plats.

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Tryck på tangenten "P" och sedan "Enter" för att starta spelet.
4.	Mata in "Star Wars".
5.	Tryck på "Enter".
6.	Gissa bokstäver tills något dyker upp som ledtråd bredvid det gömda ordet
7.	Mata in ”i give up”.
8.	Tryck på "Enter".
9.	Kontrollera att gissad bokstav finns i det presenterade ordet.

Förväntat resultat: Applikationen ska presentera för användaren när den gissat rätt bokstav men på fel plats. 

## Test av krav #6 - Testfall 6.1 
Mål: Att verifiera att en användare bara kan göra en gissning med samma antal bokstäver som i det gömda ordet.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer. Datorn har tillgång till internet för att kunna skrapa Wikipedia. 

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator och gissar ett ord som innehåller fler eller mindre antal bokstäver än det gömda ordet. 

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Tryck på tangenten "P" och sedan "Enter" för att starta spelet.
4.	Mata in "Star Wars".
5.	Tryck på "Enter".
6.	Räkna antalet platser i det gömda ordet och gissa ett ord som har fler eller färre.
7.	Observera applikationens utdata som presenteras i konsolen.

Förväntat resultat: Applikationen ska presentera ett felmeddelande, inte räkna det som en giltig gissning och be om en ny gissning. 

## Test av krav #7 - Testfall 7.1 
Mål: Att verifiera att en användare kan se antalet  gissningar den gjort hittils pågående runda.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer. Datorn har tillgång till internet för att kunna skrapa Wikipedia. 

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator och gör flera gissningar under ett spel.

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Tryck på tangenten "P" och sedan "Enter" för att starta spelet.
4.	Mata in "Star Wars".
5.	Tryck på "Enter".
6.	Mata in en giltig gissning: Ett ord/serie bokstäver som innehåller samma mängd bokstäver som det gömda ordet.
7.	Tryck på "Enter".
8.	Observera att nästa gissning är gissning nummer 2. 
9.	Mata in en giltig gissning: Ett ord/serie bokstäver som innehåller samma mängd bokstäver som det gömda ordet.
10.	Tryck på "Enter".
11.	Observera att nästa gissning är gissning nummer 3. 

Förväntat resultat: Applikationen ska presentera hur många gissningar användaren har gjort.

## Test av krav #8 - Testfall 8.1 
Mål: Att verifiera att en användare kan ge upp och få reda på det gömda ordet.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer. Datorn har tillgång till internet för att kunna skrapa Wikipedia. 

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator. Användaren vill ge upp spelet och få reda på det gömda ordet. 

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Tryck på tangenten "P" och sedan "Enter" för att starta spelet.
4.	Mata in "Star Wars".
5.	Tryck på "Enter".
6.	Mata in ”i give up”
7.	Tryck på "Enter".
8.	Observera applikationens utdata som presenteras i konsolen.

Förväntat resultat: Applikationen ska presentera det gömda ordet för användaren.

## Test av krav #9 - Testfall 9.1 
Mål: Att verifiera att en användare ska få reda på när en gissning matchar det gömda ordet.

Förutsättningar: Applikationen ska vara installerad och tillgänglig för att köras på en dator med en konsol för att köra Node-applikationer. Datorn har tillgång till internet för att kunna skrapa Wikipedia. 

Användarscenario: En användare har installerat och konfigurerat applikationen på sin dator. Användaren har gissat rätt ord.

Steg-för-stegbeskrivning av test:
1.	Öppna en terminal i katalogen där applikationen är installerat.
2.	Kör kommandot ’npm start’ för att starta applikationen.
3.	Tryck på tangenten "P" och sedan "Enter" för att starta spelet.
4.	Mata in "Star Wars".
5.	Tryck på "Enter".
6.	Gissa tills gissningen är samma som det gömda ordet. 
7.	Observera applikationens utdata som presenteras i konsolen.

Förväntat resultat: Applikationen ska meddela användaren att hon gissat rätt och presentera det gömda ordet för användaren.
