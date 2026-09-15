import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #5E5946 0%, #AE887B 25%, #C3C1AB 50%, #D9BFB1 75%, #F0DED0 100%)' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer className="py-6 px-4 text-center" style={{ backgroundColor: '#5E5946', color: '#F0DED0' }}>
          <p>© 2024 Your Name. Built with React, TypeScript, and Hero UI.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
