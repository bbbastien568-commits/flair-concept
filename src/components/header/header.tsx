import './header.css'

function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        FLAIR CONCEPT
      </a>

      <nav className="header__nav">
        <a href="/">Accueil</a>
        <a href="/entreprise">L'entreprise</a>
        <a href="/services">Services</a>
        <a href="/realisations">Réalisations</a>
        <a href="/actualites">Actualités</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header