import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import data from '../data/tutorijali.json'
import TutorialCard from '../components/TutorialCard'

const razinaBoja = {
  'početnik':  'badge-success',
  'srednji':   'badge-warning',
  'napredni':  'badge-error',
}

const razinaStars = {
  'početnik':  '★☆☆',
  'srednji':   '★★☆',
  'napredni':  '★★★',
}

export default function TutorialPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tutorial = data.tutorijali.find((t) => t.id === id)
  const [aktivnaTab, setAktivnaTab] = useState('alati')

  if (!tutorial) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 font-body text-craft-dark/50">
        <div className="text-5xl mb-4">🔧</div>
        <p className="text-lg mb-4">Tutorial nije pronađen.</p>
        <Link to="/" className="btn-primary-craft btn btn-sm">← Povratak na početnu</Link>
      </div>
    )
  }

  const kategorija = data.kategorije.find((k) => k.id === tutorial.kategorija)
  const srodni = data.tutorijali
    .filter((t) => t.kategorija === tutorial.kategorija && t.id !== tutorial.id)
    .slice(0, 3)

  return (
    <div className="pt-20">
      {/* ── BREADCRUMB / BACK ── */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm font-body text-craft-dark/50 hover:text-craft-gold transition-colors"
        >
          ← Unatrag
        </button>
        <span className="text-craft-dark/20">/</span>
        {kategorija && (
          <Link
            to={`/?kategorija=${kategorija.id}`}
            className="badge badge-sm font-body hover:badge-warning transition-colors"
          >
            {kategorija.ikona} {kategorija.naziv}
          </Link>
        )}
      </div>

      {/* ── HEADER ── */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Info */}
          <div className="md:col-span-3">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-craft-dark leading-tight mb-4 animate-fade-up">
              {tutorial.naslov}
            </h1>
            <p className="font-body text-craft-dark/60 text-lg leading-relaxed mb-6 animate-fade-up stagger-1">
              {tutorial.opis}
            </p>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-3 animate-fade-up stagger-2">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-craft-warm">
                <span className="text-xs font-body text-craft-dark/50 uppercase tracking-wider">Razina</span>
                <span className={`badge badge-sm font-body ${razinaBoja[tutorial.razina]}`}>
                  {tutorial.razina}
                </span>
                <span className="text-craft-gold text-xs">{razinaStars[tutorial.razina]}</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-craft-warm">
                <span className="text-xs font-body text-craft-dark/50 uppercase tracking-wider">Vrijeme</span>
                <span className="font-body font-medium text-craft-dark text-sm">
                  {tutorial.vrijemeMin >= 60
                    ? `${Math.floor(tutorial.vrijemeMin / 60)}h${tutorial.vrijemeMin % 60 ? ` ${tutorial.vrijemeMin % 60}min` : ''}`
                    : `${tutorial.vrijemeMin} min`}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-craft-warm">
                <span className="text-xs font-body text-craft-dark/50 uppercase tracking-wider">Trošak</span>
                <span className="font-body font-medium text-craft-gold text-sm">{tutorial.trošak}</span>
              </div>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="md:col-span-2 animate-fade-in stagger-1">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img
                src={tutorial.thumbnailUrl}
                alt={tutorial.naslov}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO + KORACI ── */}
      <section className="bg-craft-navy py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Video */}
            <div className="md:col-span-2">
              <div className="video-wrapper shadow-2xl">
                <iframe
                  src={tutorial.videoUrl}
                  title={tutorial.naslov}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Koraci */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white text-lg mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-craft-gold flex items-center justify-center text-xs text-white font-bold">
                  {tutorial.koraci.length}
                </span>
                Koraci izrade
              </h3>
              <ol className="space-y-3">
                {tutorial.koraci.map((korak, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-craft-gold/20 border border-craft-gold/40 text-craft-gold text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="font-body text-white/70 text-sm leading-relaxed">{korak}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALATI & MATERIJALI ── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex gap-1 bg-craft-warm rounded-full p-1 w-fit mb-8">
          <button
            onClick={() => setAktivnaTab('alati')}
            className={`px-6 py-2 rounded-full text-sm font-body font-medium transition-all ${
              aktivnaTab === 'alati'
                ? 'bg-white text-craft-dark shadow-sm'
                : 'text-craft-dark/50 hover:text-craft-dark'
            }`}
          >
            🔧 Alati ({tutorial.alati.length})
          </button>
          <button
            onClick={() => setAktivnaTab('materijali')}
            className={`px-6 py-2 rounded-full text-sm font-body font-medium transition-all ${
              aktivnaTab === 'materijali'
                ? 'bg-white text-craft-dark shadow-sm'
                : 'text-craft-dark/50 hover:text-craft-dark'
            }`}
          >
            🪵 Materijali ({tutorial.materijali.length})
          </button>
        </div>

        {/* Alati */}
        {aktivnaTab === 'alati' && (
          <div>
            <div className="mb-4">
              <h2 className="font-display text-2xl font-semibold text-craft-dark">Korišteni alati</h2>
              <p className="font-body text-craft-dark/50 text-sm mt-1">
                Klikni na alat za kupnju na Bauhaus webshop-u
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tutorial.alati.map((alat, i) => (
                <a
                  key={i}
                  href={alat.bauhasUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white rounded-2xl p-5 border border-craft-warm hover:border-craft-gold/40 hover:shadow-md transition-all duration-200 animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-craft-gold/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-craft-gold/20 transition-colors">
                    {alat.ikona}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-craft-dark text-sm leading-snug group-hover:text-craft-gold transition-colors">
                      {alat.naziv}
                    </p>
                    <p className="text-xs font-body text-craft-dark/40 mt-0.5 flex items-center gap-1">
                      <span>Bauhaus</span>
                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">↗</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Materijali */}
        {aktivnaTab === 'materijali' && (
          <div>
            <div className="mb-4">
              <h2 className="font-display text-2xl font-semibold text-craft-dark">Korišteni materijali</h2>
              <p className="font-body text-craft-dark/50 text-sm mt-1">
                Klikni na materijal za kupnju na Bauhaus webshop-u
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tutorial.materijali.map((mat, i) => (
                <a
                  key={i}
                  href={mat.bauhasUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white rounded-2xl p-5 border border-craft-warm hover:border-craft-gold/40 hover:shadow-md transition-all duration-200 animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-craft-gold/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-craft-gold/20 transition-colors">
                    {mat.ikona}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-craft-dark text-sm leading-snug group-hover:text-craft-gold transition-colors">
                      {mat.naziv}
                    </p>
                    <p className="text-xs font-body text-craft-dark/40 mt-0.5 flex items-center gap-1">
                      <span>Bauhaus</span>
                      <span className="group-hover:translate-x-0.5 transition-transform inline-block">↗</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── SRODNI TUTORIJALI ── */}
      {srodni.length > 0 && (
        <section className="py-16 bg-base-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-semibold text-craft-dark mb-2">
              Iz iste kategorije
            </h2>
            <p className="font-body text-craft-dark/50 text-sm mb-8">
              {kategorija?.ikona} {kategorija?.naziv} – još vodiča
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {srodni.map((t, i) => (
                <TutorialCard key={t.id} tutorial={t} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
