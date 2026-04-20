# CI/CD Inlämningsuppgift

## Projektet
En enkel webbapp byggd med Vite som räknar ut lön efter skatt.

## Funktion
Användaren matar in:
- bruttolön
- skatt (procent)

Så räknar appen ut personens nettolön.

## Enhetstester
Jag har skrivit enhetstester med Vitest för funktionen `salaryAfterTax` som testar att matematiken stämmer.
Den testar att funktionen korrekt beräknar nettolön baserat på bruttolön och skattesats. 

Till exempel att 10000 med 30% skatt ger 7000, och att 0% skatt ger full lön.

## CI/CD
GitHub Actions används för att automatisera arbetsflödet:
- installera dependencies
- köra enhetstester (Vitest)
- bygga projektet med Vite
- deploya automatiskt till GitHub Pages

## Live sidan
https://ViktorMelander.github.io/CI-CD-inl-mningsuppgift/
