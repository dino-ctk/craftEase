import { Link } from 'react-router-dom'
import data from '../data/tutorijali.json'

const razinaBoja = {
  'početnik':  'badge-success',
  'srednji':   'badge-warning',
  'napredni':  'badge-error',
}

const razinaLabel = {
  'početnik':  '★☆☆',
  'srednji':   '★★☆',
  'napredni':  '★★★',
}

export default function TutorialCard({ tutorial, delay = 0 }) {
  const kategorija = data.kategorije.find((k) => k.id === tutorial.kategorija)

  return (
    <Link
      to={`/tutorial/${tutorial.id}`}
      className="card-tutorial group block animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-craft-warm">
        <img
          src={tutorial.thumbnailUrl}
          alt={tutorial.naslov}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Duration pill */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-body px-2 py-0.5 rounded-full">
          {tutorial.vrijemeMin} min
        </div>
        {/* Category pill */}
        {kategorija && (
          <div className="absolute top-2 left-2 bg-craft-gold text-white text-xs font-body font-medium px-2 py-0.5 rounded-full">
            {kategorija.ikona} {kategorija.naziv}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-craft-dark text-lg leading-snug mb-2 group-hover:text-craft-gold transition-colors line-clamp-2">
          {tutorial.naslov}
        </h3>
        <p className="text-craft-dark/60 text-sm font-body leading-relaxed line-clamp-2 mb-4">
          {tutorial.opis}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`badge badge-sm font-body ${razinaBoja[tutorial.razina] || 'badge-ghost'}`}>
              {tutorial.razina}
            </span>
            <span className="text-xs font-body text-craft-dark/50 tracking-wider">
              {razinaLabel[tutorial.razina]}
            </span>
          </div>
          <span className="text-sm font-body font-medium text-craft-gold">
            {tutorial.trošak}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-craft-warm flex items-center justify-between">
          <span className="text-xs font-body text-craft-dark/40">
            {tutorial.alati.length} alata · {tutorial.materijali.length} materijala
          </span>
          <span className="text-xs font-body font-medium text-craft-gold group-hover:translate-x-1 transition-transform inline-block">
            Pogledaj →
          </span>
        </div>
      </div>
    </Link>
  )
}
