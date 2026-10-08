import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        FLAIR CONCEPT
      </Link>

      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/entreprise">L'entreprise</Link>
        <Link to="/services">Services</Link>
        <Link to="/realisations">Réalisations</Link>
        <Link to="/actualites">Actualités</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header