
## Future development

I will **not** continue to develop this project, but if you are interested in continuing to add features to the game or fix bugs, please follow these steps:

1. Fork the repository to your own GitHub account
2. Clone the repository to your local machine
3. Create a new branch for your changes
4. Make your changes, test and commit changes to your branch
5. Push your changes to your fork

6. You can now submit a pull request to the main repository (although I will probably not merge it as I am not actively developing this project anymore).

## Dependencies
This project relies on the `Multi-Scraper` module, which can be [found on GitHub](https://github.com/amanda-mollestal/multi-scraper). It is important to ensure that this dependency is properly installed for the project to function properly.

---

## This next part is unfortunately only available in Swedish at the moment.

## Vision

Visionen för detta projekt var att skapa ett roligt och lärorikt spel som låter användare testa sina kunskaper och ordförråd genom att gissa ett slumpmässigt valt ord från Wikipedia. Spelet syftar till att ge en interaktiv och engagerande upplevelse för användare samtidigt som det hjälper dem att utveckla sitt ordförråd och sin stavningsförmåga.

## Krav
#1. En användare ska presenteras med regler när spelet startar.

#2. En användare ska kunna välja ett ämne från Wikipedia att hämta ord från.

#3. En användare ska få se hur många bokstäver ordet innehåller. 

#4. En användare ska få se om den har gissat rätt bokstav på rätt plats i det gömda ordet.

#5. En användare ska få se om den har gissat rätt bokstav men på fel plats.

#6. En användare ska bara kunna gissa på ett ord med samma antal bokstäver som i det gömda ordet.

#7. En användare ska kunna se hur många gissningar den gjort hittils pågående runda.

#8. En användare ska kunna ge upp och få reda på det gömda ordet.

#9. En användare ska få reda på att de vunnit när en gissning matchar det gömda ordet.

## Status på projektet
Projektet är för närvarande i ett stabilt tillstånd, där alla funktionella krav har implementerats och har klarat sina respektive testfall. Se [test rapport](#test-rapport---utförda-16/12-2022) för mer information.

Det finns dock alltid utrymme för förbättringar och nya funktioner som kan läggas till i framtiden t.ex. om användaren vill spara sitt resultat och se sina bästa resultat eller om användaren vill välja mellan olika svårighetsgrader.


## Tester
Projektets krav har testats med [manuella tester](TEST-CASES.md) som beskrivs i filen TEST-CASES.md. Dessa testfall täcker en rad scenarier och säkerställer att spelet fungerar korrekt och uppfyller kraven.

## Test rapport -> utförda 16/12-2022

| Vad som testas  | Hur det testas                                             | Status             |
|-----------------|------------------------------------------------------------|--------------------|
| Krav #1         | [Testfall 1.1](TEST-CASES.md#test-av-krav-1---testfall-11) | :white_check_mark: |
| Krav #2         | [Testfall 2.1](TEST-CASES.md#test-av-krav-2---testfall-21) | :white_check_mark: |
| Krav #3         | [Testfall 3.1](TEST-CASES.md#test-av-krav-3---testfall-31) | :white_check_mark: |
| Krav #4         | [Testfall 4.1](TEST-CASES.md#test-av-krav-4---testfall-41) | :white_check_mark: |
| Krav #5         | [Testfall 5.1](TEST-CASES.md#test-av-krav-5---testfall-51) | :white_check_mark: |
| Krav #6         | [Testfall 6.1](TEST-CASES.md#test-av-krav-6---testfall-61) | :white_check_mark: |
| Krav #7         | [Testfall 7.1](TEST-CASES.md#test-av-krav-7---testfall-71) | :white_check_mark: |
| Krav #8         | [Testfall 8.1](TEST-CASES.md#test-av-krav-8---testfall-81) | :white_check_mark: |
| Krav #9         | [Testfall 9.1](TEST-CASES.md#test-av-krav-9---testfall-91) | :white_check_mark: | 


