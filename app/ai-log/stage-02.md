# AI Log - Stage 2: Vite și JavaScript modern

## Tool used
Gemini

## Prompts used
1. "Am acest laborator la tehnologii web. Explica-mi tot ce e de explicat si ajuta-ma sa rezolv exercitiile de la final, cu toate explicatiile necesare"
2. "cum realizezi conexiunea intre folderul de pe vscode si git pentru a putea scrie comenzile direct in terminalul de pe vscode?"
3. "explica mi ce trebuie sa fac pas cu pas ca sa scap de aceste erori" (pentru erorile de tip *Identifier has already been declared* din main.jsx)

## Changes made manually
- Am creat proiectul cu Vite folosind terminalul din VS Code și am selectat manual opțiunile (framework-ul React și varianta JavaScript) din linia de comandă[cite: 9, 10].
- Am curățat structura fișierelor (am șters folderul `src/assets`, am golit `App.css` și `index.css`, și am configurat `App.jsx`)[cite: 10].
- Am scris și organizat manual fișierele de date (`src/data/destinatii.js`)[cite: 24], logica de prelucrare cu metode pe liste (`src/utils/destinatii.js`)[cite: 24] și cererile asincrone către API-ul public (`src/api/orase.js`)[cite: 27].
- Am corectat manual importurile duplicate din fișierul `src/main.jsx` pentru a elimina conflictele de declarare și am testat funcționalitatea urmărind rezultatele în consola browserului (`F12`)[cite: 8, 11].