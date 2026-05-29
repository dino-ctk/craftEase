import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TutorialPage from './pages/TutorialPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="grain min-h-screen flex flex-col bg-cream">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorial/:id" element={<TutorialPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
