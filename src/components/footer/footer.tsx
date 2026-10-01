import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 FLAIR CONCEPT. Tous droits réservés.</p>

      <a
        href="https://www.instagram.com/flair_concept84/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de FLAIR CONCEPT"
      >
        <svg
          className="instagram-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      </a>
    </footer>
  )
}

export default Footer
