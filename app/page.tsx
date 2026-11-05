
const formations = [
  {
    numero: "01",
    icone: "⌘",
    titre: "Développement web",
    description:
      "Apprenez HTML, CSS, JavaScript, React et Next.js pour construire des applications web modernes.",
    niveau: "Débutant à avancé",
    duree: "12 semaines",
  },
  {
    numero: "02",
    icone: "◎",
    titre: "Réseaux & systèmes",
    description:
      "Maîtrisez les réseaux informatiques, Linux, Windows Server et les fondamentaux de la cybersécurité.",
    niveau: "Tous niveaux",
    duree: "10 semaines",
  },
  {
    numero: "03",
    icone: "✳",
    titre: "Intelligence artificielle",
    description:
      "Découvrez Python, les données, le machine learning et les applications concrètes de l'IA.",
    niveau: "Intermédiaire",
    duree: "8 semaines",
  },
];

const avantages = [
  {
    numero: "01",
    titre: "Apprendre par la pratique",
    description:
      "Des projets concrets pour développer des compétences directement applicables.",
  },
  {
    numero: "02",
    titre: "Des compétences actuelles",
    description:
      "Des programmes axés sur les technologies utilisées dans le monde professionnel.",
  },
  {
    numero: "03",
    titre: "Progresser à son rythme",
    description:
      "Un parcours structuré pour avancer des fondamentaux aux projets avancés.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container navigation">
          <a href="#" className="logo" aria-label="Académie Numérique">
            <span className="logo-icon">A<span>.</span></span>
            <span>Académie<span className="accent">Numérique</span></span>
          </a>

          <nav className="nav-links" aria-label="Navigation principale">
            <a href="#accueil">Accueil</a>
            <a href="#formations">Formations</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Nous contacter <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                FORMATION INFORMATIQUE À GOMA
              </span>

              <h1>
                Construisez votre <span>avenir numérique.</span>
              </h1>

              <p className="hero-description">
                Développez les compétences qui feront la différence.
                Du développement web aux réseaux informatiques et
                à l'intelligence artificielle, apprenez à créer,
                innover et évoluer.
              </p>

              <div className="hero-actions">
                <a href="#formations" className="button button-primary">
                  Explorer les formations <span aria-hidden="true">↗</span>
                </a>
                <a href="#apropos" className="button button-outline">
                  Découvrir l'académie
                </a>
              </div>

              <div className="hero-note">
                <span className="note-line" />
                Des compétences concrètes pour le monde de demain
              </div>
            </div>

            <div className="hero-visual" aria-label="Illustration numérique">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="center-core">
                <span className="core-symbol">{"</>"}</span>
              </div>
              <div className="floating-tag floating-tag-one">
                <span className="tag-dot" /> DEV / WEB
              </div>
              <div className="floating-tag floating-tag-two">
                NETWORK / SYSTEM
              </div>
              <div className="floating-tag floating-tag-three">
                AI + DATA
              </div>
              <div className="visual-grid" />
            </div>
          </div>

          <div className="container hero-bottom">
            <span>APPRENDRE</span>
            <span className="bottom-separator">✦</span>
            <span>PRATIQUER</span>
            <span className="bottom-separator">✦</span>
            <span>INNOVER</span>
          </div>
        </section>

        <section className="section formations-section" id="formations">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">01 / NOS PROGRAMMES</span>
                <h2>Explorez de nouvelles <span>possibilités.</span></h2>
              </div>
              <p>
                Des parcours pensés pour transformer votre curiosité
                en compétences techniques solides.
              </p>
            </div>

            <div className="formation-grid">
              {formations.map((formation) => (
                <article className="formation-card" key={formation.numero}>
                  <div className="card-top">
                    <span className="card-number">{formation.numero}</span>
                    <span className="card-icon" aria-hidden="true">
                      {formation.icone}
                    </span>
                  </div>
                  <h3>{formation.titre}</h3>
                  <p>{formation.description}</p>
                  <div className="card-meta">
                    <span>{formation.niveau}</span>
                    <span>{formation.duree}</span>
                  </div>
                  <a href="#contact" className="card-link">
                    En savoir plus <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="apropos">
          <div className="container about-grid">
            <div>
              <span className="section-label">02 / NOTRE APPROCHE</span>
              <h2>
                Plus que des cours.
                <span> Des compétences pour agir.</span>
              </h2>
              <p className="about-lead">
                Notre ambition est de rendre les technologies
                accessibles grâce à une approche orientée vers
                la compréhension et la réalisation de projets.
              </p>
              <a href="#contact" className="text-link">
                Parlons de votre projet <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="advantages">
              {avantages.map((avantage) => (
                <div className="advantage" key={avantage.numero}>
                  <span className="advantage-number">{avantage.numero}</span>
                  <div>
                    <h3>{avantage.titre}</h3>
                    <p>{avantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-box">
            <div>
              <span className="section-label">03 / CONTACT</span>
              <h2>Votre prochain chapitre commence ici.</h2>
              <p>
                Une question sur les formations ? Écrivez-nous pour
                en savoir plus sur les programmes et les inscriptions.
              </p>
            </div>

            <a
              href="mailto:contact@exemple.com"
              className="button button-light"
            >
              Envoyer un message <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#accueil" className="logo">
            <span className="logo-icon">A<span>.</span></span>
            <span>Académie<span className="accent">Numérique</span></span>
          </a>
          <p>© Académie Numérique. Goma, RDC.</p>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </>
  );
}
