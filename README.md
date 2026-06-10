# Portfolio Lars Mudde

Dit is de portfolio-website van Lars Mudde. De site is volledig herschreven naar een schone, modulaire, statische HTML, CSS en JavaScript structuur. Er zijn geen dependencies, frameworks of build tools nodig om deze website te bekijken of te bewerken.

## Project Structuur

```
/
├── index.html          # Hoofdpagina (semantische HTML5)
├── assets/             # Statische bestanden (afbeeldingen, lettertypen, etc.)
│   ├── images/
│   ├── icons/
│   └── fonts/
├── css/                # CSS Stijlen
│   ├── styles.css      # Hoofdstijlblad (importeert de andere stylesheets)
│   ├── variables.css   # Kleurentokens en variabelen
│   ├── animations.css  # CSS keyframes en reveal effecten
│   └── responsive.css  # Media queries voor alle apparaten
├── js/                 # JavaScript Logica
│   ├── main.js         # Entrypoint (initialiseert alle modules)
│   ├── navigation.js   # Navigatie scroll-effect en mobiel hamburger-menu
│   ├── animations.js   # Scroll reveal via IntersectionObserver
│   ├── smooth-scroll.js# Soepel scrollen naar ankerlinks
│   ├── projects.js     # Projecten render-logica
│   └── journey.js      # Tijdlijn render-logica
├── data/               # Project- en Tijdlijninhoud
│   ├── projects.js     # Database van projecten (makkelijk aan te passen)
│   ├── skills.js       # Vaardigheden tags
│   └── education.js    # Tijdlijn mijlpalen
├── guidelines/         # Ontwerprichtlijnen
│   └── Guidelines.md
├── ATTRIBUTIONS.md     # Licenties en bronnen (Unsplash, etc.)
└── README.md           # Dit document
```

## Inhoud bewerken

Het bewerken van de getoonde projecten, vaardigheden of tijdlijn kan direct in de JavaScript-bestanden in de map `/data` gebeuren:

- **Projecten toevoegen/aanpassen**: Open `data/projects.js` en voeg een nieuw projectobject toe aan de `projectsData` array.
- **Tijdlijn aanpassen**: Open `data/education.js` en bewerk of voeg mijlpalen toe aan de `educationData` array.
- **Vaardigheden tags bewerken**: Open `data/skills.js` en pas de strings in de `skillsData` array aan.

## Lokaal bekijken

Aangezien dit een pure statische website is, kun je deze op verschillende eenvoudige manieren bekijken:

1. **Direct openen**: Dubbelklik op `index.html` om de site direct in je browser te openen vanaf je harde schijf.
2. **VS Code Live Server**: Als je VS Code gebruikt, installeer de "Live Server" extensie en klik op "Go Live" rechtsonder.
3. **Lokale Python-server**: Open een terminal in de projectmap en voer uit:
   ```bash
   python -m http.server 8000
   ```
   Open vervolgens `http://localhost:8000` in je browser.