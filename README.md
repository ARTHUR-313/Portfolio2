# Portfolio – Arthur Lavigne

Site statique (HTML/CSS/JS), prêt pour GitHub Pages.

## Structure
- `index.html`, `competences.html`, `projets.html`, `formation.html`, `contact.html` : pages principales
- `competence.html?id=…` et `projet.html?id=…` : pages de détail (générées depuis les données)
- `js/data.js` : **tout le contenu** (textes, projets, compétences, formations, e-mail, liens)
- `js/main.js` : génération des pages (menu, pied de page, cartes)
- `css/style.css` : style (couleurs = variables en haut du fichier)
- `img/` (photo), `img/projets/` (captures), `assets/cv.pdf`

## Ajouter un projet
1. Ouvre `js/data.js`, copie un bloc de `PROJETS`, change l'`id`, les textes et `comps`.
2. Ajoute cet `id` dans la liste `projets` des compétences concernées.
3. Mets une capture dans `img/projets/` et renseigne `img: "img/projets/mon-projet.jpg"`.
