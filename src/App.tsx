import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/header.tsx'
import Footer from './components/footer/footer.tsx'

import Accueil from './pages/accueil/accueil.tsx'
import Entreprise from './pages/entreprise/entreprise.tsx'
import Services from './pages/services/services.tsx'
import Realisations from './pages/realisations/realisation.tsx'
import Actualites from './pages/actualites/actualites.tsx'
import Contact from './pages/contact/contact.tsx'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App