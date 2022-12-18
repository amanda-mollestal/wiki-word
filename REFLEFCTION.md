## Reflection

### Kapitel 2 – Meningsfulla namn

Hur har detta kapitel och dess innehåll påverkat koden i mitt projekt? 
Under utvecklingen av min kod så har jag kontinuerligt haft i åtanke att min namngivning ska vara beskrivande och att namnet tydligt ska klargöra klassen, metodens eller variabelns syfte och funktion (Use intention-revealing names). Jag har byggt projektet med en model-view-controller arkitektur och har utifrån det två model-klasser namngivna Game och WordGetter, en view-klass namngiven Console och en controller-klass med namnet Game då den hanterar exekveringen av spelscenariot med en vy. När jag i controllern och viewn tar emot Game modellen som en parameter så ger jag den namnet gameModel för att lägga till meningsfull kontext och göra skillnaderna på de olika klasserna tydliga (Add meaningful context och make meaningful distinctions). Ett annat exempel på hur jag fått med meningsfull kontext i namngivning är variabeln wordHints, som i stället för att bara heta hints innehåller kontext i form av ordet word för att underlätta förståelsen av sammanhanget.

Mina metodnamn playRound och displayRules är tydliga exempel på hur jag följt principen att metodnamn ska vara verbfraser som tydligt beskriver vad metoden utför.

### Kapitel 3 – Funktioner

Jag har verkligen försökt se till att alla mina metoder följer principerna från detta kapitel genom att se till att dem har en specifik och väldefinierad uppgift, är så små dem bara kan, tar emot inga eller endast ett argument och att dem är så enkla att förstå som möjligt. Exempel på hur jag har använt dessa principer är att mina funktioner har som mest ett argument men majoriteten av de har inga alls och min absolut längsta funktion är fortfarande rätt liten med sina 30 rader. Mina funktioner har ett syfte och utför det i så få rader kod som möjligt.

Jag tycker att jag följer de principer som boken tagit upp och att mina funktioner är lätta att förstå med tydligt beskrivande namn och en välorganiserad struktur.

### Kapitel 4 – Kommentarer 

Jag var lite fundersam över hur jag skulle tänka kring dokumentationskommentarer och landade i att det inte borde skada så länge jag följer de principer som boken tar upp om kommentarer i övrigt.
Jag har sett till att inte använda mig av radkommentarer då det i de flesta fallen inte är nödvändiga och hade kunnat undvikas genom att skriva koden tydligare med högre läsbarhet så att den blir självförklarande och då de ofta blir vilseledande med tiden som går. Jag har fokuserat på att använda mig av koden i sig och dess tydlighet för att förklara så mycket som möjligt i stället för att använda mig av kommentarer. 

### Kapitel 5 – Formatering  

Jag vet att detta är ett viktigt kapitel då jag själv sett felformaterad kod och upplevt svårigheter med att läsa och förstå koden. För att följa bokens principer gällande formatering och underlätta för andra utvecklare så har jag sett till att vara konsekvent med min formatering och följt de JavaScript konventioner som vi lärt oss är best practice. Jag har bland annat använt mig vertical space, dvs tomma rader inuti funktioner för att visa på logiska avbrott i koden och min största klass är bara totalt 200 rader kod. 

### Kapitel 6 – Objekt och datastrukturer

För att följa de principer som boken tagit upp i detta kapitel så har jag gjort alla variabler som kan vara privata till privata och strukturerat min kod på ett meningsfullt sätt där tillhörande funktioner är grupperade tillsammans. Ett annat exempel på hur jag har använt bokens principer för att utveckla min kod är att jag använt composition over inheritance i min Game model klass som skapar en instans av WordGetter klassen i sin konstruktor. Jag har strukturerat min kod på ett enkelt sätt för att undvika onödig komplexitet så som onödiga getters and setters och kodduplicering. 

Min kod är uppbyggd med en model-view-controller arkitektur för att separera spellogiken (controllern), logiken som hanterar data och skrapar Wikipedia för ord (modellen) och logiken som ansvarar för att visa spelinformation och ta emot användarinput (viewn).  

### Kapitel 7 – Felhantering

Jag följer de principer som boken tar upp i detta avsnitt som gått att följa, jag ser till att alltid hantera undantagen jag kastar och att alltid kasta relevanta typer av fel. Jag ger aldrig null som ett argument och mina funktioner returnerar heller aldrig null. Jag kastar det egenskapade felet InvalidTagError när något fel uppstår med arrayn av <p> taggar som jag skrapat från Wikipedia.

### Kapitel 8 – Gränser

Jag tyckte det var väldigt svårt att förhålla sig till de principer boken tar upp i detta kapitel då jag inte riktigt använt mig av något externt bibliotek eller så utöver den skrapmodul jag utvecklade för L1, men jag försökte genom att skapa ett interface för min skrapa som jag gav namnet WordGetter. I klassen WordGetter så skapade jag de funktioner som behöver tillgång till funktionaliteten hos skrapan och funktioner som använder sig av datan skrapan returnerat för att generera ett ord att gissa på. Ett exempel på detta är funktionen getWordsFromTags som går över de tags skrapan returnerat och returnerar en array med ord från tagsen. 

Jag valde även att utveckla detta projekt med arkitekturen model-view-controller vilket har underlättat arbetet med tydliga gränser inom applikationen. 

### Kapitel 9 – Test

Även här tyckte jag det var svårt att förhålla mig till vissa av principerna boken tar upp då jag använt mig av manuella tester men de som gått har jag haft i åtanke när jag skapade mina tester. Jag har försökt att göra mina test så lätta som möjligt att förstå och exekvera och jag har sett till att varenda en av mina projektkrav har ett test som gör det lätt att verifiera om kravet är uppfyllt eller inte.

### Kapitel 10 – Klasser

Jag tycker att alla av bokens riktlinjer för klasser känns meningsfulla och relevanta så jag har därför försökt att använda mig de så mycket som möjligt i skapandet av klasser. Jag har försökt att använda inkapsling i så stor utsträckning som möjligt för att göra klasserna lättare att underhålla och även sett till att tillhörande data och beteende är i samma klass. Namnen på mina klasser tycker jag följer principen om att klassnamn ska på ett korrekt sätt beskriva de ansvar klassen är ålagd. 

### Kapitel 11 – System

I koden för mitt spel så använder jag mig av principen separation of concerns genom till exempel att separera på logiken som hanterar användarinput och logiken som ansvarar över flödet i spelet. Jag använder mig av abstraktioner (WordGetter interface:t) vilket förbättrar kodens flexibilitet och underhållbarhet. Ett annat exempel på hur jag använt detta kapitlets principer i min kod är att min controller följer the Law of Demeter genom att den endast kallar på funktioner av dependencies den fått, som när controllern kallar på funktionerna displayWelcome och displayRules på viewn.

-----------------------------------------------------------------

Jag har verkligen försökt så mycket jag bara kan att se till så att min kod följer de principer som boken uppgett men jag måste erkänna att det har varit rätt utmanande och svårt att tänka på så mycket hela tiden. 
