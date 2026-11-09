/* Génère l'en-tête, le pied de page et le contenu de chaque page
   à partir de js/data.js. Le contenu de chaque page est dans PAGES. */
const C = id => COMPETENCES.find(c => c.id === id);
const P = id => PROJETS.find(p => p.id === id);
const qid = new URLSearchParams(location.search).get("id");
const num = i => String(i + 1).padStart(2, "0");
const thumb = (o, i) => `<div class="thumb"><span class="num">${num(i)}</span>${o.img ? `<img src="${o.img}" alt="Illustration : ${o.titre}" loading="lazy" onerror="this.remove()">` : ""}</div>`;
const tags = (arr, fn) => `<div class="tags">${arr.map(fn).join("")}</div>`;
const cCard = (c, i) => `<a class="card rv" href="competence.html?id=${c.id}">${thumb(c, i)}<div class="cb"><h3>${c.titre}</h3><p>${c.resume}</p><span class="more">Voir la progression</span></div></a>`;
const pCard = (p, i) => `<a class="card rv" href="projet.html?id=${p.id}">${thumb(p, i)}<div class="cb"><div class="eyebrow" style="font-size:.75rem;margin-bottom:8px">${p.type} · ${p.periode}</div><h3>${p.titre}</h3><p>${p.besoin}</p>${tags(p.tech, t => `<span class="tag">${t}</span>`)}<span class="more">Découvrir le projet</span></div></a>`;
const head = (t, s, crumb) => `<div class="pagehead"><div class="crumb"><a href="index.html">Accueil</a> › ${crumb || t}</div><h1>${t}</h1><p>${s}</p></div>`;
const cta = `<div class="cta rv"><h2>Un stage ou une alternance à proposer ?</h2><a class="btn cut" href="contact.html">Me contacter <span class="ch">›</span></a><a class="btn ghost" href="${SITE.cv}" target="_blank" rel="noopener">Voir mon CV</a></div>`;

const PAGES = {
  index: () => `
  <section class="hero">
    <canvas id="stars"></canvas><div class="planet"></div>
    <div class="hero-photo"><img src="${SITE.photo}" alt="Portrait de ${SITE.nom}"></div>
    <div class="hero-in">
      <div class="eyebrow">${SITE.titre} · ${SITE.lieu}</div>
      <h1>${SITE.nom}</h1>
      <h2>${SITE.recherche}</h2>
      <a class="btn" href="projets.html"><span class="ch">›</span> Voir mes projets</a>
      <a class="btn ghost" style="margin-left:14px" href="${SITE.cv}" target="_blank" rel="noopener">Mon CV</a>
    </div>
    <div class="strip">
      ${[["Compétences", "competences.html", "01"], ["Projets", "projets.html", "02"], ["Poursuite d’études", "formation.html", "03"], ["CV", "contact.html#cv", "04"], ["Contact", "contact.html#contact", "05"]].map(l => `<a href="${l[1]}"><span class="t">${l[2]}</span>${l[0]}</a>`).join("")}
    </div>
  </section>
  <section class="wrap about">
    <div class="ph rv"><img src="${SITE.photo}" alt="${SITE.nom}"></div>
    <div class="rv"><div class="eyebrow">À propos</div><h2 class="st">Développeur en devenir</h2>
      <p>Étudiant en 3<sup>e</sup> année d’informatique à l’IUT de Blagnac, je conçois des applications, des bases de données et des outils, toujours en équipe. Mon stage chez Bull dans le calcul haute performance m’a confirmé mon goût pour les environnements techniques exigeants.</p>
      <div class="facts"><div><b>${PROJETS.length}</b><span>Projets</span></div><div><b>${COMPETENCES.length}</b><span>Compétences</span></div><div><b>Bac+5</b><span>Objectif</span></div></div>
      <a class="btn sm" href="formation.html">Mon projet d’études <span class="ch">›</span></a></div>
  </section>
  <section class="wrap"><div class="eyebrow">Réalisations</div><h2 class="st">Projets</h2><div class="grid">${PROJETS.map(pCard).join("")}</div></section>
  <section class="wrap"><div class="eyebrow">Savoir-faire</div><h2 class="st">Compétences</h2><div class="grid">${COMPETENCES.map(cCard).join("")}</div></section>${cta}`,

  competences: () => head("Compétences", "Ce que je sais faire, comment j’ai progressé depuis la première année, et les projets qui le prouvent.") +
    `<section class="wrap" style="padding-top:70px"><div class="grid">${COMPETENCES.map(cCard).join("")}</div></section>${cta}`,

  projets: () => head("Projets", "Réalisations en équipe et en entreprise. Chaque projet renvoie vers les compétences qu’il a mobilisées.") +
    `<section class="wrap" style="padding-top:70px"><div class="grid">${PROJETS.map(pCard).join("")}</div></section>${cta}`,

  competence: () => {
    const c = C(qid) || COMPETENCES[0], i = COMPETENCES.indexOf(c);
    return head(c.titre, c.resume, `<a href="competences.html">Compétences</a> › ${c.titre}`) + `<section class="wrap" style="padding-top:70px">
    <div class="evo rv"><div><h3>Au début</h3><p>${c.debut}</p></div><div><h3>Aujourd’hui</h3><p>${c.maintenant}</p></div></div>
    <div class="evo rv"><div><h3>Ce que ça apporte à une entreprise</h3><p>${c.apport}</p></div><div style="border-color:var(--line);box-shadow:none"><h3>Outils</h3>${tags(c.outils, t => `<span class="tag">${t}</span>`)}</div></div>
    <h2 class="st rv" style="margin-top:60px">Projets qui le prouvent</h2><div class="grid">${c.projets.map(id => pCard(P(id), PROJETS.indexOf(P(id)))).join("")}</div></section>${cta}`;
  },

  projet: () => {
    const p = P(qid) || PROJETS[0];
    return head(p.titre, `${p.type} · ${p.periode} · ${p.equipe}`, `<a href="projets.html">Projets</a> › ${p.titre}`) + `<section class="wrap" style="padding-top:70px"><div class="cols">
    <div>${thumb(p, PROJETS.indexOf(p)).replace('class="thumb"', 'class="thumb" style="height:320px;margin-bottom:44px"')}
      ${[["Contexte", p.contexte], ["Besoin", p.besoin], ["Solution", p.solution], ["Résultat", p.resultat]].map(s => `<div class="step rv"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}
      ${p.lien ? `<a class="btn sm" href="${p.lien}" target="_blank" rel="noopener">Voir le code sur GitHub <span class="ch">›</span></a>` : ""}</div>
    <aside class="side"><h3>Technologies</h3>${tags(p.tech, t => `<span class="tag">${t}</span>`)}<h3>Compétences mobilisées</h3>${tags(p.comps, id => `<a class="tag" href="competence.html?id=${id}">${C(id).titre}</a>`)}</aside></div></section>${cta}`;
  },

  formation: () => head("Poursuite d’études", "Mon objectif : un Bac+5 en ingénierie logicielle et DevOps, de préférence en alternance, pour devenir ingénieur développement, DevOps ou systèmes embarqués.") +
    `<section class="wrap" style="padding-top:70px"><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(420px,1fr))">${FORMATIONS.map(f => `<div class="fcard rv"><h2>${f.titre}</h2><div class="sch">${f.ecole}</div><h3>Au programme</h3><ul>${f.contenu.map(x => `<li>${x}</li>`).join("")}</ul><h3>Mes atouts</h3><p>${f.atouts}</p><h3>Débouchés</h3><p>${f.debouches}</p><h3>Admission</h3><p>${f.entree}</p></div>`).join("")}</div></section>${cta}`,

  contact: () => head("CV & Contact", "Mon CV à jour et un moyen simple de me joindre.") + `
    <section class="wrap" id="cv" style="padding-top:70px"><div class="eyebrow">Télécharger</div><h2 class="st">Mon CV</h2>
      <a class="btn" href="${SITE.cv}" target="_blank" rel="noopener">Ouvrir <span class="ch">›</span></a> <a class="btn ghost" href="${SITE.cv}" download>Télécharger</a> <a class="btn ghost" href="${SITE.github}" target="_blank" rel="noopener">GitHub</a>
      <object class="pdf" data="${SITE.cv}" type="application/pdf"></object></section>
    <section class="wrap" id="contact"><div class="eyebrow">Écrivez-moi</div><h2 class="st">Contact</h2><p class="lead">Une opportunité, une question ? Je réponds rapidement.</p>
      <form style="max-width:680px" action="https://formsubmit.co/${SITE.email}" method="POST"><input type="hidden" name="_subject" value="Message depuis mon portfolio">
      <div><label for="n">Nom</label><input id="n" name="name" required></div><div><label for="e">E-mail</label><input id="e" type="email" name="email" required></div>
      <div><label for="m">Message</label><textarea id="m" name="message" rows="6" required></textarea></div><div><button class="btn cut" type="submit">Envoyer <span class="ch">›</span></button></div></form></section>`
};

const NAV = [["index", "Accueil", "index.html"], ["competences", "Compétences", "competences.html", COMPETENCES.map(c => [c.titre, `competence.html?id=${c.id}`])],
  ["projets", "Projets", "projets.html", PROJETS.map(p => [p.titre, `projet.html?id=${p.id}`])], ["formation", "Poursuite d’études", "formation.html"], ["contact", "CV & Contact", "contact.html"]];
const page = document.body.dataset.page;
const parent = { competence: "competences", projet: "projets" }[page] || page;

document.body.insertAdjacentHTML("afterbegin", `<header>
  <div class="topbar"><span>${SITE.nom} · Portfolio ®</span><span><a href="${SITE.github}" target="_blank" rel="noopener">GitHub</a><a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${SITE.cv}" target="_blank" rel="noopener">CV</a></span></div>
  <div class="navbar"><a class="logo" href="index.html" aria-label="Accueil">AL</a>
  <nav>${NAV.map(n => `<div><a href="${n[2]}" class="${n[3] ? "sub-t " : ""}${n[0] === parent ? "on" : ""}">${n[1]}</a>${n[3] ? `<div class="sub">${n[3].map(s => `<a href="${s[1]}">${s[0]}</a>`).join("")}</div>` : ""}</div>`).join("")}</nav>
  <a class="btn cut header-btn" href="contact.html#contact">Me contacter</a>
  <button class="burger" aria-label="Menu">☰</button></div></header>
  <main>${PAGES[page]()}</main>
  <footer><div class="fgrid"><div><h3>${SITE.nom}</h3><p style="color:var(--mut)">${SITE.recherche}<br>${SITE.lieu}</p></div>
  <div><h3>Pages</h3>${NAV.map(n => `<a href="${n[2]}">${n[1]}</a>`).join("")}</div>
  <div><h3>Liens</h3><a href="${SITE.github}" target="_blank" rel="noopener">GitHub</a><a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${SITE.cv}" target="_blank" rel="noopener">CV (PDF)</a></div></div>
  <div class="copy">© 2026 ${SITE.nom} · Portfolio</div></footer>`);
document.title = (page === "index" ? SITE.nom + " – Portfolio" : ($(".pagehead h1") || {}).textContent + " – " + SITE.nom);
function $(s) { return document.querySelector(s); }
$(".burger").onclick = () => $("nav").classList.toggle("open");

/* Apparition au défilement */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".rv").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 90 + "ms"; io.observe(el); });

/* Étoiles animées de l'accueil */
const cv = $("#stars");
if (cv) {
  const x = cv.getContext("2d"); let W, H, S = [];
  const size = () => { W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight; S = Array.from({ length: Math.round(W * H / 6000) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + .2, v: Math.random() * .15 + .02, p: Math.random() * 6 })); };
  size(); addEventListener("resize", size);
  (function loop(t) { x.clearRect(0, 0, W, H); S.forEach(s => { s.x -= s.v; if (s.x < 0) s.x = W; x.globalAlpha = .4 + .6 * Math.abs(Math.sin(t / 1200 + s.p)); x.fillStyle = "#cfe8ff"; x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.3); x.fill(); }); requestAnimationFrame(loop); })(0);
}
