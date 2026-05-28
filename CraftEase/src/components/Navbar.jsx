import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import data from '../data/tutorijali.json'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleKategorijaClick = (id) => {
    setMenuOpen(false)
    navigate(`/?kategorija=${id}`)
    setTimeout(() => {
      const el = document.getElementById('tutorijali')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-craft-navy shadow-sm border-b border-white/10'
          : 'bg-craft-navy'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-craft-gold flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <span className="text-white font-display font-bold text-sm leading-none">C</span>
          </div>
          <span className="font-display font-semibold text-white text-lg tracking-tight">
            Craft<span className="text-craft-gold">Ease</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link text-sm font-body ${isActive ? 'active' : ''}`
            }
          >
            Početna
          </NavLink>
          {data.kategorije.map((kat) => (
            <button
              key={kat.id}
              onClick={() => handleKategorijaClick(kat.id)}
              className="nav-link text-sm font-body bg-transparent border-none cursor-pointer"
            >
              {kat.naziv}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Izbornik"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-craft-navy border-b border-white/10`}
      >
        <nav className="flex flex-col px-6 py-4 gap-3">
          <NavLink
            to="/"
            end
            className="font-body text-sm text-white/80 py-1.5"
            onClick={() => setMenuOpen(false)}
          >
            Početna
          </NavLink>
          {data.kategorije.map((kat) => (
            <button
              key={kat.id}
              onClick={() => handleKategorijaClick(kat.id)}
              className="font-body text-sm text-white/80 text-left py-1.5 bg-transparent border-none cursor-pointer"
            >
              <span className="mr-2">{kat.ikona}</span>{kat.naziv}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
