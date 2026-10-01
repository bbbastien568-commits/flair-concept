import Header from './components/header/header.tsx'
import Footer from './components/footer/footer.tsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <h1>FLAIR CONCEPT</h1>
        <p>Bienvenue sur le site de FLAIR CONCEPT.</p>
      </main>

      <Footer />
    </div>
  )
}

export default App